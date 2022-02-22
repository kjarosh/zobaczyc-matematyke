
(function complexMap(){
	present = presentation.cartesian({
		range: [[-1, 1], [-1, 1], [-1, 1]],
		scale: [1.5, 1.5, 1.5],
	});

	var resolution = 6;
	var linemultiplier = 3;

	present.area({
		id: 'plane-colors-low',
		height: resolution,
		width: resolution,
		rangeX: [0, 1],
		rangeY: [0, 1],
		channels: 4,
		expr: function(emit, x, y, i, j, time){
			var h = y;
			var rgb = ColorConvert.HSVtoRGB(h, 1, 1);

			emit(rgb[0], rgb[1], rgb[2], 1);
		},
		live: false,
	});

	present.area({
		id: 'plane-points-low',
		height: resolution,
		width: resolution,
		rangeX: [-0.8, 0.8],
		rangeY: [-0.8, 0.8],
		channels: 3,
		expr: function(emit, x, y, i, j, time){
			emit(x, 0, y);
		},
		live: false,
	});

	present.area({
		id: 'plane-colors',
		height: resolution*linemultiplier,
		width: resolution*linemultiplier,
		rangeX: [0, 1],
		rangeY: [0, 1],
		channels: 4,
		expr: function(emit, x, y, i, j, time){
			var h = y;
			var rgb = ColorConvert.HSVtoRGB(h, 1, 1);

			emit(rgb[0], rgb[1], rgb[2], 1);
		},
		live: false,
	});

	function renderMap(func, slide, range, scale){
		if(!scale){
			scale = 1;
		}

		slide.transform({
			pass: 'eye',
			position: [-1.2, 0, -4],
			scale: [1/2, 1/2, 1/2],
		})
			.array({
				data: [0, 0, 0],
				channels: 3,
			}).text({
				data: ['Przed przekształceniem'],
			}).label({
				offset: [0, -300],
				zIndex: 1,
				color: 'black',
			})

			.grid({
				axes: [1, 3],
				divideX: 10,
				divideY: 10,
				width: 1,
				zBias: -10,
			})

			.surface({
				colors: '#plane-colors-low',
				points: '#plane-points-low',
				color: Config.colors.white,
			})

			.line({
				points: '#plane-points-low',
				width: 4,
				color: Config.colors.black,
				zBias: 20,
			})

			.transpose({
				source: '#plane-points-low',
				order: 'yx',
			}).line({
				width: 4,
				color: Config.colors.black,
				zBias: 20,
			});

		var node = slide.transform({
			pass: 'eye',
			position: [1.2, 0, -4],
			scale: [1/2, 1/2, 1/2],
		})
			.array({
				data: [0, 0, 0],
				channels: 3,
			}).text({
				data: ['Po przekształceniu'],
			}).label({
				offset: [0, -300],
				zIndex: 1,
				color: 'black',
			})

			.grid({
				axes: [1, 3],
				divideX: 10,
				divideY: 10,
				width: 1,
				zBias: -10,
			})

			.area({
				height: resolution*linemultiplier,
				width: resolution*linemultiplier,
				rangeX: [-range, range],
				rangeY: [-range, range],
				channels: 3,
				expr: function(emit, x, y, i, j, time){
					var ret = func(x, y, false);
					emit(ret[0]*scale, 0, ret[1]*scale);
				},
				live: false,
			}).surface({
				colors: '#plane-colors',
				color: Config.colors.white,
			});

		for(var i = 0; i < resolution; ++i){
			plotVLine(node, i);
			plotHLine(node, i);
		}

		function plotVLine(node, i){
			node.interval({
				width: resolution*linemultiplier,
				range: [-range, range],
				expr: function(emit, x, u, t){
					var y = 2*range/(resolution - 1)*i-range;
					var ret = func(x, y, false);
					emit(ret[0]*scale, 0, ret[1]*scale);
				},
				live: false,
			}).line({
				width: 4,
				color: Config.colors.black,
				zBias: 20,
			});
		}

		function plotHLine(node, i){
			node.interval({
        width: resolution*linemultiplier,
				range: [-range, range],
				expr: function(emit, y, u, t){
					var x = 2*range/(resolution - 1)*i-range;
					var ret = func(x, y, false);
					emit(ret[0]*scale, 0, ret[1]*scale);
				},
				live: false,
			}).line({
				width: 4,
				color: Config.colors.black,
				zBias: 20,
			});
		}
	}

	renderMap(
		func1,
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		1,
		0.4
	);

	renderMap(
		func3,
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		Math.PI/2,
		0.3
	);

	renderMap(
		func4,
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		1,
		0.3
	);

	renderMap(
		func5,
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		1,
		0.7
	);

	renderMap(
		func8,
		present.slide().reveal({
			duration: 1,
			delayEnter: 1,
		}),
		1,
		0.6
	);
})();
