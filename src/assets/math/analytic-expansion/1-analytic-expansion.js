
(function sinSeries(){
	var present = presentation.cartesian({
		range: [[-1, 1], [-1, 1], [-1, 1]],
		scale: [1.5, 1.5, 1.5],
	});

	function radius(px, py, poles){
		var distancesSquare = [];
		for(var i = 0; i < poles.length; ++i){
			var pole = poles[i];
			var x = px - pole[0];
			var y = py - pole[1];
			distancesSquare.push(x*x + y*y);
		}

		return Math.sqrt(distancesSquare.min());
	}

	function getCircleExpr(position, poles, func, part, scalez, rangez, radius){
		return function(emit, r, t, i, j, time){
			//r = normalizeRadius(r);

			r *= radius(position.x, position.z, poles);

			var x = r*Math.cos(t) + position.x;
			var y = r*Math.sin(t) + position.z;

			x = Math.max(x, -1);
			x = Math.min(x, 1);
			y = Math.max(y, -1);
			y = Math.min(y, 1);

			var z = scalez*func(x, y)[part];

			z = Math.max(z, rangez[0]);
			z = Math.min(z, rangez[1]);

			r = Math.sqrt(x*x + y*y);
			if(x == 0 && y == 0){
				t = 0;
			}else{
				t = Math.atan2(y, x);
			}

			emit(t, r, z);
		};
	}

	function normalizeRadius(r){
		return Math.pow(r, 1/2);
	}

	function taylorSearch(node, func, poles, part, scalez, rangez, script, resolution, radiusFunc){
		if(part != 0 && part != 1){
			part = 0;
		}

		if(!radiusFunc){
			radiusFunc = radius;
		}

		if(!scalez){
			scalez = 1;
		}

		var transform = node.transform({
			position: [-1, -1, -1], // animated
		});

		transform.play({
			from: 0,
			to: script.length - 1,
			pace: 3,
			script: script,
			loop: true,
		});

		var slide1 = node.slide({
			late: 1,
		}).reveal({
			delayEnter: 1,
			duration: 1,
		});

		slide1
			.array({
				data: [0, 0, 0],
				channels: 3,
			}).text({
				data: [part == 0 ? 'Część rzeczywista' : 'Część urojona'],
			}).label({
				offset: [0, -300],
				zIndex: 1,
				color: 'black',
			})

			.transform({
				rotation: [-Math.PI/2, 0, Math.PI/2+Math.PI],
			}).polar().area({
				width: resolution[0],
				height: resolution[1],
				axes: [1, 3],
				rangeY: [0, 2*Math.PI],
				rangeX: [0, 1],
				expr: getCircleExpr(transform.get('position'), poles, func, part, scalez, rangez, radiusFunc),
				items: 1,
				channels: 3,
			}).surface({
				shaded: true,
				color: Config.colors.blue,
				zBias: 4,
			});

		node.slide().reveal({
			duration: 1,
		})
			.area({
				width: 140 + 1,
				height: 140 + 1,
				axes: [1, 3],
				rangeY: [-1, 1],
				rangeX: [-1, 1],
				expr: function(emit, x, y, i, j, time){
					var z = scalez*func(x, y)[part];

					z = Math.max(z, rangez[0]);
					z = Math.min(z, rangez[1]);

					emit(x, z, y);
				},
				items: 1,
				channels: 3,
				live: false,
			}).surface({
				shaded: true,
				color: Config.colors.light_gray,
				opacity: 0.5,
				zBias: 1,
			});

		return slide1;
	}

	// log
	taylorSearch(present, function(x, y){
		if(x == 0 && y == 0){
			return [-5, 0];
		}

		return func9(x, y);
	}, [
		[0, 0],
	], 0, 0.1, [-.5, 100], [
		{ position: [0.2, 0, -0.5] },
		{ position: [0.3, 0, 0.4] },
		{ position: [-0.4, 0, 0.3] },
		{ position: [.2, 0, -.3] },
		{ position: [.2, 0, -0.5] },
	], [20, 200])
		.array({
			channels: 3,
			width: 2,
			data: [
				0, .5, 0,
				0, -.5, 0
			],
		}).line({
			width: 8,
			color: Config.colors.red,
			zBias: 5,
		});



	// sqrt
	taylorSearch(present, func5, [
		[0, 0],
	], 0, 0.7, [-100, 100], [
		{ position: [0.3, 0, 0.1] },
		{ position: [-0.2, 0, 0.4] },
		{ position: [-0.3, 0, -0.2] },
		{ position: [-0.5, 0, -0.2] },
		{ position: [0.5, 0, -0.2] },
		{ position: [0.3, 0, -0.2] },
		{ position: [0.3, 0, 0.1] },
	], [32, 128], function(x, y, poles){
		if(x < 0){
			return Math.abs(y);
		}else{
			return radius(x, y, poles);
		}
	})
		.array({
			channels: 3,
      width: 2,
			data: [
				-1, 0, 0,
				0, 0, 0
			],
		}).line({
			width: 5,
			color: Config.colors.red,
			zBias: 5,
		});



	// 1/z
	taylorSearch(present, func6, [
		[0, 0],
	], 1, 0.05, [-2, 2], [
		{ position: [0.2, 0, -0.5] },
		{ position: [0.3, 0, 0.4] },
		{ position: [-0.4, 0, 0.3] },
		{ position: [.2, 0, -.3] },
		{ position: [0.2, 0, -0.5] },
	], [64, 300])
		.array({
			channels: 3,
      width: 2,
			data: [
				0, 2, 0,
				0, -2, 0,
			],
		}).line({
			width: 5,
			color: Config.colors.red,
			zBias: 5,
		});



	// 1/(z^2+1)
	taylorSearch(present, function(x, y){
		return func7(x*2, y*2);
	}, [
		[0, .5], [0, -.5],
	], 1, 0.2, [-3, 3], [
		{ position: [0.2, 0, -0.5] },
		{ position: [0.3, 0, 0.4] },
		{ position: [-0.4, 0, 0.3] },
		{ position: [.2, 0, -.3] },
		{ position: [0.2, 0, -0.5] },
	], [32, 300])
		.array({
			channels: 3,
      width: 2,
			items: 2,
			data: [
				0, 2, .5,
				0, 2, -.5,

				0, -2, .5,
				0, -2, -.5,
			],
		}).line({
			width: 5,
			color: Config.colors.red,
			zBias: 5,
		});



	// tan
	taylorSearch(present, function(x, y){
		return func8(x*Math.PI*2, y*Math.PI*2);
	}, [
		[0.25, 0], [0.75, 0],
		[-0.25, 0], [-0.75, 0],
	], 0, 0.1, [-1, 1], [
		{ position: [0.2, 0, -0.5] },
		{ position: [0.3, 0, 0.4] },
		{ position: [-0.4, 0, 0.3] },
		{ position: [.2, 0, -.3] },
		{ position: [0.2, 0, -0.5] },
	], [24, 250])
		.array({
			channels: 3,
      width: 2,
			items: 4,
			data: [
				.25, 1, 0,
				-.25, 1, 0,
				.75, 1, 0,
				-.75, 1, 0,

				.25, -1, 0,
				-.25, -1, 0,
				.75, -1, 0,
				-.75, -1, 0,
			],
		}).line({
			width: 5,
			color: Config.colors.red,
			zBias: 5,
		});

})();
