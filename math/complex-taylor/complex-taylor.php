<?php

include_once dirname(__FILE__) .'/../iframe-helper.php';

$iframe = new IFrame('Szereg Taylora funkcji zespolonych', 'complex-taylor.html', 'complex-taylor');

$iframe->slide('
Wiemy już jak wygląda przybliżanie funkcji rzeczywistych
szeregiem Taylora, teraz pora na funkcje zespolone.<br/>
Mamy przed sobą funkcję $$f(z)=\sin(z)$$
');

$iframe->slide('
Pierwszy wyraz jest równy $$\sin(z)\approx z$$

Jak widzimy, przybliżenie to jest styczne do funkcji.
');

$iframe->slide('
Kolejne wyrazy coraz bardziej przybliżają funkcję.
', 2);

$iframe->slide('
Aż w końcu szereg jest zbieżny na całej płaszczyźnie.
');



$iframe->slide('
Podobnie jest z funkcją $$f(z)=\exp(z)$$

Promień zbieżności również wynosi $\infty$ i daje się
ją przybliżać na całej płaszczyźnie.
', 12);



$iframe->slide('
Jednak nie dla wszystkich funkcji promień jest nieskończony.<br/>

Przed nami funkcja $$f(z)=\frac{1}{z^2+1}$$
');

$iframe->slide('
Wyrazy szeregu Taylora coraz bardziej ją przybliżają...
', 2);

$iframe->slide('
Jednak promień wynosi zaledwie $R=1$, jest tak za sprawą
dwóch biegunów w punktach $i$ i $-i$.
', 2);

$iframe->slide('
W tym momencie widać jak kolejne wyrazy przybliżają funkcję
koliście. Natomiast na brzegach szereg zaczyna rozbiegać do nieskończoności.
', 2);




$iframe->slide('
Kolejnym przykładem jest logarytm: $$f(z)=\log(z)$$
');

$iframe->slide('
Ma on punkt osobliwy w zerze, dlatego rozwijając funkcję w szereg Taylora
wokół jedynki, promień nie może być większy od $R=1$.
', 2);

$iframe->slide('
Widzimy jak wyrazy znowu przybliżają funkcję koliście.
', 5);

$iframe->slide('
Na brzegach szereg ponownie zaczyna rozbiegać do nieskończoności.
', 4);



$iframe->slide('
Ostatnią już funkcją jest pierwiastek: $$f(z)=\sqrt{z}$$
');

$iframe->slide('
Rozwijając go w punkcie $z=1$ promień wynosi $R=1$.
', 2);

$iframe->slide('
Dzieje się tak ze względu na punkt osobliwy (a dokładniej punkt
rozgałęzienia) w zerze.
', 2);

$iframe->slide('
Podobnie jak poprzednio, poza kołem zbieżności szereg rozbiega
do nieskończoności, natomiast sama funkcja jest przybliżana koliście.
Dlatego obszar zbieżności każdego szeregu Taylora jest kołem.
', 3);


$iframe->render();

