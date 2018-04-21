<?php
/**
 * @author Kamil Jarosz
 */

class Page7{
	public function getTitle(){ return 'Szereg Taylora'; }
	
	public function render(){
?>
<div class="content">
	<p class="prev-toc">
		<a href="?page=0">Spis treści</a>
	</p>
	
	<h2>Szereg Taylora</h2>
	
	<p>
		W roku 1715, Brook Taylor wydał książkę, w której podał ogólny wzór na szereg, zwany od jego nazwiska <em>szeregiem Taylora</em>.
		Przez wiele lat, aż do dzisiaj jest on podstawowym narzędziem badania funkcji nie tylko
		rzeczywistych, ale również zespolonych.
	</p>
	
	<h3>Funkcja gładka jako wielomian</h3>
	
	<p>
		Wielomiany są bardzo popularnymi funkcjami, które matematycy badają od bardzo dawna.
		Okazuje się bowiem, że każda funkcja $f$ nieskończenie wiele razy różniczkowalna, tzn. posiadająca pochodną dowolnego stopnia
		(zwana funkcją gładką) może być przedstawiona w otoczeniu punktu $x_0$ w postaci sumy
		
		$$s(x)=a_0+a_1(x-x_0)+a_2(x-x_0)^2+a_3(x-x_0)^3+...$$
		
		Suma ta wcale nie musi być zbieżna w każdym punkcie $x$, lecz jeśli jest zbieżna,
		musi być zbieżna do wartości funkcji w tym punkcie: $f(x)$.
	</p>
	
	<p>
		Okazuje się, że każdy szereg postaci $s(x)$ jest zbieżny w pewnym kole o promieniu $R$,
		nazywanym <em>kołem zbieżności szeregu</em>. Oznacza to, że istnieje takie $R$, że
		szereg $s(x)$ jest zbieżny dla wszystkich $x$ odległych o mniej niż $R$ od $x_0$:
		$$|x-x_0|\lt R$$
		
		natomiast rozbieżny dla wszystkich $x$ odległych o więcej niż $R$ od $x_0$:
		$$|x-x_0|\gt R$$
		
		Co jeśli $x$ znajduje się w odległości równej $R$? Zależnie od szeregu, może on
		być wtedy zbieżny lub rozbieżny.
	</p>
	
</div>
<?php include __DIR__ . '/../math/taylor-series/taylor-series.php'; ?>
<div class="content">
	
	<p>
		Promień zbieżności szeregu $s(x)$ jest czasem bardzo dziwny i mimo, że istnieją
		bardzo łatwe sposoby na jego policzenie, jego wartość nie jest niczym wytłumaczona.
		Okazuje się, że promień ten zależy od zachowania funkcji <em>poza</em> prostą rzeczywistą,
		na płaszczyźnie zespolonej.
	</p>
	
	<p class="next-page">
		<a href="?page=8">Następna strona: Przedłużenia analityczne</a>
	</p>
</div>
<?php
	}
}
