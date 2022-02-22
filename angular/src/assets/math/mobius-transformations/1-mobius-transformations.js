
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

var coloredPlaneRange = 2;

var coloredPlaneDensityMinor = 60;
var coloredPlaneDensityMajor = 150;

var inverseGap = 0.0005;

(function riemannSphere(){
	var present = presentation.cartesian({
		range: [[-100, 100], [-100, 100], [-100, 100]],
		scale: [50, 50, 50],
	});

	var elementsNum = 50;
	var inversePace = 6;

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

	present.area({
		id: 'coloredPlaneColorsLeft',
		width: coloredPlaneDensityMinor,
		height: coloredPlaneDensityMajor,
		expr: function(emit, x, y, i, j, time){
			var h = (y + coloredPlaneRange)/(3*coloredPlaneRange);
			var rgb = ColorConvert.HSVtoRGB(h, 1, 1);

			emit(rgb[0], rgb[1], rgb[2], 1);
		},
		rangeX: [-coloredPlaneRange, 0],
		rangeY: [-coloredPlaneRange, coloredPlaneRange],
		channels: 4,
		items: 1,
		live: false,
	});

	present.area({
		id: 'coloredPlaneColorsRight',
		width: coloredPlaneDensityMinor,
		height: coloredPlaneDensityMajor,
		expr: function(emit, x, y, i, j, time){
			var h = (y + coloredPlaneRange)/(3*coloredPlaneRange);
			var rgb = ColorConvert.HSVtoRGB(h, 1, 1);

			emit(rgb[0], rgb[1], rgb[2], 1);
		},
		rangeX: [0, coloredPlaneRange],
		rangeY: [-coloredPlaneRange, coloredPlaneRange],
		channels: 4,
		items: 1,
		live: false,
	});

	var slide = present.slide({
		late: 42,
	}).reveal({
		duration: 1,
	});

	scriptCamera(slide);

	// SLIDE 1: show plane
	var stereo = slide
		// complex plane
		.area({
			id: 'plane-points',
			width: gridRange*gridMultiplier + +gridOdd,
			height: gridRange*gridMultiplier + +gridOdd,
			expr: function(emit, x, y, i, j, time){
				emit(x, 0, y);
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
			zBias: -4,
		}).transpose({
			order: 'yxz',
		}).line({
			color: Config.colors.gray,
			width: linesWidth,
			colors: '#planeColors',
			zBias: -4,
		})

		// sphere
		.area({
			id: 'sphere-points',
			width: riemannGridRange*gridMultiplier + +gridOdd,
			height: riemannGridRange*gridMultiplier + +gridOdd,
			expr: function(emit, x, y, i, j, time){
				var p = RiemannSphere.xyToRiemann(x, y);
				emit(p[0], p[2], p[1]);
			},
			rangeX: [-riemannGridRange, riemannGridRange],
			rangeY: [-riemannGridRange, riemannGridRange],
			channels: 3,
			items: 1,
			live: false,
		})

		// correcting transform
		.transform({
			rotation: [Math.PI/2, 0, 0],
		})
			.transform({
				id: 'mobius-transform-move-scale-rotate',
			})
			.transform({
				id: 'mobius-transform-move-scale-rotate2',
			})
				.stereographic({
					scale: [2, 2, 2],
					bend: 1,
				})
					// correcting transform
					.transform({
						rotation: [Math.PI, 0, 0],
					})
						.transform({
							id: 'mobius-transform-inverse',
							rotation: [0, 0, 0],
						}).transform({
							id: 'mobius-transform-inverse2',
							rotation: [0, 0, 0],
						});

	// PLANE PROJECTION
	stereo
		.area({
			width: coloredPlaneDensityMinor,
			height: coloredPlaneDensityMajor,
			expr: function(emit, x, y, i, j, time){
				var coord = RiemannSphere.xyToRiemann(x, y);

				emit(inverseGap+coord[0], coord[1], coord[2]-1);
			},
			rangeX: [0, coloredPlaneRange],
			rangeY: [-coloredPlaneRange, coloredPlaneRange],
			channels: 3,
			items: 1,
			live: false,
		}).surface({
			colors: '#coloredPlaneColorsRight',
			color: 0xffffff,
			shaded: true,
			width: 5,
		})
		.area({
			width: coloredPlaneDensityMinor,
			height: coloredPlaneDensityMajor,
			expr: function(emit, x, y, i, j, time){
				var coord = RiemannSphere.xyToRiemann(x, y);

				emit(-inverseGap+coord[0], coord[1], coord[2]-1);
			},
			rangeX: [-coloredPlaneRange, 0],
			rangeY: [-coloredPlaneRange, coloredPlaneRange],
			channels: 3,
			items: 1,
			live: false,
		}).surface({
			colors: '#coloredPlaneColorsLeft',
			color: 0xffffff,
			shaded: true,
			width: 5,
		});

	var coloredPlaneGridDensity = 9;
	var coloredPlaneGridLineDetailMajor = 150;
	var coloredPlaneGridLineDetailMinor = 32;
	var coloredPlaneGridLineWidth = 8;

	for(var i = 0; i < coloredPlaneGridDensity; ++i){
		plotVLine(stereo, i, 8);
		plotHLines(stereo, i, 8);
	}

	function plotVLine(node, i, bias){
		var coord = (i/(coloredPlaneGridDensity-1))*2*coloredPlaneRange-coloredPlaneRange;

		node.interval({
			width: coloredPlaneGridLineDetailMajor,
			range: [-coloredPlaneRange, coloredPlaneRange],
			expr: function(emit, x, x0, t){
				var c = RiemannSphere.xyToRiemann(coord- inverseGap, x);
				emit(c[0], c[1], c[2] - 1);
			},
			live: false,
		}).line({
			width: coloredPlaneGridLineWidth,
			color: Config.colors.black,
			zBias: bias,
		});
	}

	function plotHLines(node, i, bias){
		var coord = (i/(coloredPlaneGridDensity-1))*2*coloredPlaneRange-coloredPlaneRange;

		node.interval({
      width: coloredPlaneGridLineDetailMinor,
			range: [-coloredPlaneRange, 0],
			expr: function(emit, x, x0, t){
				var c = RiemannSphere.xyToRiemann(x - inverseGap, coord);
				emit(c[0], c[1], c[2] - 1);
			},
			live: false,
		}).line({
			width: coloredPlaneGridLineWidth,
			color: Config.colors.black,
			zBias: bias,
		});

		node.interval({
      width: coloredPlaneGridLineDetailMinor,
			range: [0, coloredPlaneRange],
			expr: function(emit, x, x0, t){
				var c = RiemannSphere.xyToRiemann(x + inverseGap, coord);
				emit(c[0], c[1], c[2] - 1);
			},
			live: false,
		}).line({
			width: coloredPlaneGridLineWidth,
			color: Config.colors.black,
			zBias: bias,
		});
	}

	// ANIMATEEEEEE !!!!!!!!!!!!!!!!!!!!! ==================================================================================================

	slide
		.step({
			target: '#mobius-transform-move-scale-rotate',
			pace: 1,
			script: [
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },

				// translation
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [1, 1, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [-1, 1, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },

				// scaling
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [1.5, 1.5, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [.5, .5, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },

				// rotation
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 1] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, -2] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },

				// rotation & scale
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [.4, .4, 0], rotation: [0, 0, 3] },
				{ position: [0, 0, 0], scale: [1.1, 1.1, 0], rotation: [0, 0, -1] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },

				// inversion
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },

				// multiple transforms
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [.5, .5, 0], rotation: [0, 0, 5] },
				{ position: [1, 1, 0], scale: [.5, .5, 0], rotation: [0, 0, 5] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
			]
		});

	dumbSlides(present, 4*4);

	present.slide({
		late: 25
	})
		.step({
			target: '#mobius-transform-inverse',
			pace: inversePace,
			script: [
				// inversion
				{ rotation: [0, 0, 0] },
				{ rotation: [Math.PI, 0, 0] },
				{ rotation: [-Math.PI, 0, 0] },
				{ rotation: [0, 0, 0] },
			]
		});

	dumbSlides(present, 4*2 - 1);

	var squareRot = null;
	var squareInverse = null;

	// SPHERE PROJECTION
	var slide2 = present.slide({
		late: 17
	}).reveal({
		duration: 1,
	}).transform({
		rotation: [-Math.PI/2, 0, 0],
		position: [0, 1, 0],
	}).transform({
		id: 'sphere-move-scale-rotate',
	}).transform({
		id: 'sphere-move-scale-rotate2',
	}).transform({
		id: 'sphere-move-scale-rotate3',
	})
		.area({
			width: coloredPlaneDensityMinor,
			height: coloredPlaneDensityMajor,
			expr: function(emit, x, y, i, j, time){
				var coord = RiemannSphere.xyToRiemann(x, y);

				emit(inverseGap+coord[0], coord[1], coord[2]-1);
			},
			rangeX: [0, coloredPlaneRange],
			rangeY: [-coloredPlaneRange, coloredPlaneRange],
			channels: 3,
			items: 1,
			live: false,
		}).surface({
			colors: '#coloredPlaneColorsRight',
			color: 0xffffff,
			shaded: true,
			width: 5,
			zBias: 11,
		})

		.area({
			width: coloredPlaneDensityMinor,
			height: coloredPlaneDensityMajor,
			expr: function(emit, x, y, i, j, time){
				var coord = RiemannSphere.xyToRiemann(x, y);

				emit(-inverseGap+coord[0], coord[1], coord[2]-1);
			},
			rangeX: [-coloredPlaneRange, 0],
			rangeY: [-coloredPlaneRange, coloredPlaneRange],
			channels: 3,
			items: 1,
			live: false,
		}).surface({
			colors: '#coloredPlaneColorsLeft',
			color: 0xffffff,
			shaded: true,
			width: 5,
			zBias: 11,
		})

		// sphere
		.area({
			width: riemannGridRange*gridMultiplier + +gridOdd,
			height: riemannGridRange*gridMultiplier + +gridOdd,
			expr: function(emit, x, y, i, j, time){
				var p = RiemannSphere.xyToRiemann(x, y);
				emit(p[0], p[1], p[2] - 1);
			},
			rangeX: [-riemannGridRange, riemannGridRange],
			rangeY: [-riemannGridRange, riemannGridRange],
			channels: 3,
			items: 1,
			live: false,
		})

		// sphere surface
		.surface({
			shaded: false,
			color: Config.colors.white,
			width: 1,
			zBias: 9,
			opacity: 0.7,
		})

		// sphere lines
		.line({
			color: Config.colors.gray,
			zBias: 10,
			width: linesWidth,
		})
		.transpose({
			order: 'yxz'
		}).line({
			color: Config.colors.gray,
			zBias: 10,
			width: linesWidth,
		});;

	for(var i = 0; i < coloredPlaneGridDensity; ++i){
		plotVLine(slide2, i, 12);
		plotHLines(slide2, i, 12);
	}

	slide2
		.step({
			target: '#sphere-move-scale-rotate',
			pace: 1,
			script: [
				// show sphere
				{ position: [0, 0, 0], rotation: [0, 0, 0] },

				// sphere translation
				{ position: [0, 0, 0], rotation: [0, 0, 0] },
				{ position: [-1, 1, 0], rotation: [0, 0, 0] },
				{ position: [-1, -1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], rotation: [0, 0, 0] },

				// sphere scaling
				{ position: [0, 0, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 2], rotation: [0, 0, 0] },
				{ position: [0, 0, 1], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], rotation: [0, 0, 0] },

				// sphere rotation
				{ position: [0, 0, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], rotation: [0, 0, -2] },
				{ position: [0, 0, 0], rotation: [0, 0, 1] },
				{ position: [0, 0, 0], rotation: [0, 0, 0] },
			]
		})
		.step({
			target: '#mobius-transform-move-scale-rotate2',
			pace: 1,
			script: [
				// show sphere
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },

				// sphere translation
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [-1, -1, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [-1, 1, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },

				// sphere scaling
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [2, 2, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [1.5, 1.5, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },

				// sphere rotation
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 2] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, -1] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },

				// sphere inversion
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], scale: [1, 1, 0], rotation: [0, 0, 0] },
			]
		});

	dumbSlides(present, 12);

	present.slide({
		late: 4,
	})
		.step({
			target: '#mobius-transform-inverse2',
			pace: inversePace,
			script: [
				// sphere inversion
				{ rotation: [0, 0, 0] },
				{ rotation: [-Math.PI, 0, 0] },
				{ rotation: [Math.PI, 0, 0] },
				{ rotation: [0, 0, 0] },
			]
		})

		.step({
			target: '#sphere-move-scale-rotate3',
			pace: inversePace,
			script: [
				// sphere inversion
				{ position: [0, 0, 0], rotation: [0, 0, 0] },
				{ position: [0, 0, 0], rotation: [-Math.PI, 0, 0] },
				{ position: [0, 0, 0], rotation: [Math.PI, 0, 0] },
				{ position: [0, 0, 0], rotation: [0, 0, 0] },
			]
		});
})();
