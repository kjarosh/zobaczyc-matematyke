
/*(function loadFont(){
	var head  = document.getElementsByTagName('head')[0];
	var link  = document.createElement('link');
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = '../../font/lm-math.css';
	link.media = 'all';
	head.appendChild(link);
})();*/

function emitBounded(emit, x, y, ymax, ymin, maxerror){
	if(y >= ymin && y <= ymax){
		emit(x, y);
	}else if(Math.abs(y - ymax) < maxerror){
		emit(x, ymax);
	}else if(Math.abs(y - ymin) < maxerror){
		emit(x, ymin);
	}
}

function dumbSlides(view, num){
	for(var i = num; i --> 0;){
		view.slide();
	}
}

Array.prototype.max = function(){
	return Math.max.apply(null, this);
};

Array.prototype.min = function(){
	return Math.min.apply(null, this);
};

var _DEBUG = false;

var Config = {
	iframe: window != window.top,
	debug: _DEBUG,
	plugins: ['core', 'controls', 'cursor'].concat(_DEBUG ? ['stats'] : []),
	//mathFont: '\'Latin Modern Math\'',
	//mathFont: 'math',
	mathFont: 'Helvetica',
	mathFontStyle: 'normal',
	mathFontStyleVar: 'italic',
	math: {
		x: String.fromCharCode(119909),
		f: String.fromCharCode(119891),
	},
	colors: {
		red: '#ff0000',
		blue: '#1a8cff',
		green: '#2eb82e',
		orange: '#f29e0c',
		
		light_gray: '#cccccc',
		gray: '#666666',
		black: '#000000',
		white: '#ffffff',
		
		pink: '#99004d',
	},
	
	zeroIndex: false,
	
	present: null,
	registerPresentation: function(present){
		this.present = present;
	},
	registerInsert: function(f){
		if(!f) f = function(){};
		
		if(this.debug){
			window.onkeydown = (function(t, f){ return function(e){
				var key = e.keyCode ? e.keyCode : e.which;
				
				if(key == 45){
					t.nextSlide();
				}else if(key == 46){
					f();
				}
				
			}; })(this, f);
		}
	},
	
	nextSlide: function(){
		var present = this.present;
		
		if(!present){
			console.error('Presentation is not registered');
			return;
		}
		
		var length = present.get('length');
		
		if(present.get('index') == present.get('length')){
			if(this.zeroIndex){
				present.set('index', 0);
			}else{
				present.set('index', 1);
			}
		}else{
			present.set('index', present.get('index') + 1);
		}
		
		console.log('Current slide: ' + present.get('index') + '/' + length);
	},
	prevSlide: function(){
		var present = this.present;
		
		if(!present){
			console.error('Presentation is not registered');
			return;
		}
		
		if(present.get('index') == 1){
			present.set('index', present.get('length'));
		}else{
			present.set('index', present.get('index') - 1);
		}
		
		console.log('Current slide: ' + present.get('index'));
	},
	slideNumber: function(){
		var present = this.present;
		
		if(!present){
			console.error('Presentation is not registered');
			return;
		}
		
		return present.get('index');
	},
	totalSlides: function(){
		var present = this.present;
		
		if(!present){
			console.error('Presentation is not registered');
			return;
		}
		
		return present.get('length');
	},
	onLoadEvents: [],
	loaded_: false,
	onLoad: function(f){
		if(this.loaded_){
			f();
		}else{
			this.onLoadEvents.push(f);
		}
	},
	loaded: function(){
		this.onLoadEvents.forEach(function(f){ f(); });
		this.loaded_ = true;
	},
}

if(typeof katex !== 'undefined'){
	var latexFormat = MathBox.DOM.createClass({
		render: function(el){
			this.props.innerHTML = katex.renderToString(this.children);
			return el('span', this.props);
		}
	});
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value){
		vars[key] = value;
	});
	
	return vars;
}
