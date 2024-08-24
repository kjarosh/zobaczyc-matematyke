
(function reImPlot(){
	present = presentation.cartesian({
		range: [[-1, 1], [-1, 1], [-1, 1]],
		scale: [1.5, 1.5, 1.5],
	});
	
	renderRI(
		function(x, y, i){
			var ret = func1(x, y, i);
			return [ret[0], ret[1]/2];
		},
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		})
	);
	
	renderRI(
		func2,
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		})
	);
	
	renderRI(
		function(x, y, i){
			x *= 4;
			y *= 2;
			
			var ret = func3(x, y, i);
			return [ret[0]/4, ret[1]/4];
		},
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		})
	);
	
	renderRI(
		function(x, y, i){
			x *= 2;
			y *= 4;
			
			var ret = func4(x, y, i);
			return [ret[0]/4, ret[1]/4];
		},
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		})
	);
	
	renderRI(
		function(x, y, i){
			x *= 2;
			y *= 2;
			
			var ret = func5(x, y, i);
			return [ret[0]/2, ret[1]/2];
		},
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		})
	);
	
	renderRI(
		function(x, y, i){
			x *= 2;
			y *= 2;
			
			var ret = func6(x, y, i);
			return [ret[0]/2, ret[1]/2];
		},
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		})
	);
	
	renderRI(
		function(x, y, i){
			x *= 2;
			y *= 2;
			
			var ret = func7(x, y, i);
			return [ret[0]/2, ret[1]/2];
		},
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		})
	);
	
	renderRI(
		function(x, y, i){
			x *= Math.PI;
			y *= Math.PI;
			
			var ret = func8(x, y, i);
			return [ret[0]/2, ret[1]/2];
		},
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		})
	);
	
	renderRI(
		function(x, y, i){
			x *= 5;
			y *= 5;
			
			var ret = func9(x, y, i);
			return [ret[0]/5, ret[1]/5];
		},
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		})
	);
})();