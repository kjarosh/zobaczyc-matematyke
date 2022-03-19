<?php

include_once dirname(__FILE__) .'/../iframe-helper.php';

if(!isset($module)){
	$module = 'all';
}

$title = 'Działania na liczbach zespolonych';
switch($module){
	case 'add': $title = 'Dodawanie i odejmowanie liczb zespolonych'; break;
	case 'prod': $title = 'Mnożenie i dzielenie liczb zespolonych'; break;
}

$iframe = new IFrame($title, 'complex-algebra-iframe.php?module=' . $module, 'complex-algebra');

if($module == 'all' || $module == 'add'):

$iframe->slide('
Zacznijmy od prostej rzeczywistej.
');

$iframe->slide('
Na niej znajdują się wszystkie liczby rzeczywiste.
');

$iframe->slide('
Jesteśmy w stanie dodać do niej nowy wymiar &mdash; "urojony". W taki sposób powstaje <em>płaszczyzna zespolona</em>.
');

$iframe->slide('
Na niej znajdują się już wszystkie liczby zespolone, każda postaci $${\color{blue}{z}}={\color{red}{x}}+i{\color{green}{y}}$$

W tym momencie liczbę ${\color{red}{x}}+i{\color{green}{y}}$ możemy utożsamiać z punktem
$$({\color{red}{x}},{\color{green}{y}})$$
');


$iframe->slide('
Na liczbach zespolonych jesteśmy w stanie wykonywać różne operacje arytmetyczne.
Zacznijmy od ich sumy: wyobraźmy sobie dwie liczby zespolone: ${\color{blue}{a}}$ i ${\color{orange}{b}}$.
');

$iframe->slide('
Możemy je traktować jak wektory o początku w punkcie $0$.
');

$iframe->slide('
Wektor ${\color{orange}{b}}$ przesuwamy, tak aby jego początek znajdował się w punkcie ${\color{blue}{a}}$.
');

$iframe->slide('
Koniec tak przesuniętego wektora wyznacza nam liczbę ${\color{green}{a+b}}$.
');



$iframe->slide('
Wróćmy z powrotem do naszych punktów.
');

$iframe->slide('
Aby odjąć od siebie dwie liczby zespolone znowu traktujemy je jako wektory.
');

$iframe->slide('
Następnie znajdujemy wektor przeciwny do ${\color{orange}{b}}$.
');

$iframe->slide('
Robimy podobnie jak przy dodawaniu &mdash; przesuwamy wektor ${\color{orange}{-b}}$ tak,
aby jego początek znajdował się w punkcie ${\color{blue}{a}}$.
');

$iframe->slide('
Koniec tak przesuniętego wektora wyznacza nam liczbę ${\color{green}{a-b}}$.
');

endif;

if($module == 'all' || $module == 'prod'):

$iframe->slide('
Aby wyobrazić sobie mnożenie i dzielenie należy wprowadzić pojęcie <em>postaci trygonometrycznej</em> liczby zespolonej.
Weźmy pod uwagę dowolną liczbę zespoloną ${\color{red}{a}}$.
');

$iframe->slide('
Oznaczmy przez ${\color{blue}{r}}$ jej <em>moduł</em> czyli odległość od punktu $0$, ...
');

$iframe->slide('
... natomiast przez ${\color{green}{\theta}}$ <em>argument</em> czyli kąt pomiędzy tą liczbą a osią rzeczywistą.
Liczba ${\color{red}{a}}$ jest wtedy równa
$${\color{red}{a}}={\color{blue}{r}}\cdot(\cos{\color{green}{\theta}}+i\sin{\color{green}{\theta}})$$
');

$iframe->slide('
Moduł liczby ${\color{red}{a}}$ oznacza się jako
$$|{\color{red}{a}}|=\abs {\color{red}{a}}={\color{blue}{r}}$$
natomiast jej argument jako
$$\arg{\color{red}{a}}={\color{green}{\theta}}$$

Każda liczba zespolona ma nieskończenie wiele argumentów,
dlatego przywykło się oznaczać <em>argument główny</em> tej liczby,
czyli taki, który należy do przedziału $(-\pi;\pi\rangle$ jako $\Arg{\color{red}{a}}$.
');



$iframe->slide('
Wróćmy znowu do naszych punktów ${\color{green}{a}}$ i ${\color{orange}{b}}$.

$${\color{green}{a}}={\color{green}{r}} \cdot (\cos{\color{green}{\alpha}}+i\sin{\color{green}{\alpha}})$$
$${\color{orange}{b}}={\color{orange}{s}} \cdot (\cos{\color{orange}{\beta}}+i\sin{\color{orange}{\beta}})$$
');

$iframe->slide('
Aby je przez siebie pomnożyć, mnożymy ich moduły i dodajemy argumenty.

$${\color{green}{a}} \cdot {\color{orange}{b}}=
{\color{green}{r}} \cdot {\color{orange}{s}} \cdot
\big(\cos({\color{green}{\alpha}} + {\color{orange}{\beta}}) +
i\sin({\color{green}{\alpha}} + {\color{orange}{\beta}})\big)$$
');

$iframe->slide('
Geometrycznie oznacza to, iż obracamy i skalujemy trójkąt $\triangle_a$ o wierzchołkach ${\color{green}{a}}$,
$0$ i $1$ tak, aby jego wierzchołek pokrył się z liczbą, przez którą mnożymy.
');

$iframe->slide('
Zauważmy, że trójkąty: $\triangle_a$ i ten aktualnie wyświetlany są podobne w skali $|{\color{orange}{b}}|$,
natomiast obracając trójkąt $\triangle_a$ dodajemy argument liczby ${\color{orange}{b}}$.
Tak znajdujemy iloczyn ${\color{green}{a}} \cdot {\color{orange}{b}}$.
');

$iframe->slide('
Na przykład mnożąc liczbę ${\color{green}{a}}$ przez siebie otrzymujemy ${\color{blue}{a^2}}$.
');



$iframe->slide('
Podczas dzielenia również korzysta się z podobieństwa trójkątów.
');

$iframe->slide('
Aby podzielić przez siebie dwie liczby, dzielimy ich moduły i odejmujemy argumenty:

$$\frac{\color{green}{a}}{\color{orange}{b}}=
\frac{\color{green}{r}}{\color{orange}{s}} \cdot
\big(\cos({\color{green}{\alpha}} - {\color{orange}{\beta}}) +
i\sin({\color{green}{\alpha}} - {\color{orange}{\beta}})\big)$$
');

$iframe->slide('
Geometrycznie oznacza to, iż obracamy i skalujemy trójkąt $\triangle_b$ o wierzchołkach ${\color{orange}{b}}$,
$0$ i $1$ tak, aby jego wierzchołek pokrył się z liczbą którą dzielimy.<br/>
Tak znajdujemy iloraz $$\frac{\color{green}{a}}{\color{orange}{b}}$$
');

$iframe->slide('
Na przykład dzieląc liczbę $1$ przez ${\color{orange}{b}}$ otrzymujemy liczbę odwrotną $$\frac{1}{\color{orange}{b}}$$
');

endif;

$iframe->render();
