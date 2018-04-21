
(function complexMap(){
	present = presentation.cartesian({
		range: [[-1, 1], [-1, 1], [-1, 1]],
		scale: [1.5, 1.5, 1.5],
	});
	
	var resolution = 700;
	
	present.area({
		id: 'poly',
		height: resolution,
		width: resolution,
		rangeX: [-1, 1],
		rangeY: [-1, 1],
		channels: 3,
		expr: function(emit, x, y, i, j, time){
			emit(x, 0, y);
		},
		live: false,
	});
	
	function renderDomainColoring(func, node, scale){
		var colors = node.area({
			height: resolution,
			width: resolution,
			rangeX: [-1, 1],
			rangeY: [-1, 1],
			channels: 4,
			expr: function(emit, u, v, i, j, time){
				var z = func(scale*u, scale*v);
				var x = z[0];
				var y = z[1];
				
				var arg = Math.atan2(y, x);
				var r = Math.sqrt(x*x+y*y);
				
				var h = 0.5 + arg/(2*Math.PI);
				var s = Math.abs(Math.sin(2*Math.PI*r));
				var b = Math.pow(Math.abs(Math.sin(2*Math.PI*y)*Math.sin(2*Math.PI*x)), 0.25);
				var b2 = 0.5*((1 - s) + b + Math.sqrt(Math.pow(1 - s - b, 2) + 0.01));
				
				var rgb = ColorConvert.HSVtoRGB(h, Math.sqrt(s), b2);
				
				emit(rgb[0], rgb[1], rgb[2], 1);
			},
			live: false,
		});
		
		node
			.surface({
				points: '#poly',
				colors: colors,
				color: Config.colors.white,
			});
	}
	
	renderDomainColoring(
		func1,
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		2
	);
	
	renderDomainColoring(
		func2,
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		2
	);
	
	renderDomainColoring(
		func3,
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		3
	);
	
	renderDomainColoring(
		function(x, y){
			return func4(x, y);
		},
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		3
	);
	
	renderDomainColoring(
		func5,
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		4
	);
	
	renderDomainColoring(
		func6,
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		3
	);
	
	renderDomainColoring(
		func7,
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		2
	);
	
	renderDomainColoring(
		func8,
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		2
	);
	
	renderDomainColoring(
		func9,
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		2
	);
	
	renderDomainColoring(
		function(x, y){
			var r2 = x*x+y*y;
			
			return [
				Math.exp(x/r2)*Math.cos(y/r2),
				Math.exp(x/r2)*Math.sin(y/r2)
			];
		},
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		2
	);
})();