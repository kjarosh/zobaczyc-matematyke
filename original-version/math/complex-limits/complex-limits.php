<?php

include_once dirname(__FILE__) .'/../iframe-helper.php';

$iframe = new IFrame('Granice funkcji zespolonych', 'complex-limits.html', 'complex-limits');

$iframe->slide('
Granice funkcji zespolonych są bardzo istotne w analizie zespolonej.
Aby je sobie lepiej wyobrazić weźmy pod uwagę funkcję

$$f(z)=\frac{\sin(z)}{z}$$

Na wykresie widnieje część rzeczywista tej funkcji.
');

$iframe->slide('
Dla $z=0$ funkcja ta nie jest określona, jednak granica w tym punkcie istnieje,
gdyż $f(z)$ ma granicę równą $1$ dla każdego ciągu zbieżnego do $0$.<br/>

Taki punkt jest również osobliwy, gdyż funkcja nie jest tam zdefiniowana.
Jednak jeśli istnieje granica tak jak tutaj, można osobliwość tę usunąć przyjmując
$f(0)=1$. Dzięki temu funkcja jest ciągła w punkcie $z=0$ i różniczkowalna.
Punkt taki nazywa się <em>punktem osobliwym z osobliwością usuwalną</em>.
');



$iframe->slide('
Kolejnym przykładem jest funkcja $$f(z)=\sqrt{z}$$

Jej część urojona jest nieciągła na ujemnej półprostej rzeczywistej.
');

$iframe->slide('
Jednak mimo to, granica tam istnieje i jest równa $0$.
');


$iframe->slide('
Trochę inaczej zachowuje się część urojona logarytmu i sam jej punkt
rozgałęzienia.
');

$iframe->slide('
Granica w zerze nie istnieje gdyż zależnie od drogi, po jakiej się
zbliżamy do punktu $0$, wartość granicy się zmienia.<br/>

Oczywiście granica części rzeczywistej w tym punkcie jest
równa $-\infty$.
');



$iframe->slide('
Gdy mamy do czynienia z funkcją, której część rzeczywista lub urojona
rozbiega do nieskończoności, zależnie od tego czy mówimy o zbiorze
$\mathbb{C}$ lub $\hat{\mathbb{C}}$ granica ta jest rozbieżna lub
odpowiednio zbieżna do $\tilde{\infty}$.<br/>

Oczywiście druga część funkcji musi być zbieżna do jakiejś liczby.
W innym przypadku granica nie istnieje (na przyład w przypadku logarytmu).
');

$iframe->slide('
Jak widać na wykresie granica zmienia się pomiędzy $\infty$ a $-\infty$.
Na rysunku można zauważyć, że w pewnych dwóch kierunkach, gdy granica
zmienia znak, jest ona równa $0$. Jednak granica części rzeczywistej
jest wtedy równa nieskończoności.
');


$iframe->render();

