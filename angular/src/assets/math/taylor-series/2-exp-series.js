
(function expSeries(){
	var present = presentation.cartesian({
		range: [[-50, 50], [-50, 50], [-50, 50]],
		scale: [25, 25, 25],
	}).transform({
		position: [0, -4, 0]
	});

	present.slide({
		late: 6,
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
				emit(x, Math.exp(x), 0);
			},
			live: false,
		})
		.line({
			width: 15,
			color: Config.colors.blue,
		});

	var params = null;
	function getParams2(){
		if(params == null){
			params = [
				present.select('#dumb2-param1').get('position'),
				present.select('#dumb2-param2').get('position'),
				present.select('#dumb2-param3').get('position'),
				present.select('#dumb2-param4').get('position'),
				present.select('#dumb2-param5').get('position')
			];
		}

		return [params[0].x, params[1].x, params[2].x, params[3].x, params[4].x];
	}

	present.slide({
		late: 5,
	}).reveal({
		duration: 1,
	})
		.transform({
			id: 'dumb2-param1',
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
			id: 'dumb2-param2',
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
			id: 'dumb2-param3',
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
			id: 'dumb2-param4',
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
			id: 'dumb2-param5',
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
				var params = getParams2();
				var func =
					1 + x +
					(params[0] == 0 ? 0 : (
						normalizeParam(params[0], 2, x)*x*x/2 +
						(params[1] == 0 ? 0 : (
							normalizeParam(params[1], 3, x)*x*x*x/6 +
							(params[2] == 0 ? 0 : (
								normalizeParam(params[2], 4, x)*x*x*x*x/24 +
								(params[3] == 0 ? 0 : (
									normalizeParam(params[3], 5, x)*x*x*x*x*x/120
								))
							))
						))
					));

				if(params[4] != 0){
					func += normalizeParam(params[4], 10, x)*(Math.exp(x) - func);
				}

				emit(x, func, 0);
			}
		})
		.line({
			width: 15,
			color: Config.colors.orange,
			zBias: 8,
		});

	dumbSlides(present, 5);
})();
