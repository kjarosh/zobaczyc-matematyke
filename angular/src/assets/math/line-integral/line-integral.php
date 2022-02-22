<?php

include_once dirname(__FILE__) .'/../iframe-helper.php';

$iframe = new IFrame('Całka krzywoliniowa płaska nieskierowana', 'line-integral.html', 'line-integral');

$iframe->slide('
Całka krzywoliniowa płaska nieskierowana ma bardzo prostą interpretację geometryczną.
');

$iframe->slide('
Wyobraźmy sobie pewną funkcję dwóch zmiennych $f(x,y)$.
');

$iframe->slide('
Oraz pewną krzywą ${\color{green}{C}}$ wraz z rzutem
${\color{red}{C\'}}$ na naszą funkcję.
', 1);

$iframe->slide('
Wartość tej całki równa jest polu pomiędzy krzywą
${\color{green}{C}}$ a jej rzutem ${\color{red}{C\'}}$.<br/>
Oznacza się ją w następujący sposób:

$$\int_{C} f(x,y)\,dC$$

lub

$$\int_{C} f(x,y)\,\sqrt{{dx}^2+{dy}^2}$$
');


$iframe->render();

