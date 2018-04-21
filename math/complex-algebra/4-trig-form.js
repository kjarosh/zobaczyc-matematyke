(function trigForm(){
	var present = presentation.cartesian({
		range: [[-1, 5], [-1, 5], [-5,5]],
		scale: [1, 1, 1],
	});
	
	var points = [
		[4, 3],
		[2, 4],
		[3, 1],
		[4, 4],
		[4, 3],
	];
	
	var point = points[0];
	
	var multiArgPoint = point;
	var maPointArg = Math.atan(multiArgPoint[1]/multiArgPoint[0]);
	
	var intScale = null;
	
	// slide 1: show ====================================================================
	var slide = present.slide({
		late: 2
	});
	slide
		.reveal({
			duration: 1
		})
			// axes and grid
			.axis({
				axis: 1,
				width: 4,
				detail: 100
			}).axis({
				axis: 2,
				width: 4,
				detail: 100
			}).grid({
				width: 1,  
				divideX: 5,
				divideY: 5,
			})
		.end()
		
		.reveal({
			duration: 0.5,
			delayEnter: 1
		})
			// show point
			.array({
				id: 'pointarray',
				channels: 2,
				length: 1,
			}).point({
				size: 12,
				color: Config.colors.red
			})
			
			// and label
			.text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['a'],
			})
			.label({
				color: Config.colors.red,
				snap: false,
				size: 40,
				offset: [24, 24],
				depth: .5,
				zIndex: 1,
			})
		.end();
	
	present.slide({
		late: 1
	})
		.reveal({
			duration: 0.5,
		})
			// show r
			.array({
				id: 'linearray',
				channels: 2,
				length: 2,
			}).line({
				size: 8,
				width: 5,
				color: Config.colors.blue,
				stroke: 'dashed',
			})
			
			.array({
				id: 'rlabelarray',
				channels: 2,
				length: 1,
			})
			.text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['r'],
			})
			.label({
				color: Config.colors.blue,
				snap: false,
				size: 40,
				offset: [-24, 24],
				depth: .5,
				zIndex: 1,
			})
		.end();
	
	present.slide({
		late: 0
	})
		.reveal({
			duration: 0.5,
		})
			// show theta
			.transform({
				rotation: [0, Math.PI, Math.PI/2],
			})
				.polar({
					range: [[-2*Math.PI,2*Math.PI], [0,1], [-1,1]]
				})
					.transform({
						id: 'arctransform',
						scale: [Math.PI, 1, 1]
					})
						.interval({
							channels: 2,
							expr: function(emit, x, i, time){
								emit(x, 1.8);
							},
							length: 512,
							range: [0, 1],
						})
						.line({
							color: Config.colors.green,
							size: 4,
							width: 5,
							end: true,
						})
						
						.array({
							data: [1/2, 2.1],
							channels: 2,
							length: 1,
						})
						.text({
							font: Config.mathFont,
							style: Config.mathFontStyleVar,
							data: [String.fromCharCode(952)], // theta
						})
						.label({
							color: Config.colors.green,
							snap: false,
							size: 40,
							offset: [0, 0],
							depth: .5,
							zIndex: 1,
						})
					.end()
				.end()
			.end()
		.end();
	
	present.end().cartesian({
		range: [[-2, 5], [-2, 5], [-5, 5]]
	}).slide({
		late: 0
	})
		.reveal({
			duration: 1,
		})
			// axes and grid
			.axis({
				axis: 1,
				width: 4,
				detail: 100
			}).axis({
				axis: 2,
				width: 4,
				detail: 100
			}).grid({
				width: 1,  
				divideX: 5,
				divideY: 5,
			})
		.end()
		
		.reveal({
			duration: 0.5,
			delayEnter: 1,
		})
			// show line
			.array({
				data: [0, 0, multiArgPoint[0], multiArgPoint[1]],
				channels: 2,
				length: 2,
			}).line({
				width: 5,
				color: Config.colors.blue
			})
			
			// show point
			.array({
				data: multiArgPoint,
				channels: 2,
				length: 1,
			}).point({
				size: 12,
				color: Config.colors.red
			})
			
			// and label
			.text({
				font: Config.mathFont,
				style: Config.mathFontStyleVar,
				data: ['a'],
			})
			.label({
				color: Config.colors.red,
				snap: false,
				size: 40,
				offset: [24, 24],
				depth: .5,
				zIndex: 1,
			})
			
			// arc
			.transform({
				rotation: [0, Math.PI, Math.PI/2],
			})
				.polar({
					range: [[-2*Math.PI,2*Math.PI], [0,1], [-1,1]]
				})
					.transform({
						id: 'arcinterval',
						scale: [1, 1, 1]
					})
						.play({
							target: '#arcinterval',
							script: [
								{ scale: [1, 1, maPointArg] },
								{ scale: [1, 1, maPointArg] },
								
								{ scale: [1, 1, maPointArg + 2*Math.PI] },
								{ scale: [1, 1, maPointArg + 2*Math.PI] },
								
								{ scale: [1, 1, maPointArg + 4*Math.PI] },
								{ scale: [1, 1, maPointArg + 4*Math.PI] },
								
								{ scale: [1, 1, maPointArg + 6*Math.PI] },
								{ scale: [1, 1, maPointArg + 6*Math.PI] },
								
								{ scale: [1, 1, maPointArg] },
							],
							pace: pace,
							loop: true,
							from: 0,
							to: 8,
						})
						
						.interval({
							channels: 2,
							expr: function(emit, x, i, time){
								var max;
								if(intScale == null){
									intScale = presentation.select('#arcinterval').get('scale');
								}
								max = intScale.z;
								
								if(x < max){
									emit(x, 1 + 0.05*x);
								}
							},
							length: 2048,
							range: [0, 10*Math.PI],
						})
						.line({
							color: Config.colors.green,
							size: 4,
							width: 5,
							end: true,
						})
					.end()
				.end()
			.end()
		.end();
	
	// animate! =========================================================================
	
	var pointscript = [];
	var linescript = [];
	var rlabelarrayscript = [];
	var arctransformscript = [];
	var arcintervalscript = [];
	
	var i = 0;
	var foreachfunction = function(p){
		pointscript.push({ data: p });
		linescript.push({ data: [0, 0, p[0], p[1]] });
		rlabelarrayscript.push({ data: [p[0]/2, p[1]/2] });
		
		var currentAlpha = Math.atan(p[1]/p[0]);
		
		arctransformscript.push({
			scale: [currentAlpha, 1, 1],
		});
	};
	
	points.forEach(foreachfunction);
	
	var pace = 3;
	// animate!
	slide
		.play({
			target: '#pointarray',
			script: pointscript,
			pace: pace,
			loop: true,
			from: 0,
			to: points.length - 1,
		})
		.play({
			target: '#linearray',
			script: linescript,
			pace: pace,
			loop: true,
			from: 0,
			to: points.length - 1,
		})
		.play({
			target: '#rlabelarray',
			script: rlabelarrayscript,
			pace: pace,
			loop: true,
			from: 0,
			to: points.length - 1,
		})
		.play({
			target: '#arctransform',
			script: arctransformscript,
			pace: pace,
			loop: true,
			from: 0,
			to: points.length - 1,
		});
})();