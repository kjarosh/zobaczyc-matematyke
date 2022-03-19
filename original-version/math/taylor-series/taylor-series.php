<?php

include_once dirname(__FILE__) .'/../iframe-helper.php';

$iframe = new IFrame('Szereg Taylora', 'taylor-series.html', 'taylor-series');

$iframe->slide('
Szereg Taylora służy do przybliżania funkcji.
');

$iframe->slide('
Na przykład spróbujmy przybliżyć funkcję $$\sin(x)$$ w otoczeniu zera.
');

$iframe->slide('
Pierwszy wyraz szeregu Taylora jest następujący:
$$\sin(x)\approx x$$
');

$iframe->slide('
Potem wyrazy stają się coraz bardziej skomplikowane:
', 3);

$iframe->slide('
$$\sin(x)\approx x-\frac13x^3$$
', 0, 4);

$iframe->slide('
$$\sin(x)\approx x-\frac13x^3+\frac{1}{120}x^5$$
');

$iframe->slide('
$$\sin(x)\approx x-\frac13x^3+\frac{1}{120}x^5-\frac{1}{5040}x^7$$
');

$iframe->slide('
$$\sin(x)\approx x-\frac13x^3+\frac{1}{120}x^5-\frac{1}{5040}x^7+\frac{1}{362880}x^9$$
');

$iframe->slide('
Aż w końcu gdy ilość wyrazów dąży do nieskończoności, szereg ten
dąży do funkcji $\sin(x)$.
');

$iframe->slide('
Promień zbieżności wynosi $R=\infty$.
');



$iframe->slide('
Podobnie możemy robić z innymi funkcjami, na przykład z funkcją

$$\exp(x)=e^x$$

również w otoczeniu zera.
');

$iframe->slide('
Ma ona następujący szereg Taylora:
', 4);

$iframe->slide('
$$\exp(x)\approx 1+x$$
', 0, 5);

$iframe->slide('
$$\exp(x)\approx 1+x+\frac12x^2$$
');

$iframe->slide('
$$\exp(x)\approx 1+x+\frac12x^2+\frac16x^3$$
');

$iframe->slide('
$$\exp(x)\approx 1+x+\frac12x^2+\frac16x^3+\frac1{24}x^4$$
');

$iframe->slide('
$$\exp(x)\approx 1+x+\frac12x^2+\frac16x^3+\frac1{24}x^4+\frac1{120}x^5$$
');

$iframe->slide('
Promień zbieżności również wynosi $R=\infty$.
');



$iframe->slide('
Jednak szereg Taylora nie musi być zbieżny w każdym punkcie, na przykład dla funkcji:

$$\ln(x)$$
');

$iframe->slide('
Jej szereg wokół $x_0=1$ wygląda następująco:
', 4);

$iframe->slide('
$$\ln(x)\approx (x-1)$$
', 0, 5);

$iframe->slide('
$$\ln(x)\approx (x-1)-\frac12(x-1)^2$$
');

$iframe->slide('
$$\ln(x)\approx (x-1)-\frac12(x-1)^2+\frac13(x-1)^3$$
');

$iframe->slide('
$$\ln(x)\approx (x-1)-\frac12(x-1)^2+\frac13(x-1)^3-\frac14(x-1)^4$$
');

$iframe->slide('
$$\ln(x)\approx (x-1)-\frac12(x-1)^2+\frac13(x-1)^3-\frac14(x-1)^4+\frac15(x-1)^5$$
');

$iframe->slide('
Jak widać, promień zbieżności tego szeregu wynosi
$R=1$ gdyż jest on zbieżny dla

$$|x-1|\lt1$$
');

$iframe->slide('
Promień ten wynosi tyle, dlatego że logarytm
nie istnieje dla $x\lt0$, więc szereg nie może tam być zbieżny.<br/>
Dla punktu $x=0$ szereg jest oczywiście rozbieżny, natomiast dla punktu
$x=2$ zbieżny do granicy $\ln(2)$. Stąd ciekawa równość

$$\ln(2)=1-\frac12+\frac13-\frac14+\ldots$$
');




$iframe->slide('
Istnieją też takie funkcje, których promień zbieżności jest skończony,
lecz funkcja jest gładka na całej swojej dziedzinie. Na przykład

$$\frac{1}{x^2+1}$$
');

$iframe->slide('
Szereg tej funkcji (wokół zera) jest następujący:
', 4);

$iframe->slide('
$$\frac{1}{x^2+1}\approx 1$$
', 0, 5);

$iframe->slide('
$$\frac{1}{x^2+1}\approx 1-x^2$$
');

$iframe->slide('
$$\frac{1}{x^2+1}\approx 1-x^2+x^4$$
');

$iframe->slide('
$$\frac{1}{x^2+1}\approx 1-x^2+x^4-x^6$$
');

$iframe->slide('
$$\frac{1}{x^2+1}\approx 1-x^2+x^4-x^6+x^8$$
');

$iframe->slide('
Promień zbieżności tego szeregu wynosi
$R=1$ gdyż jest on zbieżny dla

$$|x|\lt1$$
');

$iframe->slide('
Jak okaże się potem, promień tego szeregu jest bezpośrednio związany
z pierwiastkami zespolonymi mianownika: $i$ oraz $-i$.
');


$iframe->render();

