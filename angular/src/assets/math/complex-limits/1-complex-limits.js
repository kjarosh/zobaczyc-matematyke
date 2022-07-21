
// sin(z)/z
function sinc(x, y){
	var r2 = x*x + y*y;

	return [
		(x*Math.sin(x)*Math.cosh(y)+y*Math.cos(x)*Math.sinh(y))/r2,
		(x*Math.cos(x)*Math.sinh(y)-y*Math.sin(x)*Math.cosh(y))/r2
	];
}

(function complexLimits(){
	var present = presentation.cartesian({
		range: [[-10, 10], [-10, 10], [-10, 10]],
		scale: [1, 1, 1],
	});

	var scale = 3;

	function complexLimit(func, point, part, resolution, rangez){
		if(!rangez) rangez = 10;

		present.slide({
			late: 1,
		})
			.reveal({
				delayEnter: 1,
				duration: 1,
			})
				.array({
					data: [0, 0, 0],
					channels: 3,
				}).text({
					data: [part == 0 ? 'Część rzeczywista' : 'Część urojona'],
				}).label({
					offset: [0, -400],
					zIndex: 1,
					color: 'black',
				})

				/*.axis({
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
				})*/

				.area({
					rangeX: [-10, 10],
					rangeY: [-10, 10],
					expr: function(emit, x, y, i, j, time){
						var z = scale*func(x/scale, y/scale)[part];
						z = Math.max(z, -rangez);
						z = Math.min(z, rangez);

						emit(x, z, y);
					},
					height: resolution,
					width: resolution,
				}).surface({
					color: Config.colors.blue,
					shaded: true,
					lineX: true,
					lineY: true,
				});

		present.slide({

		}).reveal({
			duration: 1,
		})
			.interval({
				width: 32,
				range: [1, 10],
				expr: function(emit, n, i, time){
					var pow = Math.pow(2, n);

					var x = 15*Math.sin(time)/pow + point[0];
					var y = 15*Math.cos(time)/pow + point[1];
					var z = scale*func(x/scale, y/scale)[part];

					emit(x, z, y);
				},
			}).point({
				size: 6,
				color: Config.colors.orange,
				zBias: 10,
			})

			.array({
				channels: 3,
				items: 1,
        width: 2,
			}, {
				data: function(time){
					var pow = Math.pow(2, 20);

					var x = 15*Math.sin(time)/pow + point[0];
					var y = 15*Math.cos(time)/pow + point[1];
					var z = scale*func(x/scale, y/scale)[part];

					if(Math.abs(z) > rangez){
						return [
							point[0], rangez, point[1],
							point[0], -rangez, point[1]
						];
					}

					return [
						point[0], z, point[1],
						point[0], z, point[1]
					];
				}
			}).point({
				color: Config.colors.red,
				size: 8,
				zBias: 80,
			}).line({
				color: Config.colors.red,
				width: 3,
				zBias: 20,
			});
	}

	complexLimit(sinc, [0, 0], 0, 64, 20);

	complexLimit(func5, [0, 0], 1, 64);

	complexLimit(func9, [0, 0], 1, 64);

	complexLimit(function(x, y){
		if(x == 0 && y == 0){
			return [0, 0];
		}

		var z = func6(x, y);
		return [-z[0], -z[1]];
	}, [0, 0], 1, 65, 30);

})();
