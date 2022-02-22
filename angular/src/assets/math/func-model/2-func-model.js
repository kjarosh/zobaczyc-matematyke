
(function funcModel(){
	var present = presentation.cartesian({
		range: [[-4, 4], [-4, 4], [-4, 4]],
		scale: [1, 1, 1],
	}).transform({
		position: [0, -1, 0]
	});

	function func(x, y){
		//y /= -8;
		//return y*x*x/20+(y*y+1)/5*x+y*2 + 2;

		//return -1/(x - 5) * (Math.sin(y) + 1.2) * 2;

		//return Math.sin(y) * Math.cosh(x) / 15 + 2;

		//return Math.sin(y) * Math.exp(x) / 15;

		return Math.log(x + 6)*Math.sin(y)*x/6 + 2 + 0.1*Math.cos(y);

		//return Math.atan(x)*(x + 5)*Math.sin(y)/8;
	}

	var ymax = 4;
	var ymin = -4;
	var maxerror = 0.1;

	var resolution = 24;
	var color = Config.colors.orange;

	function emitInBounds(emit, x, y){
		emitBounded(emit, x, y, ymax, ymin, maxerror);
	}

	// cache
	var cstransformp = null;
	function getParamPosition(){
		if(cstransformp == null){
			cstransformp = view.select('#cstransform').get('position');
		}

		return cstransformp.z;
	}


	// slide 1: function in 2D ===========================================================================
	present.slide({
		late: 3,
	})
		.reveal({
			duration: 1,
		})
			.transform({
				position: [0, 0, 0],
				id: 'cstransform',
			}, {
				position: function(t){
					return [0, 0, 4*Math.sin(t)];
				}
			})
				.axis({
					id: 'vaxis',
					axis: 1,
					width: 2,
					detail: 100,
				})

				.grid({
					id: 'vgrid',
					axes: [1, 2],
					width: 1,
					divideX: 10,
					divideY: 10,
					rangeY: [-1, 5]
				})

				.interval({
					id: 'func-interval',
					expr: function(emit, x, i, time){
						var param = getParamPosition();

						emit(x, func(x, param), param);
					},
					channels: 2,
          width: resolution,
				}).line({
					id: '2dplot',
					color: color,
					width: 3,
				})
			.end()

			.area({
				expr: function(emit, x, y, i, j, time){
					emit(x, func(x, y), y);
				},
				channels: 3,
				width: resolution,
				height: resolution,
				items: 1
			}).surface({
				id: '3dplot',
				shaded: true,
				color: color,
				lineX: true,
				lineY: true,
				width: 2
			})
		.end()

		.step({
			target: '#vgrid',
			script: [
				{ width: 1 },
				{ width: 0 },
			],
			pace: 1,
		})
		.step({
			target: '#vaxis',
			script: [
				{ width: 2 },
				{ width: 2 },
				{ width: 0 },
			],
			pace: 2,
		})
		.step({
			target: '#3dplot',
			script: [
				{ opacity: 0 },
				{ opacity: 0 },
				{ opacity: .5 },
				{ opacity: 1 },
			],
			pace: 2,
		})
		.step({
			target: '#2dplot',
			script: [
				{ width: 2 },
				{ width: 3 },
				{ width: 3 },
				{ width: 0 },
			],
			pace: 2,
		});

	present.slide({
		late: 2,
	})
		.reveal({
			duration: 1,
			delayExit: 0.5,
		})
			.axis({
				axis: 3,
				width: 2,
				detail: 100,
				zOrder: 3
			}).axis({
				axis: 1,
				width: 2,
				detail: 100,
				zOrder: 3
			}).grid({
				axes: [1, 3],
				width: 1,
				divideX: 10,
				divideY: 10,
				color: Config.colors.light_gray,
				zOrder: 3
			});

	present.slide();
	present.slide();
})();
