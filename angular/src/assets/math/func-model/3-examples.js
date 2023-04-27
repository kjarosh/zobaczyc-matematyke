(function examples(){
	var present = presentation.cartesian({
		range: [[-4, 4], [-4, 4], [-4, 4]],
		scale: [1, 1, 1],
	}).transform({
		position: [0, -1, 0]
	});

	function func1(x, y){
		return (Math.sin(x)+Math.cos(y))/2+1.1;
	}

	function func2(x, y){
		y += 4;
		y /= 6;

		return x*y*y/4+1;
	}

	function func3(x, y){
		return (-x*x+y*y)/6+1;
	}

	var resolution = 32;

	present.slide({
		late: 3,
	})
		.reveal({
			duration: 1,
		})
			.axis({
				axis: 1,
				width: 2,
				detail: 100,
				zOrder: 3
			})
			.axis({
				axis: 3,
				width: 2,
				detail: 100,
				zOrder: 3
			})
			.grid({
				axes: [1, 3],
				width: 1,
				divideX: 10,
				divideY: 10,
				zOrder: 3
			});

	present.slide()
		.reveal({
			duration: 1,
		})
			.area({
				expr: function(emit, x, y, i, j, time){
					emit(x, func1(x, y), y);
				},
				channels: 3,
				width: resolution,
				height: resolution,
				items: 1
			}).surface({
				shaded: true,
				color: Config.colors.green,
				lineX: true,
				lineY: true,
				width: 2,
        zOrder: 4
			});

	present.slide()
		.reveal({
			duration: 1,
			delayEnter: 1,
		})
			.area({
				expr: function(emit, x, y, i, j, time){
					emit(x, func2(x, y), y);
				},
				channels: 3,
				width: resolution,
				height: resolution,
				items: 1
			}).surface({
				shaded: true,
				color: Config.colors.blue,
				lineX: true,
				lineY: true,
				width: 2,
        zOrder: 4
			});

	present.slide()
		.reveal({
			duration: 1,
			delayEnter: 1,
		})
			.area({
				expr: function(emit, x, y, i, j, time){
					emit(x, func3(x, y), y);
				},
				channels: 3,
				width: resolution,
				height: resolution,
				items: 1
			}).surface({
				shaded: true,
				color: Config.colors.orange,
				lineX: true,
				lineY: true,
				width: 2,
        zOrder: 4
			});
})();
