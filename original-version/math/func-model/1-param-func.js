
var functionParam = 0;
(function paramFunc(){
	var present = presentation.cartesian({
		range: [[-40, 40], [-40, 40], [-40, 40]],
		scale: [10, 10, 10],
	});
	
	var slide;
	slide = present.slide({
		late: 14,
	});
	scriptCamera(slide);
	
	function func1(x, m){
		x *= 4;
		return ((m+2)*x*x/8-4*m*x+8*m*m-3)/4;
	}
	
	function func2(x, m){
		m /= 5;
		return x+m*x*x*x;
	}
	
	present.slide({
		early: 1,
		late: 2,
	}).reveal({
		duration: 1,
	})
		.axis({
			axis: 1,
			width: 2,
			detail: 10,
		})
		.axis({
			axis: 2,
			width: 2,
			detail: 10,
		})
		.grid({
			axes: [1, 2],
			width: 1,
			divideX: 40,
			divideY: 40,
		});
	
	present.slide({
		early: 1,
	})
		.reveal({
			duration: 1,
		})
			.interval({
				expr: function(emit, x, i, time){
					var param = Math.sin(time);
					
					emit(x, func1(x, param), param);
				},
				channels: 2,
				length: 512,
			}).line({
				color: Config.colors.blue,
				width: 3,
			})
		.end();
	
	present.slide({
		
	})
		.reveal({
			duration: 1,
		})
			.interval({
				expr: function(emit, x, i, time){
					var param = Math.sin(time);
					
					emit(x, func2(x, param), param);
				},
				channels: 2,
				length: 512,
			}).line({
				color: Config.colors.green,
				width: 3,
			})
		.end();
})();