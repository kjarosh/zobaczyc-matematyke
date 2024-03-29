<?php
/**
 * @author Kamil Jarosz
 */


interface ThemeRenderer{
	public function renderTitle();
	public function renderNavigation();
	public function renderBody();
}

class Theme{
	private $renderer;
	
	public function setRenderer(ThemeRenderer $renderer){
		$this->renderer = $renderer;
	}
	
	public function execute(){
		$r = $this->renderer;
		
		global $TITLE;
		
?><!doctype html>
<html lang="pl">
	<head>
		<meta charset="utf-8"/>
		<title><?php $r->renderTitle(); ?></title>
		
		<?php /* MathJax */ ?>
			<?php include dirname(__FILE__) . '/../math/mathjax-load.php'; ?>
		<?php /* end MathJax */ ?>
		
		<?php /* LESS */ ?>
			<link rel="stylesheet/less" type="text/css" href="css/background.less" />
			<link rel="stylesheet/less" type="text/css" href="css/main.less" />
			<!--[if IE]>
				<link rel="stylesheet/less" type="text/css" href="css/iframe-ie.less" />
			<![endif]-->
			
			<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.0.2/less.min.js"></script>
		<?php /* end LESS */ ?>
		
		<?php /* Libraries */ ?>
			<script src="https://code.jquery.com/jquery-2.2.4.min.js"
				integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
				crossorigin="anonymous"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/92/three.min.js"
				integrity="sha256-wdpU7RX1XIEGCf6v5hatJyV4/DNtLbidb4LmzN8w+Jo="
				crossorigin="anonymous"></script>
			
			<script src="js/visibility.js"></script>
		<?php /* end Libraries */ ?>
		
		<script src="js/iframe.js"></script>
		<script src="js/main.js"></script>
		
		<style>
			div#fade {
				width: 100%;
				height: 100%;
				pointer-events: none;
				opacity: 1;
				background-color: white;
				position: fixed;
				top: 0px;
				left: 0px;
				z-index: 9999;
			}
		</style>
	</head>
	<body>
		<div id="fade">
			<iframe id="loading" src="math/_loading/loading.html"></iframe>
		</div>
		
		<?php include dirname(__FILE__) . '/../math/mathjax-postload.php'; ?>
		
		<nav id="main-nav" style="position:relative;">
			<div class="frame"></div>
			<iframe class="mathbox" src="math/_header/header.html"></iframe>
			
			<div class="wrapper">
				<div id="logo">
					<h1><?php echo $TITLE; ?></h1>
				</div>
				<?php $r->renderNavigation(); ?>
			</div>
		</nav>
		<div id="container">
			<?php $r->renderBody(); ?>
		</div>
		
		<footer>
			<div class="copyright-notice">
				Copyright &copy;2015,2016 Kamil Jarosz, wszystkie prawa zastrzeżone. Rev 2.
			</div>
		</footer>
	</body>
</html>
<?php
	}
}
