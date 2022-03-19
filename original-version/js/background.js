var camera, scene, renderer, dirLight, hemiLight;
var stats;
var torus;
var updateFunctions = [];

var clock = new THREE.Clock();

var SCROOLING_MULT = 0.01;
var BLENDER_SCALE = 10;

init();
animate();

var resizeCallbacks = [];
function resizeCallback(func, exec){
	if(exec){
		func();
	}
	
	resizeCallbacks.push(func);
}

function init(){
	var container = document.getElementById('background');
	
	camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.set( 0, 0, 6 );
	
	scene = new THREE.Scene();
	
	scene.fog = new THREE.Fog(0xffffff, 50, 120);
	//scene.fog.color.setHSL(0.6, 0, 1);
	
	// LIGHTS
	
	hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
	hemiLight.color.setHSL( 0.6, 1, 0.6 );
	hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
	hemiLight.position.set( 0, 500, 0 );
	
	//
	
	dirLight = new THREE.DirectionalLight( 0xffffff, 0.6 );
	dirLight.color.setHSL( 0.1, 1, 0.95 );
	dirLight.position.set( -1, 1.75, 1 );
	dirLight.position.multiplyScalar( 50 );
	
	dirLight.castShadow = true;
	
	dirLight.shadowMapWidth = 2048;
	dirLight.shadowMapHeight = 2048;
	
	var d = 50;
	
	dirLight.shadowCameraLeft = -d;
	dirLight.shadowCameraRight = d;
	dirLight.shadowCameraTop = d;
	dirLight.shadowCameraBottom = -d;
	
	dirLight.shadowCameraFar = 3500;
	dirLight.shadowBias = -0.0001;
	//dirLight.shadowCameraVisible = true;
	
	
	//scene.add( hemiLight );
	//scene.add( dirLight );
	scene.add(new THREE.AmbientLight(0xffffff));
	
	var radius = 20,
	segments = 16,
	rings = 16;
	
	var material = new THREE.MeshPhongMaterial({
		color: 0xffffff,
		specular: 0xffffff,
		shininess: 20,
		morphTargets: true,
		vertexColors: THREE.FaceColors,
		shading: THREE.FlatShading,
		side: THREE.DoubleSide
	});
	
	/*var material = new THREE.MeshLambertMaterial( { color: 0xbbbbbb, shading: THREE.FlatShading } );*/
	
	var loader = new THREE.JSONLoader();
	
	// TORUS
	loader.load("models/torus.json", function(geometry){
		var mesh = new THREE.Mesh( geometry, material);
		
		mesh.scale.set(BLENDER_SCALE * 5, BLENDER_SCALE * 5, BLENDER_SCALE * 5);
		mesh.position.y = minPosition() / 3;
		mesh.position.x = 1000;
		mesh.position.z = -2000;
		mesh.rotation.z = Math.PI/7;
		mesh.rotation.x = -Math.PI/7;
		
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		
		scene.add(mesh);
	});
	
	// SPHERE
	
	loader.load( "models/sphere.json", function(geometry){
		var mesh = new THREE.Mesh( geometry, material);
		
		mesh.scale.set(BLENDER_SCALE * 10, BLENDER_SCALE * 10, BLENDER_SCALE * 10);
		resizeCallback(function(){
			mesh.position.y = minPosition() / 10;
		}, true);
		mesh.position.z = -1600;
		mesh.position.x = -900;
		mesh.rotation.y = Math.PI*3/4;
		
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		
		scene.add(mesh);
	});
	
	// TWISTED CURVE
	loader.load("models/twisted-curve.json", function(geometry){
		var mesh = new THREE.Mesh(geometry, material);
		
		mesh.scale.set(BLENDER_SCALE, BLENDER_SCALE, BLENDER_SCALE);
		resizeCallback(function(){
			mesh.position.y = minPosition() / 2;
		}, true);
		mesh.position.z = -800;
		
		
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		
		scene.add(mesh);
	});
	
	// GROUND
	loader.load("models/ground.json", function(geometry){
		var mesh = new THREE.Mesh(geometry, material);
		
		mesh.scale.set(BLENDER_SCALE, BLENDER_SCALE, BLENDER_SCALE);
		resizeCallback(function(){
			mesh.position.y = minPosition() - 70;
		}, true);
		mesh.position.z = -800;
		
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		
		scene.add(mesh);
		
		for(var i = 0; i < mesh.geometry.vertices.length; ++i){
			var pos = mesh.geometry.vertices[i];
			pos.oldY = pos.y;
		}
		
		var FUNC_SCALE = 1/10;
		var FUNC2_SCALE = 1/3;
		var FUNC3_SCALE = 1/3;
		var TIME_SCALE = 1/2;
		updateFunctions.push(function(t, d){
			for(var i = 0; i < mesh.geometry.vertices.length; ++i){
				var pos = mesh.geometry.vertices[i];
				var oy = pos.y;
				pos.y = pos.oldY +
					0.5*(Math.sin(FUNC_SCALE*pos.x + TIME_SCALE*t) + Math.sin(FUNC_SCALE*pos.y + TIME_SCALE*t)) +
					0.1*(Math.sin(FUNC2_SCALE*pos.x + TIME_SCALE*t) + Math.sin(FUNC2_SCALE*pos.y + TIME_SCALE*t));
			}
			
			mesh.geometry.verticesNeedUpdate = true;
		});
	});
	
	// BG
	/*var MAX_BG = 3;
	for(var i = 0; i <= MAX_BG; ++i){
		loader.load("models/bg-" + i + ".json", function(geometry){
			var mesh = new THREE.Mesh(geometry, material);
			
			mesh.scale.set(1, 1, 1);
			
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			
			scene.add(mesh);
		});
	}*/
	
	// RENDERER
	
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setClearColor(scene.fog.color);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);
	
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	
	//
	
	window.addEventListener('resize', onWindowResize, false);
	document.addEventListener('keydown', onKeyDown, false);
}

function onWindowResize(){
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	for(var i = 0; i < resizeCallbacks.length; ++i){
		resizeCallbacks[i]();
	}
}

function onKeyDown(event){
	switch(event.keyCode){
		case 72: // h
		hemiLight.visible = !hemiLight.visible;
		break;
		
		case 68: // d
		dirLight.visible = !dirLight.visible;
		break;
	}
}

function animate(){
	setTimeout(function(){
        requestAnimationFrame(animate);
    }, 1000 / 25);
	
	render();
}

$(window).scroll(function(e){
	camera.position.y = -$(window).scrollTop() * SCROOLING_MULT;
	//console.log(camera.position);
});

function minPosition(){
	return -($(window).height() - window.innerHeight) * SCROOLING_MULT;
}

function render(){
	var delta = clock.getDelta();
	var t = clock.getElapsedTime();
	
	for(var i = 0; i < updateFunctions.length; ++i){
		updateFunctions[i](t, delta);
	}
	
	renderer.render(scene, camera);
}
