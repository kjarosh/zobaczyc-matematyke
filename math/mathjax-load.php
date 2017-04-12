
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
	tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]},
	TeX: { extensions: ["color.js", "AMSmath.js"] },
	showProcessingMessages: false,
	messageStyle: "none",
});

MathJax.Hub.Register.MessageHook("Math Processing Error",function (message) {
	console.error("PROCESSING: " + message);
});
MathJax.Hub.Register.MessageHook("TeX Jax - parse error",function (message) {
	console.error("PARSING: " + message);
});
</script>

<script type="application/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"></script>
