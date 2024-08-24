(function complexDivision(idPrefix){
	var A = [Math.PI/3, 1.5];
	var B = [Math.PI/8, 2];

	var colorA = Config.colors.green;
	var colorB = Config.colors.orange;

	present = presentation.cartesian({
		range: [[-0.5, 2.5], [-0.5, 2.5], [-5,5]],
		scale: [1, 1, 1],
	});

	// slide 2: show A and B ====================================================================
	present.slide({
		late: 3
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

			.transform({
				rotation: [0, Math.PI, Math.PI/2]
			}).polar()
				// show A and B
				.array({
					id: idPrefix + 'A',
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
					offset: [16, 16],
					depth: .5,
					zIndex: 1,
				})

				.array({
					id: idPrefix + 'B',
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
					id: idPrefix + 'Blabel',
					color: colorB,
					snap: false,
					size: 40,
					offset: [16, 16],
					depth: .5,
					zIndex: 1,
				})

				.array({
					data: [0, 1],
					channels: 2,
          width: 1,
				}).point({
					size: 12,
					color: Config.colors.gray
				}).text({
					font: Config.mathFont,
					style: Config.mathFontStyle,
					data: ['1'],
				}).label({
					color: Config.colors.gray,
					snap: false,
					size: 40,
					offset: [16, -16],
					depth: .5,
					zIndex: 1,
				})
			.end()
		.end()
		.end();

	present.slide({
		late: 2
	})
		.reveal({
			duration: 1,
		})
			.transform({
				rotation: [0, Math.PI, Math.PI/2]
			}).transform({
				id: 'triangleTransform2',
			}).polar()
				// show triangle
				.array({
					id: idPrefix + 'triangleData',
					channels: 2,
          width: 4,
					data: [
						0, 0,
						B[0], B[1],
						0, 1,
						0, 0,
					]
				}).line({
					color: Config.colors.green,
					width: 4,
					opacity: 0.5,
				})

				.step({
					target: '#triangleTransform2',
					pace: 3,
					script: [
						{ rotation: [0, 0, 0], scale: [1, 1, 1] },
						{ rotation: [0, 0, B[0]-A[0]], scale: [A[1]/B[1], A[1]/B[1], A[1]/B[1]] },
						{ rotation: [0, 0, B[0]], scale: [1/B[1], 1/B[1], 1/B[1]] },
					]
				})
			.end()
			.end()
		.end()
		.end();

	present.slide().reveal({
		duration: 1,
		delayEnter: 3,
	})
		.transform({
			rotation: [0, Math.PI, Math.PI/2]
		}).polar()
			.array({
				channels: 2,
        width: 1,
				data: [
					A[0]-B[0], A[1]/B[1],
				]
			}).point({
				size: 12,
				color: Config.colors.blue
			}).text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['a/b'],
			}).label({
				color: Config.colors.blue,
				snap: false,
				size: 40,
				offset: [16, 16],
				depth: .5,
				zIndex: 1,
			})
		.end()
	.end();

	present.slide().reveal({
		duration: 1,
		delayEnter: 3,
	})
		.transform({
			rotation: [0, Math.PI, Math.PI/2]
		}).polar()
			.array({
				channels: 2,
        width: 1,
				data: [
					-B[0], 1/B[1],
				]
			}).point({
				size: 12,
				color: Config.colors.blue
			}).text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['1/b'],
			}).label({
				color: Config.colors.blue,
				snap: false,
				size: 40,
				offset: [16, -16],
				depth: .5,
				zIndex: 1,
			})
		.end()
	.end();
})('complex-division-');
