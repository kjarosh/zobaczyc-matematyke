(function complexSubtraction(idPrefix){
	var A = [3, 1];
	var B = [1, 2];
	
	var colorA = Config.colors.blue;
	var colorB = Config.colors.orange;
	
	present = presentation.cartesian({
		range: [[-2, 4], [-3, 3], [-5,5]],
		scale: [1, 1, 1],
	});
	
	// slide 2: show A and B ====================================================================
	var slide = present.slide({
		late: 4
	})
		.reveal({
			duration: 1,
			delayEnter: 1
		})
			// show grid and axes
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
			// show A and B
			.array({
				id: idPrefix + 'A',
				data: A,
				channels: 2,
				length: 1,
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
				id: idPrefix + 'B',
				data: B,
				channels: 2,
				length: 1,
			}).point({
				size: 12,
				color: colorB
			}).text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['b'],
			}).label({
				id: idPrefix + 'Blabel',
				color: colorB,
				snap: false,
				size: 40,
				offset: [24, 24],
				depth: .5,
				zIndex: 1,
			})
			
			// -B
			.array({
				id: idPrefix + 'mB',
				data: [-B[0], -B[1]],
				channels: 2,
				length: 1,
			}).text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['-b'],
			}).label({
				id: idPrefix + 'mBlabel',
				color: colorB,
				snap: false,
				size: 40,
				offset: [-24, -24],
				depth: .5,
				zIndex: 1,
			})
			
			.step({
				target: '#' + idPrefix + 'A + point',
				script: [
					{ size: 12 },
					{ size: 0 }
				]
			})
			
			.step({
				target: '#' + idPrefix + 'B + point',
				script: [
					{ size: 12 },
					{ size: 0 }
				]
			})
			
			.step({
				target: '#' + idPrefix + 'Blabel',
				pace: 0.1,
				script: [
					{ size: 40 },
					{ size: 40 },
					{ size: 0 }
				],
				realtime: true,
			})
			
			.step({
				target: '#' + idPrefix + 'mBlabel',
				pace: 0.1,
				script: [
					{ size: 0 },
					{ size: 0 },
					{ size: 40 }
				],
				realtime: true,
			})
		.end();

	var slopeB = B[1]/B[0];

	// slide 3: show vectors ====================================================================
	present.slide({
		late: 3
	})
		.reveal({
			duration: 1
		})
			.array({
				id: idPrefix + 'vecA',
				data: [0, 0, 0.99 * A[0], 0.99 * A[1], A[0], A[1]],
				channels: 2,
				length: 3,
			}).line({
				size: 4,
				width: 5,
				color: colorA,
				stroke: 'solid',
				end: true,
			})
			
			.array({
				id: idPrefix + 'vecB',
				data: [0, 0, 0.99 * B[0], 0.99 * B[1], B[0], B[1]],
				channels: 2,
				length: 3,
			}).line({
				size: 4,
				width: 5,
				color: colorB,
				end: true,
				zBias: 2,
			})
		.end();

	// slide 4: move vector B to -B
	present.slide();

	// slide 5: show ghost vector ===================================================================
	present.slide({
		late: 1
	})
		.reveal({
			duration: 0.5
		})
			.array({
				id: idPrefix + 'vecB2',
				data: [0, 0, -0.99 * B[0], -0.99 * B[1], -B[0], -B[1]],
				channels: 2,
				length: 3,
			}).line({
				id: idPrefix + 'vecB2line',
				size: 4,
				width: 5,
				color: Config.colors.black,
				stroke: 'dashed',
				end: true,
				zBias: 3,
				opacity: 0.5,
			})
		.end();

	// slide 5: show A - B ===================================================================
	present.slide({
		late: 0
	})
		.reveal({
			duration: 1
		})
			.array({
				id: idPrefix + 'vecAB',
				data: [0, 0, 0.99 * (A[0] - B[0]), 0.99 * (A[1] - B[1]), (A[0] - B[0]), (A[1] - B[1])],
				channels: 2,
				length: 3,
			}).line({
				size: 4,
				width: 5,
				color: Config.colors.green,
				stroke: 'solid',
				end: true,
				zBias: 4,
			})
			
			.array({
				id: idPrefix + 'AB',
				data: [A[0] - B[0], A[1] - B[1]],
				channels: 2,
				length: 1,
			}).text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['a - b'],
			}).label({
				color: Config.colors.green,
				snap: false,
				size: 40,
				offset: [42, -24],
				depth: .5,
				zIndex: 1,
			})
		.end();

	// animate! =========================================================================

	var vecBdata = [0, 0, 0.99 * B[0], 0.99 * B[1], B[0], B[1]];
	var vecmBdata = [0, 0, -0.99 * B[0], -0.99 * B[1], -B[0], -B[1]];

	slide
		.step({
			target: '#' + idPrefix + 'vecB',
			script: [
				{ data: vecBdata },
				{ data: vecBdata },
				{ data: [0, 0, -0.99 * B[0], -0.99 * B[1], -B[0], -B[1]] }
			],
			pace: 1,
			realtime: true,
		})
		.step({
			target: '#' + idPrefix + 'vecB2',
			script: [
				{ data: vecmBdata },
				{ data: vecmBdata },
				{ data: vecmBdata },
				{ data: [A[0], A[1], A[0] - 0.99 * B[0], A[1] - 0.99 * B[1], A[0] - B[0], A[1] - B[1]] },
				{ data: [A[0], A[1], A[0] - 0.99 * B[0], A[1] - 0.99 * B[1], A[0] - B[0], A[1] - B[1]] },
				{ data: vecmBdata },
			],
			pace: 1,
			delay: 0.5,
			realtime: true,
		})
		.step({
			target: '#' + idPrefix + 'vecB2line',
			script: [
				{ opacity: 0 },
				{ opacity: 0.5 },
				{ opacity: 0.5 },
				{ opacity: 0.5 },
				{ opacity: 0 }
			],
			pace: 1,
			realtime: true,
		});
})('complex-subtraction-');