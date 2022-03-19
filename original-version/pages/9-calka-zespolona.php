<?php
/**
 * @author Kamil Jarosz
 */

class Page9{
	public function getTitle(){ return 'Całka zespolona'; }
	
	public function render(){
?>
<div class="content">
	<p class="prev-toc">
		<a href="?page=0">Spis treści</a>
	</p>
	
	<h2>Całka oznaczona</h2>
	
	<p>
		Rachunek różniczkowy i całkowy jest bezpośrednio związany z badaniem funkcji
		i analizą matematyczną. Sama całka oznaczona jest zdefiniowana jako <em>zorientowane pole
		powierzchni pod krzywą</em>. Oznacza to, iż pole powierzchni znajdujące
		się pod osią liczy się jako ujemne, natomiast nad osią jako dodatnie.
	</p>
	
	<p>
		Całkę funkcji $f(x)$ na przedziale $(a;b)$ zapisuje się następująco:
		
		$$\int_a^b f(x)\,dx$$
	</p>
	
	<p>
		Jedno z najważniejszych twierdzeń, zwane <em>podstawowym twierdzeniem
		rachunku różniczkowego i całkowego</em>, mówi o tym, że operacje różniczkowania i całkowania
		są operacjami odwrotnymi, natomiast
		
		$$\int_a^b f(x)\,dx=F(b)-F(a)$$
		
		gdzie $F(x)$ jest dowolną funkcją, której pochodna jest równa $f(x)$.
	</p>
	
</div>
<?php include dirname(__FILE__) . '/../math/real-integral/real-integral.php'; ?>
<div class="content">
	
	<h3>Całka krzywoliniowa</h3>
	
	<p>
		Całka krzywoliniowa płaska nieskierowana jest wstępem do całki zespolonej.
		Jest ona bezpośrednio związana z funkcjami dwóch zmiennych. Jak wiadomo mając
		funkcję dwóch zmiennych możemy liczyć różne rzeczy związane z całkami &mdash;
		objętość pod funkcją, pole powierzchni funkcji itp. Całka krzywoliniowa pozwala nam
		policzyć pole pomiędzy pewną krzywą a daną funkcją dwóch zmiennych.
	</p>
	
</div>
<?php include dirname(__FILE__) . '/../math/line-integral/line-integral.php'; ?>
<div class="content">
	
	<h2>Całka zespolona</h2>
	
	<p>
		Całka zespolona ma bardzo podobną interpretację do całki krzywoliniowej.
		Polega ona na tym, że szukamy pola (zespolonego) między krzywą a funkcją (zespoloną).
		Całkę zespoloną również liczy się wzdłuż pewnej krzywej.
	</p>
	
</div>
<?php //include dirname(__FILE__) . '/../math/complex-integral/complex-integral.php';
?>
<div class="content">
	
	<p>
		Funkcje holomorficzne mają pewną bardzo ważną własność, mianowicie:
	</p>
	
	<blockquote class="def">
		Całka funkcji holomorficznej $f(z)$ wzdłuż każdej krzywej zamkniętej $\gamma$ jest równa zero.
		
		$$\int_\gamma f(z)\,dz=0$$
	</blockquote>
	
	<p>
		Pociąga to za sobą wiele różnych własności całek funkcji holomorficznych.
		Do najważniejszych zalicza się taka, że całka wzdłuż dowolnej krzywej $\gamma$
		(która nie musi być zamknięta) nie zależy od drogi całkowania, lecz od punktów:
		początkowego i końcowego. Oznacza to, że jeśli dwie krzywe $\alpha,\beta$ nie są takie same,
		lecz mają wspólny początek i koniec to
		
		$$\int_\alpha f(z)\,dz=\int_\beta f(z)\,dz$$
	</p>
	
	<p>
		Poprzez powyższą własność dla funkcji holomorficznych definiuje się
		tak zwaną <em>całkę zespoloną zwyczajną</em> &mdash; analogiczną do całki
		oznaczonej. Podaje się wtedy dwa punkty $z_1,z_2$ które oznaczają początek
		i koniec dowolnej krzywej. Całkę taką zapisuje się następująco:
		
		$$\int_{z_1}^{z_2} f(z)\,dz$$
	</p>
</div>
<?php
	}
}
