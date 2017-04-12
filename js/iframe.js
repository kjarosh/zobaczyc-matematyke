function setupLoadChecker(iframe){
	var IFRAME_LOADER_LAST_SLIDES = 0;
	
	var interval = setInterval(chceckLoaded, 100);
	
	function chceckLoaded(){
		if(iframe.contentWindow.Config && iframe.contentWindow.mathbox){
			clearInterval(interval);
			
			//iframe.dispatchEvent(new Event('mathbox'));
			
			if(document.createEvent){
				evt = document.createEvent("Event");
				evt.initEvent("mathbox", true, true);
				document.dispatchEvent(evt);
			}else if(document.createEventObject){ // MSIE
				// just change the property 
				// this will trigger onpropertychange
				document.documentElement.mathbox++;
			}
			
			setupSlideChecker(iframe);
		}
	}
}

function setupSlideChecker(iframe){
	var IFRAME_LOADER_LAST_SLIDES = 0;
	var conf = iframe.contentWindow.Config;
	
	function chceckLoadedFactory(lastTime){
		return function(){
			var s = conf.totalSlides();
			
			var newTimeout = function(){
				var newTime = lastTime + 100;
				if(newTime > 2000){
					newTime = 2000;
				}
				
				setTimeout(chceckLoadedFactory(newTime), newTime);
			}
			
			if(s > 0){
				if(s == IFRAME_LOADER_LAST_SLIDES){
					conf.loaded();
				}else{
					IFRAME_LOADER_LAST_SLIDES = s;
					newTimeout();
				}
			}else{
				newTimeout();
			}
		};
	}
	
	setTimeout(chceckLoadedFactory(0), 100);
}