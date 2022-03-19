<?php

include_once dirname(__FILE__) .'/../iframe-helper.php';

$iframe = new IFrame('Modelowanie Funkcji 3D', 'func-model.html', 'func-model');

$iframe->slide('
Aby lepiej zrozumieć wykres funkcji dwóch zmiennych,
weźmy pod uwagę jakąś funkcję z parametrem.
');

$iframe->slide('
Na przykład

$$f(x)=\frac{(m+2)}{8}x^2-4mx+8m^2-3$$

gdzie $m$ jest parametrem.
');

$iframe->slide('
Gdy $m$ się zmienia wykres funkcji również staje się inny.
');

$iframe->slide('
Kolejną funkcją może być np.:

$$g(x)=mx^3+x$$
');



$iframe->slide('
Teraz, wyobraźmy sobie taki poruszający się wykres, ale w trzecim wymiarze
(czyli po osi $z$). Jego pozycja w tej osi jest równa parametrowi $m$.
', 1);

$iframe->slide('
Wykres ten "modeluje" nam powierzchnię trójwymiarową.
Parametr $m$ jest wtedy uważany za drugą zmienną.
', 1);


$iframe->slide('
Istnieje wiele przykładów funkcji wielu zmiennych.
');

$iframe->slide('
Jednym z nich jest powierzchnia

$$f(x, y)=\sin(x)+\cos(y)$$
');

$iframe->slide('
Lub część wielomianu

$$f(x, y)=xy^2$$
');

$iframe->slide('
Jednym z ważniejszych przykładów funkcji wielu zmiennych
jest tak zwane "siodło":

$$f(x, y)=y^2-x^2$$
');



$iframe->slide('
Oczywiście można pójść krok dalej i wprowadzić pojęcie funkcji
dwóch zmiennych <em>z parametrem</em>. Wykres będzie wtedy
zmieniał się zależnie od parametru.
');

$iframe->slide('
Na przykład

$$f(x,y)=y^2-mx^2$$

Na wykresie parametr $m$ przebiega przedział $[-1;1]$.
');

$iframe->slide('
Lub trochę bardziej skomplikowany, lecz bardzo ciekawy przykład:

$$f(x, y)=\frac{80\sin(x^2+y^2 - m) + 40}{x^2+y^2+50}$$

<em>Wzory powyższych funkcji są uproszczone &mdash; pominięte zostały
stałe skalujące wykres.</em>
');


$iframe->render();

