(function complexAddition(){
	var A = [3, 1];
	var B = [1, 2];

	var colorA = Config.colors.blue;
	var colorB = Config.colors.orange;

	var vecB2orig = { data: [
		0, 0,
		0.99 * B[0], 0.99 * B[1],
		B[0], B[1]
	] };

	var vecB2moved = { data: [
		A[0] + 0, A[1] + 0,
		A[0] + 0.99 * B[0], A[1] + 0.99 * B[1],
		A[0] + B[0], A[1] + B[1]
	] };

	present = presentation.cartesian({
		range: [[-1, 5], [-1, 5], [-5,5]],
		scale: [1, 1, 1],
	});

	// slide 2: show A and B ====================================================================
	present.slide({
		late: 3,
	})
		.reveal({
			duration: 1,
			delayEnter: 1
		})
			// grid and axes
			.axis({
				axis: 1,
				width: 3,
				detail: 100
			}).axis({
				axis: 2,
				width: 3,
				detail: 100
			}).grid({
				width: 1,
				divideX: 5,
				divideY: 5,
			})
			// points A and B
			.array({
				id: 'A',
				data: A,
				channels: 2,
        width: 1,
			}).point({
				size: 12,
				color: colorA
			}).text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['a'],
			}).label({
				color: colorA,
				snap: false,
				size: 40,
				offset: [24, 24],
				depth: .5,
				zIndex: 1,
			})

			.array({
				id: 'B',
				data: B,
				channels: 2,
        width: 1,
			}).point({
				size: 12,
				color: colorB
			}).text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['b'],
			}).label({
				color: colorB,
				snap: false,
				size: 40,
				offset: [24, 24],
				depth: .5,
				zIndex: 1,
			})

			.step({
				target: '#A + point',
				script: [
					{ size: 12 },
					{ size: 0 }
				]
			})

			.step({
				target: '#B + point',
				script: [
					{ size: 12 },
					{ size: 0 }
				]
			})
		.end();

	var slopeB = B[1]/B[0];

	// slide 3: show vectors ====================================================================
	present.slide({
		late: 2
	})
		.reveal({
			duration: 1
		})
			.array({
				id: 'vecA',
				data: [0, 0, 0.99 * A[0], 0.99 * A[1], A[0], A[1]],
				channels: 2,
        width: 3,
			}).line({
				size: 4,
				width: 5,
				color: colorA,
				stroke: 'solid',
				end: true,
			})

			.array({
				id: 'vecB',
				data: [0, 0, 0.99 * B[0], 0.99 * B[1], B[0], B[1]],
				channels: 2,
        width: 3,
			}).line({
				size: 4,
				width: 5,
				color: colorB,
				end: true,
				zBias: 2,
			})

			.array({
				id: 'vecB2',
				data: [0, 0, 0.99 * B[0], 0.99 * B[1], B[0], B[1]],
				channels: 2,
        width: 3,
			}).line({
				id: 'vecB2line',
				size: 4,
				width: 5,
				color: Config.colors.black,
				stroke: 'dashed',
				end: true,
				zBias: 3,
				opacity: 0.5,
			})
			.step({
				delay: 1,
				target: '#vecB2',
				script: [
					vecB2orig,
					vecB2moved,
					vecB2orig,
				],
				pace: 1,
			})
			.step({
				target: '#vecB2line',
				script: [
					{ opacity: 0 },
					{ opacity: 0.5 },
					{ opacity: 0 },
				],
				pace: 1,
			})
		.end();

	// slide 4: show ghost vector ===================================================================
	present.slide();

	// slide 5: show A + B ===================================================================
	present.slide()
		.reveal({
			duration: 1
		})
			.array({
				id: 'vecAB',
				data: [0, 0, 0.99 * (A[0] + B[0]), 0.99 * (A[1] + B[1]), (A[0] + B[0]), (A[1] + B[1])],
				channels: 2,
        width: 3,
			}).line({
				size: 4,
				width: 5,
				color: Config.colors.green,
				stroke: 'solid',
				end: true,
				zBias: 4,
			})

			.array({
				id: 'AB',
				data: [A[0] + B[0], A[1] + B[1]],
				channels: 2,
        width: 1,
			}).text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['a + b'],
			}).label({
				color: Config.colors.green,
				snap: false,
				size: 40,
				offset: [24, 24],
				depth: .5,
				zIndex: 1,
			})
		.end();
})();
