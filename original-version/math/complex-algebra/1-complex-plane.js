(function complexPlane(){
	var SCALE = 1;
	var present = presentation.cartesian({
		range: [[-5, 5], [-5, 5], [-5,5]],
		scale: [SCALE, 0, SCALE],
	});
	
	var realPoints = [];
	var complexPoints = [];
	
	var realSlide = present.slide({
		late: 3
	}).reveal({ duration: 1 });
	
	realSlide.axis({
		id: 'realAxis',
		axis: 1,
		width: 2,
		detail: 100
	}).axis({
		id: 'complexAxis',
		axis: 2,
		width: 2,
		detail: 100
	}).grid({
		width: 1,
		divideX: 5,
		divideY: 5,
	});
	
	var gridSlide = present.slide({
		late: 2,
	}).step({
		pace: 1.4,
		target: 'cartesian',
		script: [{ scale: [SCALE, 0, SCALE] }, { scale: [SCALE, SCALE, SCALE] }]
	});
	
	var complexSlide = present.slide({
		late: 1
	}).reveal({ duration: 1 });
	
	complexSlide.step({
		target: '#complexAxis',
		pace: 1,
		script: [
			{ color: Config.colors.gray },
			{ color: Config.colors.green },
		]
	}).step({
		target: '#realAxis',
		pace: 1,
		script: [
			{ color: Config.colors.gray },
			{ color: Config.colors.red },
		],
	});
	
	realPoints.push(point(0, 0, realSlide));
	realPoints.push(point(4, 0, realSlide));
	realPoints.push(point(-3, 0, realSlide));
	
	complexPoints.push(point(3, 2, complexSlide));
	complexPoints.push(point(-2, 3, complexSlide));
	complexPoints.push(point(-2, -2, complexSlide));
	complexPoints.push(point(1, -3, complexSlide));
	complexPoints.push(point(0, 2, complexSlide));
	
	function point(x, y, slide){
		var point = slide.array({
			data: [x, y],
			channels: 2,
		}).point({
			color: Config.colors.blue,
			size: 0,
		});
		
		var number = x;
		
		if(x == 0 && y != 0){
			number = '' + y + 'i';
		}else if(y < 0){
			number = x + ' - ' + -y + 'i';
		}else if(y > 0){
			number = x + ' + ' + y + 'i';
		}
		
		var label = point.text({
			font: Config.mathFont,
			style: Config.mathFontStyle,
			data: [number],
		}).label({
			color: Config.colors.blue,
			size: 40,
			offset: [24, 24],
			zIndex: 1,
		});
		
		return [point, label];
	}

	function createSizeScript(size, num){
		var ret = [{ size: 0 },{ size: size }];
		for(var i = 0; i < num; ++i){
			ret.push({ size: size });
		}
		ret.push({ size: 0 });
		
		return ret;
	}
	
	function showPoints(points, slide){
		var labelDiff = 0.1;
		var delayStep = 1;
		var delay = 0;
		
		for(var i = 0; i < points.length; ++i){
			slide
				.step({
					delay: delay,
					target: points[i][0],
					script: [
						{ size: 0 },
						{ size: 8 },
					]
				})
				.step({
					delay: delay + labelDiff,
					target: points[i][1],
					script: [
						{ size: 0 },
						{ size: 20 },
					]
				});
			
			delay += delayStep;
		}
	}
	
	// REAL POINTS
	showPoints(realPoints, realSlide);
	
	// COMPLEX GRID
	
	// COMPLEX POINTS
	showPoints(complexPoints, complexSlide);
	
	present.slide()
	
	/*// 1 REAL POINTS
	showPoints(realPoints, realPoints.length + complexPoints.length + 1);
	
	// 2 COMPLEX GRID
	var gridLength = realPoints.length + complexPoints.length;
	present.slide({
		late: gridLength,
	}).step({
		pace: 1.4,
		target: 'cartesian',
		script: [{ scale: [SCALE, 0, SCALE] },{ scale: [SCALE, SCALE, SCALE] }]
	});
	
	// 3 COMPLEX POINTS
	showPoints(complexPoints, complexPoints.length);*/
})();