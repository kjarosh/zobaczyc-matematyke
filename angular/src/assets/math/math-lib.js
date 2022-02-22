var RiemannSphere = {
	xyToRiemann: function(x, y){
		// make points closer to the infinity
		var angle = Math.atan2(y, x);
		var r2 = x*x + y*y;
		var r = 0;

		if(r2 > gridRangeNormal*gridRangeNormal){
			r = Math.sqrt(r2);
			var tmp = (r - gridRangeNormal);
			r = tmp*tmp*tmp/10 + r;
			r2 = r*r;
		}else{
			r = Math.sqrt(r2);
		}

		var retR = 4*r/(4+r2);
		var retZ = 2*r2/(4+r2);

		var retX = retR * Math.cos(angle);
		var retY = retR * Math.sin(angle);

		return [retX, retY, retZ];
	},

	riemannToXy: function(x, y, z){
		var angle = Math.atan2(y, x);
		var r = 2*Math.sqrt(z)/Math.sqrt(2 - z);

		return [r*Math.cos(angle), r*Math.sin(angle)];
	},
};

var ColorConvert = {
	HSVtoRGB: function(h, s, v){
		var r, g, b, i, f, p, q, t;

		i = Math.floor(h * 6);
		f = h * 6 - i;
		p = v * (1 - s);
		q = v * (1 - f * s);
		t = v * (1 - (1 - f) * s);

		switch (i % 6) {
			case 0: r = v, g = t, b = p; break;
			case 1: r = q, g = v, b = p; break;
			case 2: r = p, g = v, b = t; break;
			case 3: r = p, g = q, b = v; break;
			case 4: r = t, g = p, b = v; break;
			case 5: r = v, g = p, b = q; break;
		}

		return [r, g, b];
	}
};

// =============================================================================

function renderRI(func, slide){
	var resolution = 32 + 1;

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
			color: Config.colors.blue,
			shaded: true,
			lineX: true,
			lineY: true,
		})

		.interval({
			expr: function(emit, x, i, time){
				emit(x, func(x, 0, true)[0], 0);
			},
			width: resolution,
		}).line({
			color: Config.colors.red,
			zBias: 50,
			zOrder: 50,
			width: 3,
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
			color: Config.colors.blue,
			shaded: true,
			lineX: true,
			lineY: true,
		})

		.interval({
			expr: function(emit, x, i, time){
				emit(x, func(x, 0, true)[1], 0);
			},
      width: resolution,
		}).line({
			color: Config.colors.red,
			zBias: 50,
			zOrder: 50,
			width: 3,
		});
}
