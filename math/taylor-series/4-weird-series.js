
(function weirdSeries(){
	var present = presentation.cartesian({
		range: [[-50, 50], [-50, 50], [-50, 50]],
		scale: [25, 25, 25],
	}).transform({
		position: [0, -1, 0]
	});
	
	var maximumSum = 30;
	
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
			length: 512,
			expr: function(emit, x, i, t){
				emit(x, 1/(x*x+1), 0);
			},
			live: false,
		})
		.line({
			width: 15,
			color: Config.colors.blue,
		});
	
	var params = null;
	function getParams4(){
		if(params == null){
			params = [
				present.select('#dumb4-param1').get('position'),
				present.select('#dumb4-param2').get('position'),
				present.select('#dumb4-param3').get('position'),
				present.select('#dumb4-param4').get('position'),
				present.select('#dumb4-param5').get('position')
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
			id: 'dumb4-param1',
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
			id: 'dumb4-param2',
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
			id: 'dumb4-param3',
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
			id: 'dumb4-param4',
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
			id: 'dumb4-param5',
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
			range: [-20,20],
			length: 512,
			expr: function(emit, x, i, t){
				var params = getParams4();
				var x2 = x*x;
				var func =
					1 +
					(params[0] == 0 ? 0 : (
						-normalizeParam(params[0], 2, x)*x2 +
						(params[1] == 0 ? 0 : (
							normalizeParam(params[1], 1, x)*x2*x2 +
							(params[2] == 0 ? 0 : (
								-normalizeParam(params[2], .5, x)*x2*x2*x2 +
								(params[3] == 0 ? 0 : (
									normalizeParam(params[3], .3, x)*x2*x2*x2*x2
								))
							))
						))
					));
				
				if(params[4] != 0){
					var sum = 0;
					for(var i = 6; i < 2*Math.ceil(50*params[4]); ++i){
						sum += (i % 2 == 0 ? -1 : 1)*Math.pow(x, 2*i);
						if(sum > maximumSum){
							break;
						}
					}
					func += sum;
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