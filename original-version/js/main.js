
/*$(document).ready(function(){
	jQuery.scrollSpeed(100, 800);
});*/

function getIframeConfig(iframe){
	return $(iframe)[0].contentWindow.Config;
}

function updateSlideNumber(present, iframe){
	$(present).find('.slide-number').each(function(){
		var conf = getIframeConfig(iframe);
		$(this).html(
			conf.slideNumber() + '/' +
			conf.totalSlides()
		);
	});
}

function updateArrows(present, fromN, toN, totalSlides){
	var toDisable = null;
	var toEnable = null;
	
	if(toN == totalSlides){
		toDisable = $(present).find('.arrow-right');
		toEnable = $(present).find('.arrow-left');
	}else if(toN == 1){
		toDisable = $(present).find('.arrow-left');
		toEnable = $(present).find('.arrow-right');
	}
	
	if(toDisable != null){
		toDisable.addClass('disabled');
		toEnable.removeClass('disabled');
	}else{
		$(present).find('.arrow-left').removeClass('disabled');
		$(present).find('.arrow-right').removeClass('disabled');
	}
}

function changeTextTo(toN, present){
	var time = 300;
	$(present)
		.find('.slide:not([data-slide~="' + toN + '"])').fadeOut(time, function(){})
		.promise().done(function(){
			$(present).find('.slide[data-slide~="' + toN + '"]').fadeIn(time, function(){});
		});
}

function changeSlide(present, iframe, num){
	var conf = getIframeConfig(iframe);
	var totalSlides = conf.totalSlides();
	var fromN = conf.slideNumber();
	
	if(num > 0 && fromN < totalSlides){
		conf.nextSlide();
	}else if(num < 0 && fromN > 1){
		conf.prevSlide();
	}
	
	var toN = conf.slideNumber();
	
	updateArrows(present, fromN, toN, totalSlides);
	
	updateSlideNumber(present, iframe);
	
	if(toN != fromN){
		changeTextTo(toN, present);
	}
}

$(document).ready(function(){
	var iframes = [];
	
	$('div.present').each(function(){
		var present = this;
		var iframe = $(present).find('iframe')[0];
		
		$(present).find('.arrow-left').addClass('disabled');
		$(present).find('.arrow-right').addClass('disabled');
		$(present).find('.arrow-reload').addClass('disabled');
		
		var eventListener = function(){
			$(present).find('.arrow-reload').removeClass('disabled');
			
			var conf = getIframeConfig(iframe);
			
			conf.onLoad(function(){
				updateSlideNumber(present, iframe);
				updateArrows(present, conf.slideNumber(), 1, conf.totalSlides());
			});
			
			$(present).find('.arrow-right')[0].onclick = function(){
				changeSlide(present, iframe, +1);
			};
			
			$(present).find('.arrow-left')[0].onclick = function(){
				changeSlide(present, iframe, -1);
			};
			
			$(present).find('.arrow-reload')[0].onclick = function(){
				updateArrows(present, conf.slideNumber(), 1, conf.totalSlides());
				updateSlideNumber(present, iframe);
				iframe.src = iframe.src;
				iframe.contentWindow.location.reload(true);
				changeTextTo(1, present);
			};
		}
		
		if(document.addEventListener){
			document.addEventListener("mathbox", eventListener, false); 
		}else if(document.attachEvent){ // MSIE
			// create a custom property name jqmReady and set it to 0
			document.documentElement.jqmReady = 0;
			// since IE8 does not allow to listen to custom events, 
			// just listen to onpropertychange
			document.documentElement.attachEvent("onpropertychange", function(event){
				// if the property changed is the custom jqmReady property
				if(event.propertyName == "mathbox"){
					eventListener();
					// remove listener, since it's only used once
					document.documentElement.detachEvent("onpropertychange", arguments.callee);
				}
			});
		}
	});
	
	$('iframe.mathbox').each(function(){
		iframes.push(this);
	});
	
	$(window).scroll(function(){
		iframes.forEach(function(iframe){
			var mbox = iframe.contentWindow.mathbox;
			
			if(mbox){
				if(iframe.isVisible()){
					$(iframe).addClass('mathbox-started');
					$(iframe).removeClass('mathbox-stopped');
					mbox.start();
				}else{
					$(iframe).removeClass('mathbox-started');
					$(iframe).addClass('mathbox-stopped');
					mbox.stop();
				}
			}
		})
	});
});

// LOADING ===============================================

var canUnload = true;
var toUnload = false;
var unloadFunction = null;

function removeFade(){
	$('#fade').fadeOut({
		duration: 1000,
		queue: false,
	});
	
	var fade = $('#fade')[0];
	
	// self-destruction, free up memory
	fade.parentNode.removeChild(fade);
}

$(document).ready(function(){
	$('iframe#loading').fadeOut({
		duration: 1,
		queue: false
	});
	
	setTimeout(function(){
		if(!canUnload) return;
		
		canUnload = false;
		
		$('iframe#loading').fadeIn({
			duration: 500,
			queue: false,
			complete: function(){
				canUnload = true;
				unloadFunction = function(){
					$('iframe#loading').fadeOut({
						duration: 500,
						queue: false,
						complete: function(){
							removeFade();
						}
					});
				};
				
				if(toUnload){
					unloadFunction();
				}
			}
		});
	}, 3000);
});

MathJax.Hub.Register.StartupHook('End Typeset', function(){
	if(canUnload){
		if(unloadFunction){
			unloadFunction();
		}else{
			removeFade();
		}
		
		canUnload = false;
	}else{
		toUnload = true;
	}
});
