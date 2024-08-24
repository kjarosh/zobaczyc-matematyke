(function lineIntegral(){
	var present = presentation.cartesian({
		range: [[-2, 2], [-2, 2], [-2, 2]],
		scale: [1, 1, 1],
	});


	function func(x, y){
		return 1/(x*x*x*x+1)/(y*y*y*y+1)*Math.sin(x)*Math.sin(y) + 0.5;
	}

	var path = {
		range: [-1, 1],
		func: function(t){
			return [-Math.sin(Math.PI*t)*0.7, t*1.5];
		},
		normalize: function(t){
			return t;
		},
	};

	var resolution = 24;
	var curveResolution = 64;
	var color = Config.colors.blue;
	var vectorsNum = 20;

	present.slide({
		late: 4
	})
		.step({
			target: 'camera',
			pace: 1.5,
			script: [
				{ position: [-0.7, 2, -4] },
				{ position: [-0.7, 2, -4] },
				{ position: [0, 4, -0.5] },
				{ position: [-3, 2.3, -1.2] },
			]
		})

		.reveal({
			delayEnter: 1,
			duration: 1,
		})
			.grid({
				axes: [1, 3],
				width: 0.8,
				divideX: 15,
				divideY: 15,
				zOrder: 3
			})
		.end();

	present.slide({
		late: 3
	})
		.reveal({
			duration: 1,
		})
			.area({
				expr: function(emit, x, y, i, j, time){
					emit(x, func(x, y), y);
				},
				channels: 3,
				width: resolution,
				height: resolution,
			}).surface({
				id: 'func',
				shaded: true,
				color: color,
				lineX: true,
				lineY: true,
				width: 2,
				//zIndex: 1,
				opacity: 0.5,
				zOrder: 5,
			})
		.end()

		.step({
			target: '#func',
			pace: 1.5,
			script: [
				{ opacity: 1 },
				{ opacity: 1 },
				{ opacity: 0.5 },
				{ opacity: 0 },
			]
		});

	// slide 2: curve C ===========================================================================
	present.slide({
		late: 2
	})
		.reveal({
			delayEnter: 2,
			duration: 1,
		})
			// curve
			.interval({
				range: path.range,
				expr: function(emit, t, i, time){
					t = path.normalize(t);

					var z = path.func(t);
					var x = z[0];
					var y = z[1];
					emit(x, func(x, y), y);
				},
				channels: 3,
				width: curveResolution,
				items: 1,
				live: false
			}).line({
				color: Config.colors.red,
				width: 2,
				zIndex: 2,
			})
		.end();

	var pathRange0Val = path.func(path.range[0]);
	var pathRange1Val = path.func(path.range[1]);

	// slide 3: projection ===========================================================================
	present.slide({
		late: 1
	})
		.reveal({
			delayEnter: 2,
			duration: 1,
		})
			// curve projection
			.interval({
				range: path.range,
				expr: function(emit, t, i, time){
					t = path.normalize(t);

					var z = path.func(t);
					var x = z[0];
					var y = z[1];
					emit(x, 0, y);
				},
				channels: 3,
        width: curveResolution,
				items: 1,
				live: false
			}).line({
				color: Config.colors.green,
				width: 2,
				zIndex: 2,
			})

			// projection
			.interval({
				range: path.range,
				expr: function(emit, t, i, time){
					t = path.normalize(t);

					var z = path.func(t);
					var x = z[0];
					var y = z[1];
					emit(x, func(x, y), y);
					emit(x, 0, y);
				},
				channels: 3,
        width: vectorsNum,
				items: 2,
				live: false
			}).vector({
				id: 'vectorProjection',
				color: Config.colors.green,
				//width: 2, //animated
				start: true,
				zOrder: 4,
			})
		.end()

		.step({
			target: '#vectorProjection',
			script: [
				{ width: 2 },
				{ width: 0 }
			]
		});

	var lastxy = null;

	// slide 4: straighten ===========================================================================
	present.slide({
		late: 0
	})
		.reveal({
			delayEnter: 1,
			duration: 1,
		})
			// sums
			.area({
				axes: [1, 2],
				rangeX: path.range,
				rangeY: [0, 1],
				expr: function(emit, u, v, i, j, time){
					u = path.normalize(u);

					var z = path.func(u);
					var x = z[0];
					var y = z[1];

					z = func(x, y);

					if(v == 1){
						emit(x, 0, y);
					}else{
						emit(x, z, y);
					}
				},
				width: curveResolution,
				height: 2,
				items: 1,
			}).surface({
				color: Config.colors.orange,
				width: 1,
				zOrder: 5,
				opacity: 0.7,
			})

			.array({
				items: 2,
        width: 2,
				channels: 3,
				data: [
					pathRange0Val[0], 0, pathRange0Val[1],
					pathRange1Val[0], 0, pathRange1Val[1],

					pathRange0Val[0], func(pathRange0Val[0], pathRange0Val[1]), pathRange0Val[1],
					pathRange1Val[0], func(pathRange1Val[0], pathRange1Val[1]), pathRange1Val[1],
				],
			}).line({
				color: Config.colors.orange,
				width: 2,
				zIndex: 2,
			})
		.end();
})();
