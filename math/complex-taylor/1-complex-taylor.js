
(function sinSeries(){
	var present = presentation.cartesian({
		range: [[-1, 1], [-1, 1], [-1, 1]],
		scale: [1.5, 1.5, 1.5],
	});
	
	function renderApproximations(present, func, approx, around, scale){
		var resolution = 32 + 1;
		
		if(!scale){
			scale = [1, 1, 1];
		}
		
		if(!around){
			around = [0, 0];
		}
		
		var count = 0;
		for(var i = 0; i < approx.length; ++i){
			if(approx[i] != 0) ++count;
		}
		
		var slide = present.slide({
			late: count,
		}).reveal({
			duration: 1,
			delayEnter: 1,
		});
		
		slide.transform({
			pass: 'eye',
			position: [-1.2, 0, -4],
			scale: [1/2, 1/2, 1/2],
		})
			.array({
				data: [0, 0, 0],
				channels: 3,
			}).text({
				data: ['Część rzeczywista'],
			}).label({
				offset: [0, -300],
				zIndex: 1,
				color: 'black',
			})
			
			.area({
				expr: function(emit, x, y, i, j, time){
					emit(x, func(x, y, false)[0], y);
				},
				height: resolution,
				width: resolution,
				live: false,
			}).surface({
				color: Config.colors.orange,
				shaded: true,
				zBias: 4.95,
			})
			
			.array({
				data: [around[0], func(around[0], around[1], false)[0], around[1]],
				channels: 3,
			}).point({
				size: 10,
				color: Config.colors.red,
				zBias: 400,
			});
		
		slide.transform({
			pass: 'eye',
			position: [1.2, 0, -4],
			scale: [1/2, 1/2, 1/2],
		})
			.array({
				data: [0, 0, 0],
				channels: 3,
			}).text({
				data: ['Część urojona'],
			}).label({
				offset: [0, -300],
				zIndex: 1,
				color: 'black',
			})
			
			.area({
				expr: function(emit, x, y, i, j, time){
					emit(x, func(x, y, false)[1], y);
				},
				height: resolution,
				width: resolution,
				live: false,
			}).surface({
				color: Config.colors.orange,
				shaded: true,
				zBias: 4.95,
			})
			
			.array({
				data: [around[0], func(around[0], around[1], false)[1], around[1]],
				channels: 3,
			}).point({
				size: 10,
				color: Config.colors.red,
				zBias: 400,
			});
		
		for(var deg = 0; deg < approx.length; ++deg){
			if(approx[deg] == 0) continue;
			
			var sliden = present.slide().reveal({
				duration: .5,
				delayEnter: .5,
			});
			
			sliden.transform({
				pass: 'eye',
				position: [-1.2, 0, -4],
				scale: [1/2, 1/2, 1/2],
			})
				.area({
					expr: function(deg){
						return function(emit, x, y, ig, jg, time){
							x *= scale[0];
							y *= scale[1];
							
							var val = 0;
							for(var j = 0; j <= deg; ++j){
								if(approx[j] == 0) continue;
								val += approx[j]*complexPow(x - around[0], y - around[1], j)[0];
							}
							
							emit(x/scale[0], val/scale[2], y/scale[1]);
						};
					}(deg),
					height: resolution,
					width: resolution,
					live: false,
				}).surface({
					color: Config.colors.blue,
					shaded: true,
					zBias: 5,
				});
			
			sliden.transform({
				pass: 'eye',
				position: [1.2, 0, -4],
				scale: [1/2, 1/2, 1/2],
			})
				.area({
					expr: function(deg){
						return function(emit, x, y, ig, jg, time){
							x *= scale[0];
							y *= scale[1];
							
							var val = 0;
							for(var j = 0; j <= deg; ++j){
								val += approx[j]*complexPow(x - around[0], y - around[1], j)[1];
							}
							emit(x/scale[0] - around[0], val/scale[2], y/scale[1] - around[1]);
						};
					}(deg),
					height: resolution,
					width: resolution,
					live: false,
				}).surface({
					color: Config.colors.blue,
					shaded: true,
					zBias: 5,
				});
		}
	}
	
	// =========================================================================
	
	function complexPow(x, y, n){
		var k = Math.pow(x*x + y*y, n/2);
		var arg = Math.atan2(y, x);
		return [
			k*Math.cos(n*arg),
			k*Math.sin(n*arg)
		];
	}
	
	
	// sin
	renderApproximations(
		present,
		function(x, y){
			x *= 3;
			y *= 3;
			
			var z = func3(x, y, false);
			return [z[0]/6, z[1]/6];
		},
		[0, 1, 0, -1/6, 0, 1/120, 0, -1/120/6/7, 0, 1/120/6/7/8/9],
		[0, 0],
		[3, 3, 6]
	);
	
	// exp
	renderApproximations(
		present,
		function(x, y){
			x *= 2;
			y *= 4;
			
			var z = func4(x, y, false);
			return [z[0]/6, z[1]/6];
		},
		[1, 1, 1/2, 1/6, 1/24, 1/120, 1/120/6, 1/120/6/7, 1/120/6/7/8, 1/120/6/7/8/9, 1/120/6/7/8/9/10, 1/120/6/7/8/9/10/11],
		[0, 0],
		[2, 4, 6]
	);
	
	// 1/(z^2+1)
	renderApproximations(
		present,
		function(x, y){
			x *= .85;
			y *= .85;
			
			var z = func7(x, y, false);
			return [z[0]/1.5, z[1]/1.5];
		},
		[1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1],
		[0, 0],
		[.85, .85, 1.5]
	);
	
	// log
	renderApproximations(
		present,
		function(x, y){
			x *= 1;
			x += 1;
			
			y *= 1;
			
			var z = func9(x, y, false);
			return [z[0]/1, z[1]/1];
		},
		[0, 1, -1/2, 1/3, -1/4, 1/5, -1/6, 1/7, -1/8, 1/9, -1/10, 1/11, -1/12, 1/13, -1/14],
		[0, 0],
		[1, 1, 1]
	);
	
	// sqrt(z)
	renderApproximations(
		present,
		function(x, y){
			x *= 1.4;
			x += 1;
			
			y *= 1.4;
			
			var z = func5(x, y, false);
			return [z[0]/1.4, z[1]/1.4];
		},
		[1, 1/2, -1/8, 1/16, -5/128, 7/256, -21/1024, 33/2048, -429/32768, 715/65536],
		[0, 0],
		[1.4, 1.4, 1.4]
	);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})();