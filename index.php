<?php
/**
 * @author Kamil Jarosz
 */

include_once dirname(__FILE__) . '/theme/theme.php';

include_once dirname(__FILE__) . '/pages/0-spis.php';
include_once dirname(__FILE__) . '/pages/1-informacje.php';

include_once dirname(__FILE__) . '/pages/2-wstep.php';
include_once dirname(__FILE__) . '/pages/3-ciagi-sfera.php';
include_once dirname(__FILE__) . '/pages/4-funkcje-3d.php';
include_once dirname(__FILE__) . '/pages/5-granice-pochodna.php';
include_once dirname(__FILE__) . '/pages/6-transformacje-mobiusa.php';
include_once dirname(__FILE__) . '/pages/7-szereg-taylora.php';
include_once dirname(__FILE__) . '/pages/8-przedluzenia.php';
include_once dirname(__FILE__) . '/pages/9-calka-zespolona.php';

$TITLE = 'Zbaczając z osi rzeczywistej';

class Renderer implements ThemeRenderer{
	private $page;
	
	public function __construct($page){
		$this->page = $page;
	}
	
	public function renderTitle(){
		global $TITLE;
		echo $this->page->getTitle() . ' - ' . $TITLE;
	}
	
	public function renderNavigation(){
		// nil
	}
	
	public function renderBody(){
		$this->page->render();
	}
}

function redirect(){
	header('HTTP/1.1 404 Not Found');
	
	$i = 0;
	for(; $i <= 10; ++$i){
		if(class_exists('Page' . $i)){
			break;
		}
	}
	
	if($i < 10){
		header('HTTP/1.1 404 Not Found');
		header('Location: ?page=' . $i);
	}
}

if(!isset($_GET['page'])){
	redirect();
}

$p = (int)$_GET['page'];
$clazz = 'Page' . $p;
if(!class_exists($clazz)){
	redirect();
}

$renderer = new Renderer(new $clazz());

$theme = new Theme();
$theme->setRenderer($renderer);
$theme->execute();
