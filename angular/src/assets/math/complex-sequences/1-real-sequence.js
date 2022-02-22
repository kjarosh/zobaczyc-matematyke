(function realSequence(){
	var length = 20;

	var present = presentation.transform({
		id: 'rs-transformp',
		//position: [0, 0, -2], // scripted
	}).transform({
		id: 'rs-transformr',
		//rotation: [0, 0.3, 0], // scripted
	}).cartesian({
		id: 'rs-cartesian',
		range: [[0, length], [-0, 2], [-1,1]],
		//scale: [2, 1, 1], // scripted
	});

	var sequenceExpr = function(emit, x, i, t){
		emit(x, -1.4/Math.pow(2, x/4) + 1.5, 0)
	};

	var slide = present.slide({
		late: 2
	}).reveal({
		duration: 1,
	});

	slide.axis({
		axis: 1,
		width: 6,
		detail: 100,
	}).axis({
		axis: 2,
		width: 6,
		detail: 100,
	}).grid({
		axes: [1, 2],
		divideX: length,
		divideY: 10,
		width: 1,
	});

	slide.interval({
		expr: sequenceExpr,
		range: [1, length],
    width: length,
	}).point({
		color: Config.colors.green,
		size: 10,
	});

	slide.array({
		channels: 2,
		width: 2,
		data: [0, 1.5, length, 1.5],
	}).line({
		color: Config.colors.red,
		width: 5,
	});

	slide.step({
		target: '#rs-cartesian',
		script: [
			{ scale: [2, 1, 1] },
			{ scale: [0, 1, 1] },
		],
		pace: 3,
	}).step({
		target: '#rs-transformr',
		script: [
			{ rotation: [0, 0.3, 0] },
			{ rotation: [0, 0.3, 0] },
			{ rotation: [0, 0.3, -Math.PI/2] },
		],
		pace: 3,
	}).step({
		target: '#rs-transformp',
		script: [
			{ position: [0, 0, -2] },
			{ position: [0, 0, -2] },
			{ position: [0, -.2, 0] },
		],
		pace: 3,
	});

	present.slide();

	present.slide().reveal({
		duration: 1,
	})
		.array({
			channels: 2,
			width: 1,
			data: [0, 1.5],
		}).point({
			color: Config.colors.red,
			size: 10,
			zIndex: 10,
		})

		.interval({
			expr: sequenceExpr,
			range: [length + 1, 64],
			width: 64,
		}).point({
			color: Config.colors.green,
			size: 10,
		});
})();
