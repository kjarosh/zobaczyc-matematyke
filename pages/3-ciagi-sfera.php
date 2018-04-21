<?php
/**
 * @author Kamil Jarosz
 */

class Page3{
	public function getTitle(){ return 'Ciągi zespolone i sfera Riemanna'; }
	
	public function render(){
?>
<div class="content">
	<p class="prev-toc">
		<a href="?page=0">Spis treści</a>
	</p>
	
	<h2>Ciągi zespolone i sfera Riemanna</h2>
	
	<p>
		Podstawowym narzędziem analizy matematycznej jest pojęcie granicy. Jeśli to pojęcie połączymy
		z ciągami, to już tylko krok nas dzieli od granic funkcji, pochodnych, całek i innych coraz
		bardziej złożonych narzędzi matematycznych. Zastanówmy się jednak nad pojęciem ciągu zespolonego.
	</p>
	
	<h3>Reprezentacja ciągu</h3>
	
	<p>
		Ciąg zespolony jest ciągiem liczb zespolonych:
		
		$$(w_n)=(w_1,w_2,w_3,...)$$
		
		Nie da się go oczywiście narysować tak samo jak ciągu liczb rzeczywistych, zamiast jednej
		wartości mamy dwie (część rzeczywistą i urojoną). Jednak można interpretować
		go jako ciąg punktów na płaszczyźnie, lub jako dwa osobne ciągi:
		ciąg części rzeczywistych i urojonych, które już są ciągami rzeczywistymi.
	</p>
	
	<p>
		Definicja granicy ciągu zespolonego jest bardzo podobna do definicji granicy
		ciągu rzeczywistego i brzmi ona następująco:
	</p>
	
	<blockquote class="def">
		Liczba ${\color{red}{g}}\in\mathbb C$ jest granicą ciągu $w_n$ jeśli dla każdego
		${\color{blue}{\varepsilon}}>0$ prawie wszystkie wyrazy ciągu $w_n$
		są odległe od ${\color{red}{g}}$ o mniej niż ${\color{blue}{\varepsilon}}$, tzn:
		
		$$|\,w_n-{\color{red}{g}}\,| \lt {\color{blue}{\varepsilon}}$$
	</blockquote>
	
	<p>
		Geometrycznie oznacza to, że wyrazy tego ciągu są skupione w punkcie ${\color{red}{g}}$.
	</p>
	
</div>
<?php include __DIR__ . '/../math/complex-sequences/complex-sequences.php'; ?>
<div class="content">

	<h3>Własności ciągu</h3>
	
	<p>
		Liczb zespolonych nie da się porównywać, tak więc nie istnieje coś takiego jak
		monotoniczność ciągu zespolonego. Możemy mówić o monotoniczności ciągu np.
		modułów (czy wyrazy ciągu się oddalają, czy przybliżają do zera).
	</p>
	
	<p>
		Najważniejszą cechą ciągu zespolonego jest jego zbieżność, może być on zbieżny
		do jakiejś konkretnej liczby lub rozbieżny.
	</p>
	
	<p>
		Każdy ciąg zespolony $w_n$ możemy rozłożyć na dwa ciągi rzeczywiste, na przykład
		ciąg części rzeczywistych ${\color{blue}{a_n}}$ i urojonych ${\color{green}{b_n}}$:
		
		$${\color{blue}{a_n}}=\Re(w_n),\quad {\color{green}{b_n}}=\Im(w_n)$$
		
		lub ciąg modułów ${\color{orange}{m_n}}$ i argumentów ${\color{red}{k_n}}$:
		
		$${\color{orange}{m_n}}=|w_n|,\quad {\color{red}{k_n}}=\Arg(w_n)$$
		
		Oczywiście jeżeli oba ciągi $a_n$ i $b_n$ są zbieżne do liczb ${\color{blue}{a}}$
		i ${\color{green}{b}}$, to ciąg $w_n$ też jest zbieżny do granicy
		
		$$g={\color{blue}{a}}+{\color{green}{b}}i$$
		
		Podobnie z ciągami ${\color{orange}{m_n}}$ i ${\color{red}{k_n}}$: jeśli są one zbieżne do liczb ${\color{orange}{m}}$
		i ${\color{red}{k}}$, to ciąg $w_n$ też jest zbieżny do granicy
		
		$$g={\color{orange}{m}}\big(\!\cos({\color{red}{k}})+i\sin({\color{red}{k}})\big)$$
	</p>
</div>

<div class="content">
	<h3>Sfera Riemanna i nieskończoność zespolona</h3>
	
	<p>
		Istnieje wiele różnych reprezentacji liczb zespolonych. Najprostszą jest oczywiście
		płaszczyzna zespolona. Jednak dużą popularność zyskała inna reprezentacja zbioru
		liczb zespolonych, wymyślona przez Bernharda Riemanna &mdash; sfera Riemanna.
	</p>
	
	<p>
		Jest to reprezentacja wszystkich liczb zespolonych wraz z tak zwaną
		<em>nieskończonością zespoloną</em>. W przypadku liczb rzeczywistych mamy
		do czynienia z dwiema nieskończonościami: dodatnią i ujemną. Jednak na
		płaszczyźnie zespolonej możemy poruszać się w dowolnym kierunku nieskończenie daleko.
		Na sferze Riemanna, nieważne w jakim kierunku się poruszamy, i tak
		dotrzemy do tego samego punktu &mdash; nieskończoności zespolonej.
	</p>
	
</div>
<?php include dirname(__FILE__) . '/../math/riemann-sphere/riemann-sphere.php'; ?>
<div class="content">
	
	<p>
		Przekształcenie sfery Riemanna na płaszczyznę zespoloną nazywa się
		<em>projekcją stereograficzną</em>. 
	</p>
	
	<p class="next-page">
		<a href="?page=4">Następna strona: Funkcje dwóch zmiennych i funkcje zespolone</a>
	</p>
</div>
<?php
	}
}
