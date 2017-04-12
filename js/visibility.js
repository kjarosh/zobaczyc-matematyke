
Element.prototype.isVisible = function(){
	var top = 0;
	
	var el = this;
	while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)){
		top += el.offsetTop - el.scrollTop;
		el = el.offsetParent;
	}
	
	var h = this.offsetHeight;
	var bottom = top + h;
	
	var wh = window.innerHeight;
	
	if(top < wh && bottom > 0){
		return true;
	}
	
	return false;
};
