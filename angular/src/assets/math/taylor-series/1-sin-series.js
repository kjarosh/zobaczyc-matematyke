
function normalizeParam(param, deg, x){
	if(param == 1) return 1;

	param = param/(1-Math.pow(param, 1/20/deg/deg));
	param = param/(x*x+param);

	return param;
}

(function sinSeries(){
	var present = presentation.cartesian({
		range: [[-50, 50], [-50, 50], [-50, 50]],
		scale: [25, 25, 25],
	});

	var slide;
	scriptCamera(slide = present.slide({
		late: 31,
	}));

	slide.group()
		.axis({
			axis: 1,
			detail: 10,
			width: 8,
			zBias: -5,
		}).axis({
			axis: 2,
			detail: 10,
			width: 8,
			zBias: -5,
		}).grid({
			axes: [1, 2],
			color: Config.colors.light_gray,
			divideX: 50,
			divideY: 50,
			width: 5,
			zBias: -6,
		})
	.end().step({
		script: [
			{ visible: true },
			{ visible: true },
			{ visible: false }
		]
	});

	// ======================================

	present.slide({
		late: 7,
	}).reveal({
		duration: 1,
	})
		.axis({
			axis: 1,
			detail: 10,
			width: 8,
			zBias: -5,
		})
		.axis({
			axis: 2,
			detail: 10,
			width: 8,
			zBias: -5,
		})
		.grid({
			axes: [1, 2],
			color: Config.colors.light_gray,
			divideX: 50,
			divideY: 50,
			width: 5,
			zBias: -6,
		})

		.interval({
			width: 512,
			expr: function(emit, x, i, t){
				emit(x, Math.sin(x), 0);
			},
			live: false,
		})
		.line({
			width: 15,
			color: Config.colors.blue,
		});

	var params = null;
	function getParams(){
		if(params == null){
			params = [
				present.select('#dumb-param1').get('position'),
				present.select('#dumb-param2').get('position'),
				present.select('#dumb-param3').get('position'),
				present.select('#dumb-param4').get('position'),
				present.select('#dumb-param5').get('position')
			];
		}

		return [params[0].x, params[1].x, params[2].x, params[3].x, params[4].x];
	}

	present.slide({
		late: 6,
	}).reveal({
		duration: 1,
	})
		.transform({
			id: 'dumb-param1',
			position: [1, 0, 0],
		})
			.step({
				pace: 2,
				script: [
					{ position: [0, 0, 0] },
					{ position: [1, 0, 0] },
				]
			})
		.end()
		.transform({
			id: 'dumb-param2',
			position: [1, 0, 0],
		})
			.step({
				pace: 2,
				script: [
					{ position: [0, 0, 0] },
					{ position: [0, 0, 0] },
					{ position: [1, 0, 0] },
				]
			})
		.end()
		.transform({
			id: 'dumb-param3',
			position: [1, 0, 0],
		})
			.step({
				pace: 2,
				script: [
					{ position: [0, 0, 0] },
					{ position: [0, 0, 0] },
					{ position: [0, 0, 0] },
					{ position: [1, 0, 0] },
				]
			})
		.end()
		.transform({
			id: 'dumb-param4',
			position: [1, 0, 0],
		})
			.step({
				pace: 2,
				script: [
					{ position: [0, 0, 0] },
					{ position: [0, 0, 0] },
					{ position: [0, 0, 0] },
					{ position: [0, 0, 0] },
					{ position: [1, 0, 0] },
				]
			})
		.end()
		.transform({
			id: 'dumb-param5',
			position: [1, 0, 0],
		})
			.step({
				pace: 2,
				script: [
					{ position: [0, 0, 0] },
					{ position: [0, 0, 0] },
					{ position: [0, 0, 0] },
					{ position: [0, 0, 0] },
					{ position: [0, 0, 0] },
					{ position: [1, 0, 0] },
				]
			})
		.end()

		.interval({
      width: 512,
			expr: function(emit, x, i, t){
				var params = getParams();
				var func =
					x +
					(params[0] == 0 ? 0 : (
						-normalizeParam(params[0], 3, x)*x*x*x/6 +
						(params[1] == 0 ? 0 : (
							normalizeParam(params[1], 5, x)*x*x*x*x*x/120 +
							(params[2] == 0 ? 0 : (
								-normalizeParam(params[2], 7, x)*x*x*x*x*x*x*x/5040 +
								(params[3] == 0 ? 0 : (
									normalizeParam(params[3], 9, x)*x*x*x*x*x*x*x*x*x/362880
								))
							))
						))
					));

				if(params[4] != 0){
					func += normalizeParam(params[4], 20, x)*(Math.sin(x) - func);
				}

				emit(x, func, 0);
			}
		})
		.line({
			width: 15,
			color: Config.colors.orange,
			zBias: 8,
		});

	dumbSlides(present, 6);
})();
