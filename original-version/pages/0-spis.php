<?php
/**
 * @author Kamil Jarosz
 */

class Page0{
	public function getTitle(){ return 'Strona główna'; }
	
	public function render(){
?>
<div class="content">
	<h2>Strona główna</h2>
	
	<p>
		<?php /*Ponizsza strona skupia się nad ukazaniem specjalistycznej strony matematyki
		&mdash; analizy zespolonej. Zaczynając od podstawowych działań na liczbach zespolonych,
		poprzez zrozumiałe graficzne przedstawienie, a kończąc na &lt;jeszcze nie
		wiem na czym skończę&gt;, ukazuje ona nieodkryty dotąd przez ucznia szkoły
		średniej świat o większej liczbie wymiarów niż dotychczas.*/ ?>
		
		Przygotowana prezentacja pokazuje piękno matematyki poznawanej
		poprzez jeden z jej działów &mdash; analizę zespoloną. Zaczynając od podstawowych pojęć związanych
		z liczbami zespolonymi, poprzez działania na nich, różnego rodzaju interpretacje wizualne,
		a kończąc na rozbudowanych funkcjach ukazuję nieodkrywany w szkole średniej
		świat o większej liczbie wymiarów.
	</p>
	
	<p>
		Czytelnik zależnie od poziomu zainteresowania i zrozumienia może wybierać działy
		poczynając od prostych definicji i działań, a kończąc na przedłużeniach analitycznych
		i teorii całki.
	</p>
	
	<h3>Spis treści</h3>
	
	<a class="pageinfo" href="?page=1">Informacje o stronie</a>
	
	<ol class="toc">
		<li>
			<h4><a href="?page=2">Wstęp do liczb zespolonych</a></h4>
			<p>Definicja, podstawowe własności i działania na liczbach zespolonych.</p>
		</li>
		<li>
			<h4><a href="?page=3">Ciągi zespolone i sfera Riemanna</a></h4>
			<p>Reprezentacja ciągu zespolonego, wyobrażenie sfery Riemanna.</p>
		</li>
		<li>
			<h4><a href="?page=4">Funkcje dwóch zmiennych i funkcje zespolone</a></h4>
			<p>Powierzchnie trójwymiarowe i różne reprezentacje funkcji zespolonych.</p>
		</li>
		<li>
			<h4><a href="?page=5">Granice funkcji zespolonych i pochodna zespolona</a></h4>
			<p>Wyobrażenie granicy funkcji zespolonej, różniczkowanie funkcji.</p>
		</li>
		<li>
			<h4><a href="?page=6">Transformacje Möbiusa</a></h4>
			<p>Zobrazowanie transformacji Möbiusa na płaszczyźnie zespolonej.</p>
		</li>
		<li>
			<h4><a href="?page=7">Szereg Taylora</a></h4>
			<p>Aproksymacja funkcji rzeczywistych &mdash; wstęp do podstawowego narzędzia
			analizy zespolonej.</p>
		</li>
		<li>
			<h4><a href="?page=8">Przedłużenia analityczne</a></h4>
			<p>"Szukanie" funkcji za pomocą szeregu Taylora.</p>
		</li>
		<li>
			<h4><a href="?page=9">Całka zespolona</a></h4>
			<p>Operacja całkowania na funkcjach zespolonych.</p>
		</li>
	</ol>
</div>

<?php
	}
}
