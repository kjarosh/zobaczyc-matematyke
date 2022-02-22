
(function realIntegral(){
	var present = presentation.cartesian({
		range: [[-20, 20], [-20, 20], [-20, 20]],
		scale: [10, 10, 10],
	});


	function func(x){
		return x*x*x-x+1;
	}

	function func2(x){
		x /= 2;
		return 2*(x*x*x-x);
	}

	function func3(x){
		return 1/x/x;
	}

	function func4(x){
		return 1/Math.sqrt(x);
	}

	function func5(x){
		x /= 3;
		return Math.sin(1/x);
	}

	var resolution = 128;
	var rectangles = 128;

	present.slide({
		late: 10
	})
		.reveal({
			duration: 1,
		})
			.axis({
				axis: 1,
				detail: 10,
				width: 1.6,
			}).axis({
				axis: 2,
				detail: 10,
				width: 1.6,
			}).grid({
				axes: [1, 2],
				divideX: 80,
				divideY: 80,
				width: 0.8,
			})
		.end();

	present.slide({
		late: 1,
	})
		.reveal({
			duration: 1,
		})
			.interval({
				range: [-2, 2],
				expr: function(emit, x, i, time){
					emit(x, func(x));
				},
				channels: 2,
				width: resolution,
			}).line({
				color: Config.colors.orange,
				width: 2,
				zBias: 8,
			});

	present.slide({
		late: 0
	})
		.reveal({
			duration: 1,
		})
			.area({
				rangeX: [-0.5, 1],
				rangeY: [0, 1],
				expr: function(emit, x, y, i, j, time){
					if(y == 0){
						emit(x, 0);
					}else{
						emit(x, func(x));
					}
				},
				channels: 2,
				width: resolution,
				height: 2,
			}).surface({
				shaded: true,
				color: Config.colors.blue,
				width: 2,
				opacity: 0.5,
			})

			.array({
        width: 1,
				channels: 2,
				data: [-0.5, 0],
			}).text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['a'],
			}).label({
				color: Config.colors.green,
				size: 30,
				offset: [0, -20],
				zIndex: 1,
			}).point({
				color: Config.colors.green,
				size: 8,
			})

			.array({
        width: 1,
				channels: 2,
				data: [1, 0],
			}).text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['b'],
			}).label({
				color: Config.colors.red,
				size: 30,
				offset: [0, -20],
				zIndex: 1,
			}).point({
				color: Config.colors.red,
				size: 8,
			})

			.step({
				target: 'camera',
				pace: 1,
				script: [
					{ position: [0, 0, 3], },
					{ position: [0, 0, 6], },
				],
			})
		.end();

	// =================================================================================



	present.slide({
		late: 1,
	})
		.reveal({
			delayEnter: 1,
			duration: 1,
		})
			.interval({
				range: [-4, 4],
				expr: function(emit, x, i, time){
					emit(x, func2(x));
				},
				channels: 2,
        width: resolution*2,
			}).line({
				color: Config.colors.orange,
				width: 3,
				zBias: 8,
			});

	present.slide({
		late: 0
	})
		.reveal({
			duration: 1,
		})
			.area({
				rangeX: [-1.5, 0],
				rangeY: [0, 1],
				expr: function(emit, x, y, i, j, time){
					if(y == 0){
						emit(x, 0);
					}else{
						emit(x, func2(x));
					}
				},
				channels: 2,
				width: resolution,
				height: 2,
			}).surface({
				shaded: true,
				color: Config.colors.blue,
				width: 2,
				opacity: 0.5,
			})

			.area({
				rangeX: [0, 1.5],
				rangeY: [0, 1],
				expr: function(emit, x, y, i, j, time){
					if(y == 0){
						emit(x, 0);
					}else{
						emit(x, func2(x));
					}
				},
				channels: 2,
				width: resolution,
				height: 2,
			}).surface({
				shaded: true,
				color: Config.colors.red,
				width: 2,
				opacity: 0.5,
			})

			.array({
        width: 1,
				channels: 2,
				data: [-1, 0.3],
			}).text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['+'],
			}).label({
				color: Config.colors.blue,
				size: 40,
				offset: [0, 0],
				zIndex: 1,
			})

			.array({
        width: 1,
				channels: 2,
				data: [1, -0.3],
			}).text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['‒'],
			}).label({
				color: Config.colors.red,
				size: 40,
				offset: [0, 0],
				zIndex: 1,
			})
		.end();

	// =================================================================================

	present.slide({
		late: 1,
	})
		.reveal({
			delayEnter: 1,
			duration: 1,
		})
			.interval({
				range: [-6, 10],
				expr: function(emit, x, i, time){
					emit(x, func3(x));
				},
				channels: 2,
        width: resolution*4,
			}).line({
				color: Config.colors.orange,
				width: 3,
				zBias: 8,
			});

	present.slide({
		late: 0
	})
		.reveal({
			duration: 1,
		})
			.area({
				rangeX: [1, 10],
				rangeY: [0, 1],
				expr: function(emit, x, y, i, j, time){
					if(y == 0){
						emit(x, 0);
					}else{
						emit(x, func3(x));
					}
				},
				channels: 2,
				width: resolution*4,
				height: 2,
			}).surface({
				shaded: true,
				color: Config.colors.blue,
				width: 2,
				opacity: 0.5,
			})

		.end();

	// =================================================================================

	present.slide({
		late: 1,
	})
		.reveal({
			delayEnter: 1,
			duration: 1,
		})
			.interval({
				range: [-8, 8],
				expr: function(emit, x, i, time){
					emit(x, func4(x));
				},
				channels: 2,
        width: resolution*4,
			}).line({
				color: Config.colors.orange,
				width: 3,
				zBias: 8,
			});

	present.slide({
		late: 0
	})
		.reveal({
			duration: 1,
		})
			.area({
				rangeX: [0, 1],
				rangeY: [0, 1],
				expr: function(emit, x, y, i, j, time){
					if(y == 0){
						emit(x, 0);
					}else{
						if(x == 0) emit(0, 20);
						else emit(x, func4(x));
					}
				},
				channels: 2,
				width: resolution,
				height: 2,
			}).surface({
				shaded: true,
				color: Config.colors.blue,
				width: 2,
				opacity: 0.5,
			})

		.end();

	// =================================================================================

	present.slide({
		late: 1,
	})
		.reveal({
			delayEnter: 1,
			duration: 1,
		})
			.interval({
				range: [-6, 6],
				expr: function(emit, x, i, time){
					x = 6*Math.pow(x/6, 3);
					emit(x, func5(x));
				},
				channels: 2,
        width: resolution*40,
			}).line({
				color: Config.colors.orange,
				width: 3,
				zBias: 8,
			});

	present.slide({
		late: 0
	})
		.reveal({
			duration: 1,
		})
			.area({
				rangeX: [0, 3],
				rangeY: [0, 1],
				expr: function(emit, x, y, i, j, time){
					if(y == 0){
						emit(x, 0);
					}else{
						if(x == 0) emit(0, 0);
						else emit(x, func5(x));
					}
				},
				channels: 2,
				width: resolution*10,
				height: 2,
			}).surface({
				shaded: true,
				color: Config.colors.blue,
				width: 2,
				opacity: 0.5,
			})
		.end();
})();
