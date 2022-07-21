
var planeRange = 20;

var gridRange = 16;
var riemannGridRange = 30;
var gridRangeNormal = 10;
var gridMultiplier = 5;
var gridOdd = true;
var linesWidth = 3;
var gridColorMargin = 5;
var gridColor = [250, 250, 250];

var pointSize = 20;

(function riemannSphere(){
	var present = presentation.cartesian({
		range: [[-100, 100], [-100, 100], [-100, 100]],
		scale: [50, 50, 50],
	});

	var elementsNum = 50;

	present.area({
		id: 'planeColors',
		width: gridRange*gridMultiplier + +gridOdd,
		height: gridRange*gridMultiplier + +gridOdd,
		expr: function(emit, x, y, i, j, time){
			var a = 1;

			if(
				Math.abs(x) > gridRange - gridColorMargin ||
				Math.abs(y) > gridRange - gridColorMargin
			){
				a = gridRange - gridColorMargin;
				var b = gridColorMargin;
				var max = Math.max(Math.abs(y), Math.abs(x));
				a = (Math.cos(2*Math.PI*(max-a)/b/2)+1)/2;
			}

			emit(gridColor[0]/255, gridColor[1]/255, gridColor[2]/255, a);
		},
		rangeX: [-gridRange, gridRange],
		rangeY: [-gridRange, gridRange],
		channels: 4,
		items: 1,
		live: false,
	});

	var slide = present.slide({
		late: 16,
	});

	scriptCamera(slide);

	slide.reveal({
		duration: 1,
	})
		.transform({
			id: 'rs-transform',
			rotation: [-Math.PI/2, 0, 0],
			//position: [0, -1, 0], // scripted
		})
			.step({
				script: [
					{ position: [0, 0, 0] },
					{ position: [0, -1, 0] },
				],
				pace: 1,
			})

			// plane
			.area({
				id: 'plane-points',
				width: gridRange*gridMultiplier + +gridOdd,
				height: gridRange*gridMultiplier + +gridOdd,
				expr: function(emit, x, y, i, j, time){
					emit(x, y, 0);
				},
				rangeX: [-gridRange, gridRange],
				rangeY: [-gridRange, gridRange],
				channels: 3,
				items: 1,
				live: false,
			}).line({
				color: Config.colors.gray,
				width: linesWidth,
				colors: '#planeColors',
			}).transpose({
				order: 'yxz',
			}).line({
				color: Config.colors.gray,
				width: linesWidth,
				colors: '#planeColors',
			})

			// sphere
			.area({
				id: 'sphere-points',
				width: riemannGridRange*gridMultiplier + +gridOdd,
				height: riemannGridRange*gridMultiplier + +gridOdd,
				expr: function(emit, x, y, i, j, time){
					var p = RiemannSphere.xyToRiemann(x, y);
					emit(p[0], p[2] - 1, p[1]);
				},
				rangeX: [-riemannGridRange, riemannGridRange],
				rangeY: [-riemannGridRange, riemannGridRange],
				channels: 3,
				items: 1,
				live: false,
			})
		.end();

	present.slide({
		late: 9,
	}).reveal({
		delayEnter: 1,
		duration: 1,
	})
		// sphere phantom
		.spherical()
			.area({
				rangeY: [-Math.PI/2, Math.PI/2],
				rangeX: [0, 2*Math.PI],
				height: 128,
				width: 128,
				channels: 3,
				expr: function(emit, x, y, i, j, t){
					emit(x, y, 1);
				}
			}).surface({
				opacity: 0.5,
				shaded: true,
				color: Config.colors.white,
			})
		.end();

	present.slide({
		late: 8,
	}).reveal({
		duration: 1,
	})
		// red point
		.array({
			width: 1,
			channels: 3,
			data: [0, 1, 0],
		}).point({
			color: Config.colors.red,
			size: pointSize,
			zIndex: 2,
		});

	present.slide({
		late: 7,
	}).reveal({
		duration: 1,
	})
		// blue point
		.array({
			id: 'bpoint-array',
      width: 1,
			channels: 3,
		}).step({
			script: [
				{ data: [2, -1, -2] },
				{ data: [2, -1, -2] },
				{ data: [2, -1, -2] },

				{ data: [2, -1, 1] },
				{ data: [-2, -1, 3] },
				{ data: [-10, -1, 5] },
				{ data: [-10, -1, 5] },
				{ data: [-500, -1, 250] },
			],
			pace: 2
		}).point({
			color: Config.colors.blue,
			size: pointSize,
		});

	function getBluePoint(){
    return present.select('#bpoint-array').get('data');
	}

	present.slide({
		late: 6,
	}).reveal({
		duration: 1,
	})
		// line
		.array({
      width: 2,
			channels: 3,
		}, {
			data: function(t){
				var b = getBluePoint();

				if(b != null){
					return [0, 1, 0, b[0], b[1], b[2]];
				}else{
					return [0, 1, 0, 0, 1, 0];
				}
			}
		}).line({
			color: Config.colors.green,
			width: 4,
			zOrder: -1,
		});

	present.slide({
		late: 5,
	}).reveal({
		duration: 1,
	})
		// intersection point
		.array({
      width: 1,
			channels: 3,
		}, {
			data: function(t){
				var b = getBluePoint();

				if(b != null){
					var p = RiemannSphere.xyToRiemann(b[0], b[2]);
					return [p[0], p[2] - 1, p[1]];
				}else{
					return [0, 0, 0];
				}
			}
		}).point({
			color: Config.colors.orange,
			size: pointSize,
			zOrder: 5,
			zBias: 5,
		});

	dumbSlides(present, 5);

	// =====================================================================================================================================

	present.slide({
		late: 5
	})
		.reveal({
			duration: 1,
			delayEnter: 1,
		})
			// sphere surface
			.surface({
				points: '#sphere-points',
				shaded: false,
				color: Config.colors.white,
				width: 1,
				zBias: 4,
				opacity: 0.7,
			})

			// sphere lines
			.line({
				points: '#sphere-points',
				color: Config.colors.gray,
				zBias: 5,
				width: linesWidth,
			})
			.transpose({
				source: '#sphere-points',
				order: 'yxz'
			}).line({
				color: Config.colors.gray,
				zBias: 5,
				width: linesWidth,
			});

	present.transform({
		id: 'starting-point-polar',
	});

	var startingPointPolar = null;
	function getStartingPointPolar(){
		if(startingPointPolar == null){
			startingPointPolar = present.select('#starting-point-polar').get('position');
		}

		return [startingPointPolar.x, startingPointPolar.y];
	}

	var seqFunc = function(x){
		var p = getStartingPointPolar();

		var re = Math.pow(p[0], x)*Math.cos(x*p[1]);
		var im = Math.pow(p[0], x)*Math.sin(x*p[1]);

		return [re, im];
	};

	present.slide({
		late: 4
	})
		.reveal({
			duration: 1
		})
			.interval({
				range: [1, 100],
				width: 100,
				channels: 3,
				expr: function(emit, x, i, t){
					var res = seqFunc(x);
					if(
						Math.abs(res[0]) > gridRangeNormal ||
						Math.abs(res[1]) > gridRangeNormal
					){
						emit(Math.NaN, Math.NaN, Math.NaN);
					}else{
						emit(res[0], -1, res[1]);
					}
				},
			}).point({
				color: Config.colors.blue,
				size: pointSize,
			})

			.interval({
				range: [1, 100],
				width: 100,
				channels: 3,
				expr: function(emit, x, i, t){
					var res = seqFunc(x);
					res = RiemannSphere.xyToRiemann(res[0], res[1]);

					emit(res[0], res[2] - 1, res[1]);
				},
			}).point({
				color: Config.colors.orange,
				size: pointSize,
				zBias: 6,
				//zOrder: 6,
			})

			// animate sequence
			.step({
				target: '#starting-point-polar',
				pace: 2,
				script: [
					{ position: [1.1, 0, 0] },
					{ position: [1.1, 0.4, 0] },
					{ position: [1.1, -0.1, 0] },
					{ position: [1.3, -0.6, 0] },
					{ position: [2, 0.05, 0] },
				],
			});

	dumbSlides(present, 3);
})();
