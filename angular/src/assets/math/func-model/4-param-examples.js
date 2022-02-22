
(function paramExamples(){
	var present = presentation.cartesian({
		range: [[-10, 10], [-5, 5], [-10, 10]],
		scale: [1, 1, 1],
	});
	
	present.slide({
		late: 1,
	})
		.reveal({
			delayEnter: 1,
			duration: 1,
		})
			.transform()
				.step({
					script: [
						{ position: [0, -1, 0] },
						{ position: [0, 0, 0] },
					],
					pace: 1,
				})
				.axis({
					axis: 1,
					width: 2,
					detail: 100,
				}).axis({
					axis: 3,
					width: 2,
					detail: 100,
				}).grid({
					axes: [1, 3],
					width: 1,
					divideX: 10,
					divideY: 10,
				});
	
	present.slide()
		.reveal({
			delayEnter: 1,
			duration: 1,
		})
			.area({
				width: 32,
				height: 32,
				axes: [1, 3],
				expr: function(emit, x, y, i, j, time){
					x/= 10;
					y/= 10;
					
					var z = y*y-Math.sin(time)*x*x;
					emit(10*x, 4*z, 10*y);
				},
				items: 1,
				channels: 3,
			}).surface({
				shaded: true,
				lineX: true,
				lineY: true,
				color: Config.colors.blue,
				width: 1,
			})
		.end();
	
	present.slide()
		.reveal({
			delayEnter: 1,
			duration: 1,
		})
			.transform({
				scale: [5, 5, 5],
			})
				.axis({
					axis: 1,
					width: 3,
					detail: 100,
				}).axis({
					axis: 3,
					width: 3,
					detail: 100,
				}).grid({
					axes: [1, 3],
					width: 1.5,
					divideX: 50,
					divideY: 50,
				})
				
				.area({
					width: 128,
					height: 128,
					axes: [1, 3],
					expr: function(emit, x, y, i, j, time){
						var r = x*x + y*y;
						var z =
							(Math.sin( // 3D sine wave
								(r - 20 * time) / 10 // animated distance from (0,0)
							)/2 + 1/2) // shift to touch 0 only from above
							* (80/(r + 50)) // scale function at corners radially
							+ 0.2; // move up
						
						emit(x, z, y);
					},
					items: 1,
					channels: 3,
				}).surface({
					shaded: true,
					lineX: true,
					lineY: true,
					color: Config.colors.blue,
					width: 1.5,
				})
			.end();
})();