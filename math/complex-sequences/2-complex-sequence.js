function constructLogSequence(start){
	return {
		startingValue: start,
		values: {
			1: start,
		},
		getValue: function(n){
			if(n in this.values){
				return this.values[n];
			}else{
				var last = this.getValue(n - 1);
				return this.values[n] = [
					Math.log(last[0]*last[0] + last[1]*last[1])/2,
					Math.atan2(last[1], last[0])
				];
			}
		}
	};
}

(function complexSequence(){
	var elementsNum = 50;
	var elementsVisible = 40;
	var pointColor = [26, 140, 255];
	
	var pointSize = 7;
	
	var present = presentation.cartesian({
		range: [[-30, 30], [-30, 30], [-30,30]],
		scale: [10, 10, 10],
	}).transform({
		id: 'cs-transform',
	});
	
	var slide = present.slide({
		late: 16
	}).reveal({
		duration: 1,
		delayEnter: 1.5,
		delayExit: 2,
	});
	
	slide.axis({
		axis: 1,
		width: 2,
		detail: 100,
	}).axis({
		axis: 2,
		width: 2,
		detail: 100,
	}).grid({
		axes: [1, 2],
		divideX: 80,
		divideY: 80,
		width: 1,
	});
	
	var seqColors = slide.interval({
		id: 'seqColors',
		expr: function(emit, x, i, t){
			x = Math.round(x);
			
			if(x <= elementsVisible){
				emit(pointColor[0]/255, pointColor[1]/255, pointColor[2]/255, 1);
			}else{
				emit(pointColor[0]/255, pointColor[1]/255, pointColor[2]/255, 1 * (elementsNum - x) / (elementsNum - elementsVisible));
			}
			
		},
		live: false,
		range: [2, elementsNum],
		length: elementsNum - 1,
		channels: 4,
	});
	
	var spoint = null;
	function checkSpoint(){
		if(spoint == null){
			spoint = slide.select('#dumbTransformA').get('position');
		}
	}
	
	slide.transform({
		id: 'dumbTransformA',
	}).end().step({
		script: [
			{ position: [0, 1, 0] },
			
			{ position: [0, 1, 0] },
			{ position: [0, 0.9, 0] },
			{ position: [0.2, 0.9, 0] },
			{ position: [1.3, 0.8, 0] },
			{ position: [-2, 0.8, 0] },
			{ position: [-0.5, 0.6, 0] },
			
			{ position: [0, 1.1, 0] },
			{ position: [0.2, 1.1, 0] },
			{ position: [-0.1, 1.1, 0] },
			
			{ position: [0.4, 1, 0] },
			{ position: [Math.PI, 1, 0] },
			{ position: [0, 1, 0] },
			
			{ position: [1, 1, 0] },
			{ position: [2, 2, 0] },
			{ position: [0.1, 3, 0] },
			{ position: [-2, 1, 0] },
			{ position: [-3, 2, 0] },
			{ position: [0, 1, 0] },
		],
		pace: 2,
	}).step({
		target: '#cs-transform',
		script: [
			{ position: [0, 0, 6] },
			{ position: [0, 0, 6] },
			{ position: [0, 0, 6] },
			{ position: [0, 0, 6] },
			{ position: [0, 0, 6] },
			{ position: [0, 0, 6] },
			{ position: [0, 0, 6] },
			
			{ position: [0, 0, 2] },
			{ position: [0, 0, 2] },
			{ position: [0, 0, 2] },
			
			{ position: [0, 0, 6] },
			{ position: [0, 0, 6] },
			{ position: [0, 0, 6] },
			
			{ position: [0, 0, 1] },
		],
		pace: 2,
	});
	
	present.slide({
		late: 11
	})
		.reveal({
			durationEnter: 1,
			durationExit: 0,
		})
			// plot of z^n
			.interval({
				expr: function(emit, x, i, t){
					x = Math.round(x);
					checkSpoint();
					
					var t = spoint.x * x;
					var r = Math.pow(spoint.y, x);
					
					var re = r * Math.cos(t);
					var im = r * Math.sin(t);
					
					emit(re, im);
				},
				range: [2, elementsNum],
				length: elementsNum - 1,
				channels: 2,
			}).point({
				size: pointSize,
				//color: Config.colors.blue,
				colors: '#seqColors',
			})
		.end()
		.reveal({
			duration: 1,
		})
			// unit circle
			.polar()
				.interval({
					expr: function(emit, x, i, t){
						emit(x, 1);
					},
					range: [0, 2*Math.PI],
					length: 256,
					channels: 2,
				}).line({
					size: 1,
					color: Config.colors.light_gray,
				})
			.end()
		.end();
	
	dumbSlides(present, 11);
	
	var sequence;
	present.slide({
		late: 4
	})
		.reveal({
			duration: 1
		})
			.interval({
				expr: function(emit, x, i, t){
					x = Math.round(x);
					
					checkSpoint();
					
					var b = [spoint.y*Math.cos(spoint.x), spoint.y*Math.sin(spoint.x)];
					var c = sequence == null ? null : sequence.startingValue;
					if(sequence == null || c[0] != b[0] || c[1] != b[1]){
						sequence = constructLogSequence(b);
					}
					
					var val = sequence.getValue(x);
					
					emit(val[0], val[1]);
				},
				range: [2, elementsNum],
				length: elementsNum - 1,
				channels: 2,
			}).point({
				size: pointSize,
				//color: Config.colors.blue,
				colors: '#seqColors',
			})
		.end();
	
	dumbSlides(present, 4);
	
	slide.array({
		channels: 2,
		length: 1
	}, {
		data: function(t){
			if(spoint == null) return [0, 0];
			
			return [spoint.y*Math.cos(spoint.x), spoint.y*Math.sin(spoint.x)];
		}
	}).point({
		size: pointSize,
		color: Config.colors.red,
		zBias: 5,
	});
})();