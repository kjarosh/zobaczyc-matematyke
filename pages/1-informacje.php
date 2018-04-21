<?php
/**
 * @author Kamil Jarosz
 */

class Page1{
	public function getTitle(){ return 'Informacje o stronie'; }
	
	public function render(){
?>
<div class="content">
	<p class="prev-toc">
		<a href="?page=0">Spis treści</a>
	</p>
	
	<h2>Informacje o stronie</h2>
	
	<p>
		Głównym celem tej strony jest zachęcenie czytelników do poznawania nowych
		działów matematyki i ukazanie im w ciekawy sposób pojęć z jakimi
		mogą się zmierzyć. Na stronie zostały przedstawione nie tylko suche fakty i definicje,
		lecz również (a może i przede wszystkim) wizualne aspekty omawianych pojęć &mdash; to one sprawią,
		że czytelnik zagłębi się w różne działy matematyki.
	</p>
	
	<h3>Aspekty techniczne</h3>
	
	<p>
		Strona została napisana w języku PHP 5, HTML5 i CSS3, następnie
		przetestowana na serwerze Apache w wersji 2.2.19 i PHP w wersji 5.2.
	</p>
	
	<p>
		Sprawdzona była na takich przeglądarkach jak Google Chrome i Opera,
		osiągając na nich najwyższą wydajność. Strona bardzo dobrze działa również
		na Microsoft Edge. Przeglądarka Mozilla Firefox nie radzi
		sobie jeszcze z tą technologią, tak samo jak Internet Explorer.
	</p>
	
	<p>
		Na niektórych komputerach
		(zależnie lub niezależnie od przeglądarki) mogą pojawiać się artefakty związane z
		renderowaniem obrazu w technologii WebGL. Wynikają one ze słabego
		jeszcze wsparcia tej technologii.
	</p>
	
	<p>
		Wiele napisanych prezentacji musiałem pominąć ze względu na aspekty obliczeniowe.
		Komputer przeciętnego użytkownika nie podołałby takiemu obciążeniu.
		Wszystkie podane wzory funkcji, przekształceń itp. zostały zmodyfikowane tak,
		aby ich prezentacja była jak najlepsza (np. przesunięte lub przeskalowane).
	</p>
	
	<p>
		Każda część prezentacji została napisana przeze mnie, używając tylko odpowiednich bibliotek
		do wyświetlania danych. Zająłem się opracowaniem i zoptymalizowaniem odpowiednich
		algorytmów i rozwiązań użytych na tej stronie. W tabelce poniżej, jako ciekawostka,
		znajdują się statystyki napisanego przeze mnie kodu.
	</p>
	
	<table>
		<thead>
			<tr>
				<th>Język</th>
				<th class="number-header">JavaScript</th>
				<th class="number-header">HTML</th>
				<th class="number-header">PHP</th>
				<th class="number-header">LESS/CSS</th>
				<th class="number-header">W sumie</th>
			</tr>
		</thead>
		<tfoot>
			<tr>
			</tr>
		</tfoot>
		<tbody>
			<tr>
				<td class="header">Linie kodu</td>
				<td class="number">~6900</td>
				<td class="number">~3400</td>
				<td class="number">~3000</td>
				<td class="number">~700</td>
				<td class="number">~14100</td>
			</tr>
		</tbody>
	</table>
	
	<p>
		Wymagane jest połączenie z internetem.
	</p>
	
	<h3>Wykorzystane technologie</h3>
	
	<p>
		Oprócz standardów PHP, HTML i CSS, użyto następujących bibliotek:
	</p>
	
	<ul>
		<li><a href="https://gitgud.io/unconed/mathbox/tree/master">MathBox2</a>
		&mdash; młoda, lecz pełna potencjału
		biblioteka służąca do wyświetlania obiektów 3D opisanych matematycznie,</li>
		
		<li><a href="http://threejs.org/">three.js</a>
		&mdash; potężna biblioteka służąca do renderowania grafiki trójwymiarowej w
		technologii WebGL,</li>
		
		<li><a href="http://mathjax.org/">MathJax</a>
		&mdash; ogromna biblioteka służąca do renderowania pięknych wzorów matematycznych
		w $\LaTeX$-u,</li>
		
		<li><a href="https://jquery.com/">jQuery</a>
		&mdash; popularna biblioteka ułatwiająca pracę z JavaScript,</li>
		
		<li><a href="http://lesscss.org/">{less}</a>
		&mdash; preprocesor języka CSS, bardzo przydatny przy skomplikowanych selektorach.</li>
	</ul>
	
	<p>
		Nie można zapomnieć o "kulisach" tworzenia strony:
	</p>
	
	<ul>
		<li><a href="https://notepad-plus-plus.org/">Notepad++</a>
		&mdash; jeden z najbardziej rozbudowanych edytorów kodu,</li>
		
		<li><a href="http://www.wampserver.com/">WampServer</a>
		&mdash; prosty i łatwy w instalacji serwer,</li>
		
		<li><a href="https://www.gimp.org/">GIMP</a>
		&mdash; otwarty program do manipulacji obrazami.</li>
	</ul>
	
	<h3>Bibliografia</h3>
	
	<ul>
		<li>W. Krysicki, L. Włodarki: <em>Analiza Matematyczna w Zadaniach cz. 2</em>, wydanie 27.</li>
		<li>F. Leja: <em>Funkcje zespolone</em>, rok 1967.</li>
	</ul>
	
	<h3>O autorze</h3>
	
	<p>
		Jestem uczniem LO im. ks. Stanisława Konarskiego w Oświęcimiu. Na co dzień zajmuję się programowaniem
		wysokopoziomowym (szczególnie w Javie) i matematyką. Moim ulubionym działem jest analiza matematyczna,
		a w szczególności analiza zespolona.
	</p>
	
	<p>
		Wszystkie informacje tu zamieszczone są wynikiem pracy z literaturą oraz moich
		własnych przemyśleń. Starałem się ukazać je w taki sposób, aby pozornie skomplikowane
		fakty można było przedstawić w przystępny sposób oddziałując na wyobrażenia wzrokowe.
	</p>
	
	<p>
		Strona ta jest pracą biorącą udział w konkursie pod tytułem
		<a href="http://zobaczycmatematyke.pl/">"Zobaczyć matematykę"</a>.
	</p>
</div>

<?php
	}
}
