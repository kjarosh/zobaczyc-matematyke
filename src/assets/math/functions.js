//////////////////////////////////////////////////

// f(z)=z^2
function func1(x, y){
	return [x*x-y*y, 2*x*y];
}

// f(z)=z^4
function func2(x, y){
	x *= 0.8;
	y *= 0.8;
	var x3 = x*x*x;
	var y3 = y*y*y;
	
	return [x3*x-6*y*y*x*x+y*y3, 4*(x3*y-x*y3)];
}

// f(z)=sin(z)
function func3(x, y){
	return [
		Math.sin(x)*Math.cosh(y),
		Math.cos(x)*Math.sinh(y)
	];
}

// f(z)=exp(z)
function func4(x, y){
	return [
		Math.exp(x)*Math.cos(y),
		Math.exp(x)*Math.sin(y)
	];
}

// f(z)=sqrt(z)
function func5(x, y){
	var k = Math.pow(x*x+y*y, 1/4);
	
	var alpha = .5*Math.atan2(y,x);
	
	return [
		k*Math.cos(alpha),
		k*Math.sin(alpha)
	];
}

// f(z)=1/z
function func6(x, y, interval){
	if(x == 0 && y == 0){
		if(interval){
			return [undefined, 0];
		}else{
			return [0, 0];
		}
	}
	
	var k = 1/(x*x+y*y);
	
	return [
		k*x,
		-k*y
	];
}

// f(z)=1/(z^2+1)
function func7(x, y){
	var x2 = x*x;
	var y2 = y*y;
	var r = x2-y2+1;
	var i = 2*x*y;
	
	if(x == 0 && (y == 1 || y == -1)){
		return [0, 0];
	}
	
	return [
		r/(r*r+i*i),
		-i/(r*r+i*i)
	];
}

// f(z)=tan(z)
function func8(x, y, interval){
	if(y == 0 && ((x - Math.PI/2)/Math.PI % 1 == 0)){
		if(interval){
			return [undefined, 0];
		}else{
			return [0, 0];
		}
	}
	
	var d = (Math.cos(2*x)+Math.cosh(2*y));
	return [
		Math.sin(2*x)/d,
		Math.sinh(2*y)/d
	];
}

// f(z)=log(z)
function func9(x, y){
	if(x == 0 && y == 0){
		return [-3, 0];
	}
	
	return [
		Math.log(x*x+y*y)/2,
		Math.atan2(y, x)
	];
}
