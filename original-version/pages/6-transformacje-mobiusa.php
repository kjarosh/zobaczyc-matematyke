<?php
/**
 * @author Kamil Jarosz
 */

class Page6{
	public function getTitle(){ return 'Transformacje Möbiusa'; }
	
	public function render(){
?>
<div class="content">
	<p class="prev-toc">
		<a href="?page=0">Spis treści</a>
	</p>
	
	<h2>Transformacje Möbiusa</h2>
	
	<p>
		Niemiecki matematyk August Möbius zajmował się badaniem pewnej funkcji
		
		$$f(z)=\frac{az+b}{cz+d}$$
		
		Jest to oczywiście funkcja homograficzna, której dziedzina jest równa
		
		$$\mathbb{R}\setminus\left\{-\tfrac{d}{c}\right\}$$
		
		natomiast zbiór wartości
		
		$$\mathbb{R}\setminus\left\{\tfrac{a}{c}\right\}$$
	</p>
	
	<p>
		Oczywiście funkcję tę można rozszerzyć na zbiór liczb zespolonych
		(przyjmując, że $a,b,c,d$ mogą być również liczbami zespolonymi). Okazuje się wtedy, że funkcja ta posiada wiele ważnych własności.
	</p>
	
	<p>
		Po pierwsze &mdash; funkcja homograficzna jest różnowartościowa,
		tzn. nie istnieją takie dwie różne liczby zespolone $z_1$ i $z_2$ dla których
		
		$$f(z_1)=f(z_2)$$
		
		Po drugie &mdash; złożenie dwóch funkcji homograficznych jest nadal funkcją
		homograficzną. Oznacza to, że mając dwie funkcje homograficzne $g(z)$ i $h(z)$, funkcja
		$g(h(z))$ jest również homograficzna.
	</p>
	
	<h3>Składanie homografu</h3>
	
	<p>
		Zakładając, że $c\ne0$ zapiszmy teraz naszą funkcję $f$ w trochę inny sposób, wykonując podstawowe dzielenie wielomianów:
		
		$$f(z)={\color{blue}{\frac{bc-ad}{c^2}}}\cdot\frac{1}{z+{\color{red}{\frac{d}{c}}}} + {\color{green}{\frac{a}{c}}}$$
		
		Jak widać, funkcję $f$ możemy rozłożyć na poszczególne funkcje składowe (zwane transformacjami):
		
		$$f_1(z)=z+{\color{red}{\frac{d}{c}}}$$
		$$f_2(z)=\frac1z$$
		$$f_3(z)={\color{blue}{\frac{bc-ad}{c^2}}}z$$
		$$f_4(z)=z+{\color{green}{\frac{a}{c}}}$$
		
		Ich kolejne złożenia są następujące:
		
		$$f_2(f_1(z))=\frac{1}{z+{\color{red}{\frac{d}{c}}}}$$
		$$f_3(f_2(f_1(z)))={\color{blue}{\frac{bc-ad}{c^2}}}\cdot \frac{1}{z+{\color{red}{\frac{d}{c}}}}$$
		$$f_4(f_3(f_2(f_1(z))))={\color{blue}{\frac{bc-ad}{c^2}}}\cdot \frac{1}{z+{\color{red}{\frac{d}{c}}}}+{\color{green}{\frac{a}{c}}}$$
		
		Aż w końcu funkcja $f$ przybiera postać
		
		$$f(z)=f_4(f_3(f_2(f_1(z))))$$
		
		Tak więc każdy homograf składa się z trzech podstawowych transformacji: przesunięcia ($f_1$,&nbsp;$f_4$),
		skalowania ($f_3$) i inwersji ($f_2$). W przypadku liczb zespolonych mnożenie przez liczbę nie jest
		tym samym co skalowanie &mdash; oprócz skalowania może występować również rotacja (czyli obrót),
		dlatego wyróżnia się wtedy <em>cztery</em> transformacje. Wszystkie powyższe transformacje
		i ich złożenia nazywamy <em>transformacjami Möbiusa</em>.
	</p>
	
</div>
<?php include __DIR__ . '/../math/mobius-transformations/mobius-transformations.php'; ?>
<div class="content">
	
	<p>
		W przypadku sfery Riemanna definiuje się dwie dodatkowe wartości funkcji,
		mianowicie:
		
		$$f(\tilde{\infty})=\frac{a}{c}$$
		
		$$f(-d/c)=\tilde{\infty}$$
		
		Tak aby dziedziną i zbiorem wartości funkcji $f$ był cały zbiór $\hat{\mathbb{C}}$ &mdash;
		przekształca ona wtedy całą sferę Riemanna na siebie.
	</p>
	
	<h3>Odwzorowanie równokątne</h3>
	
	<p>
		Odwzorowanie równokątne (inaczej konforemne) w analizie zespolonej jest pewnym odwzorowaniem
		(na przykład transformacją Möbiusa), które zachowuje kąty.
		
		Oznacza to, że jeśli dwie dowolne krzywe przecinają się pod kątem $\alpha$ to jeśli
		obie te krzywe poddamy danemu odwzorowaniu, będą one przecinały się również pod kątem $\alpha$.
		
		Zachowanie kątów jest bardzo ważną własnością funkcji zespolonych.
	</p>
	
	<p class="next-page">
		<a href="?page=7">Następna strona: Szereg Taylora</a>
	</p>
</div>
<?php
	}
}
