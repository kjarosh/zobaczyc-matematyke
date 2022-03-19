<?php

class IFrame{
	private static $id = 0;
	private $file;
	private $dir;
	private $title;
	private $slides = array();
	
	public function __construct($title, $file, $dir){
		$this->title = $title;
		$this->file = $file;
		$this->dir = $dir;
	}
	
	public function slide($content, $late = 0, $back = 0){
		$this->slides[] = array(
			'late' => $late,
			'content' => $content,
			'back' => $back
		);
	}
	
	public function render(){
		$iframeID = 'iframe-' . (self::$id++);
		$file = $this->file;
		
		if(!isset($_GET['load'])){
			$file = 'math/' . $this->dir . '/' . $file;
		}
?><div class="present">
	<?php if(isset($_GET['load'])): ?>
		<link rel="stylesheet/less" type="text/css" href="../../css/main.less" />
		<script type="application/javascript" src="../../jslib/less.min.js"></script>
		
		<?php include __DIR__ . '/../math/mathjax-load.php'; ?>
		<?php include __DIR__ . '/../math/mathjax-postload.php'; ?>
		
		<script src="../../jslib/jquery.min.js"></script>
		
		<script src="../../js/iframe.js"></script>
		<script src="../../js/main.js"></script>
	<?php endif; ?>
	
	<iframe class="mathbox" id="<?php echo $iframeID; ?>" src="<?php if(isset($_GET['load'])) echo $file; else echo 'math/_loader.html'; ?>" data-src="<?php echo $file; ?>"></iframe>
	
	<?php if(isset($_GET['load'])): ?>
		<script>
			var iframe = document.getElementById('<?php echo $iframeID; ?>');
			iframe.dispatchEvent(new Event('mathbox'));
			setupLoadChecker(iframe);
		</script>
	<?php else: ?>
		<script>
			$(document).ready(function(){
				var iframe = document.getElementById('<?php echo $iframeID; ?>');
				
				$(iframe).load(function(){
					var innerDoc = iframe.contentWindow.document;
					$(innerDoc).ready(function(){
						$(innerDoc, 'div#play').click(function(){
							var src = iframe.src;
							var data = iframe.getAttribute('data-src');
							
							// compare only ending
							if(data.length > src.length){
								data = data.substring(data.length - src.length, data.length);
							}else{
								src = src.substring(src.length - data.length, src.length);
							}
							
							// prevent reloading
							if(src != data){
								iframe.src = iframe.getAttribute('data-src');
								
								setupLoadChecker(iframe);
							}
						});
					});
				});
			});
		</script>
	<?php endif; ?>
	
	<div class="slide-text">
		<h4><?php echo $this->title; ?></h4>
		<div class="slide-number" data-iframeid="<?php echo $iframeID; ?>"></div>
		
		<?php $sliden = 1; ?>
		<?php foreach($this->slides as $slide): ?>
			<?php
				if($slide['back'] != 0){
					$sliden -= $slide['back'];
				}
				
				$num = '';
				for($i = 0; $i < $slide['late'] + 1; ++$i){
					$num .= $sliden++ . ' ';
				}
			?>
			<div class="slide" data-slide="<?php echo $num; ?>">
				<?php
				if(function_exists($slide['content'])){
					$slide['content']();
				}else{
					echo $slide['content'];
				}
				?>
			</div>
		<?php endforeach; ?>
		
		<div class="clear"></div>
		<div class="slide-buttons">
			<div class="arrow-left" data-iframeid="<?php echo $iframeID; ?>"></div>
			<div class="arrow-reload" data-iframeid="<?php echo $iframeID; ?>"></div>
			<div class="arrow-right" data-iframeid="<?php echo $iframeID; ?>"></div>
		</div>
	</div>
</div><?php
	}
}
