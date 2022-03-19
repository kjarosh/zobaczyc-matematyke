<?php
/**
 * @author Kamil Jarosz
 */

class Page8{
	public function getTitle(){ return 'Przedłużenia analityczne'; }
	
	public function render(){
?>
<div class="content">
	<p class="prev-toc">
		<a href="?page=0">Spis treści</a>
	</p>
	
	<h2>Przedłużenia analityczne</h2>
	
	<p>
		Okazuje się, że każda funkcja holomorficzna ma bardzo ważną cechę &mdash;
		znając jej pewną część, możemy ją "przedłużyć" na całą jej dziedzinę.
		Ułatwia to bardzo badanie funkcji zespolonych.
	</p>
	
	<h3>Szereg Taylora jako podstawowe narzędzie</h3>
	
	<p>
		Szereg Taylora może służyć nie tylko do przybliżania funkcji rzeczywistych
		ale i zespolonych. Przy tych drugich ma on niezwykłą właściwość &mdash;
		jego promień zbieżności jest równy odległości do najbliższego punktu osobliwego.
	</p>
	
</div>
<?php include dirname(__FILE__) . '/../math/complex-taylor/complex-taylor.php'; ?>
<div class="content">
	
	<p>
		Mając dany szereg Taylora, możemy rozwinąć funkcję wokół punktu, znajdującego
		się w kole zbieżności tego szeregu. W taki sposób otrzymać możemy kolejny szereg o
		promieniu równym, mniejszym, lub większym od poprzedniego, zależnie od położenia
		punktów osobliwych.
	</p>
	
	<p>
		Taką techniką "szukamy" kolejnych wartości funkcji. Okazuje się, że funkcje mogą
		nie być zdefiniowane na całej płaszczyźnie, lecz na danym obszarze. Wtedy brzeg
		tego obszaru musi składać się z samych punktów osobliwych. Przykładem może być szereg:
		
		$$x+x^2+x^4+x^8+x^{16}+x^{32}+...$$
		
		Dziedziną tej funkcji jest koło jednostkowe i nie da się jej przedłużyć dalej.
	</p>
	
</div>
<?php include dirname(__FILE__) . '/../math/analytic-expansion/analytic-expansion.php'; ?>
<div class="content">
	
	<p class="next-page">
		<a href="?page=9">Następna strona: Całka zespolona</a>
	</p>
</div>
<?php
	}
}
