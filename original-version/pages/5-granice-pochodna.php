<?php
/**
 * @author Kamil Jarosz
 */

class Page5{
	public function getTitle(){ return 'Granice funkcji zespolonych i pochodna w sensie zespolonym'; }
	
	public function render(){
?>
<div class="content">
	<p class="prev-toc">
		<a href="?page=0">Spis treści</a>
	</p>
	
	<h2>Granice funkcji zespolonych</h2>
	
	<p>
		Granica funkcji zespolonej różni się stanowczo od granicy funkcji
		rzeczywistej. Przypomnijmy sobie jedną z definicji granicy funkcji
		rzeczywistej.
	</p>
	
	<blockquote class="def">
		Funkcja $f(x)$ ma granicę w punkcie $x_0$ równą ${\color{red}{g}}$, jeśli dla każdego
		ciągu ${\color{blue}{a_n}}$ zbieżnego do $x_0$ mamy
		$$\lim_{n\to\infty} f({\color{blue}{a_n}})={\color{red}{g}}$$
	</blockquote>
	
	<p>
		Definicja granicy funkcji zespolonej jest praktycznie taka sama. Różnica
		pojawia się gdy mówimy o ciągach. Operując na funkcjach
		rzeczywistych, do danego punktu możemy się zbliżać tylko z dwóch stron &mdash;
		dlatego są tylko dwie granice jednostronne. Gdy mówimy o funkcjach zespolonych,
		do danego punktu możemy się zbliżać z <em>każdej</em> strony. Dlatego definicja
		mimo, że jest bardzo podobna, pociąga za sobą dużo większe konsekwencje.
	</p>
	
	<blockquote class="def">
		Funkcja zespolona $f(z)$ ma granicę w punkcie $z_0$ równą ${\color{red}{g}}$, jeśli dla każdego
		ciągu zespolonego ${\color{blue}{w_n}}$ zbieżnego do $z_0$ mamy
		$$\lim_{n\to\infty} f({\color{blue}{w_n}})={\color{red}{g}}$$
	</blockquote>
	
</div>
<?php include __DIR__ . '/../math/complex-limits/complex-limits.php'; ?>
<div class="content">
	
	<p>
		Zapis granicy funkcji zespolonej jest taki sam jak granicy funkcji rzeczywistej.
		Jedyna różnica jest w tym, że zmienna może dążyć do jakiejś liczby zespolonej, na przykład:
		
		$$\lim_{h\to 2+3i} f(h)$$
		
		Często zobaczyć można również zapis
		
		$$\lim_{\substack{x\to 2\\y\to 3}} f(x+yi)$$
		
		Czasem zmienną tę traktuje się jako punkt, stąd zapis:
		
		$$\lim_{h\to (2,3)} f(h)$$
	</p>
	
	<h2>Pochodna funkcji zespolonej</h2>
	
	<p>
		Definicja pochodnej funkcji zespolonej jest identyczna z definicją pochodnej
		funkcji rzeczywistej z taką różnicą, że granica użyta w tej definicji jest granicą
		zespoloną:
	</p>
	
	<blockquote class="def">
		$$f'(z)=\lim_{h\to(0,0)} \frac{f(z+h)-f(z)}{h}$$
	</blockquote>
	
	<p>
		Funkcja, która jest różniczkowalna w sensie zespolonym nazywa się funkcją <em>holomorficzną</em>.
		Posiada ona dużo więcej własności niż funkcja różniczkowalna w sensie rzeczywistym. Jest tak dlatego,
		że granica funkcji zespolonej ma dużo mocniejsze znaczenie. Funkcja holomorficzna posiada
		pochodną dowolnego stopnia, jest rozwijalna w szereg Taylora i jest konforemna.
	</p>
	
	<p class="next-page">
		<a href="?page=6">Następna strona: Transformacje Möbiusa</a>
	</p>
</div>
<?php
	}
}
