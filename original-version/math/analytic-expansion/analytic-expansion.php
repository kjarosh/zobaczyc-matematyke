<?php

include_once dirname(__FILE__) .'/../iframe-helper.php';

$iframe = new IFrame('Przedłużenia analityczne', 'analytic-expansion.html', 'analytic-expansion');

$iframe->slide('
Rozwijając daną funkcję posiadającą punkty osobliwe w szereg Taylora
poznajemy tylko jej część. Aby odkryć jak ona wygląda na całej dziedzinie,
kolejno rozwijamy ją w szeregi Taylora wokół punktów znajdujących się w kole
zbieżności szeregu poprzedniego.<br/>

Na wykresach na czerwono oznaczone są punkty osobliwe.
');

$iframe->slide('
Dzięki temu, możemy zobaczyć jak wygląda <em>cała</em> funkcja zespolona.<br/>

Na prezentacji część rzeczywista funkcji $$f(z)=\log(z)$$ wraz z punktem
rozgałęzienia w zerze.
');


$iframe->slide('
Może zdarzyć się tak, że funkcja ma punkty osobliwe na jakiejś krzywej.
Na przykład ta funkcja posiada je na ujemnej półosi rzeczywistej,
gdyż promień szeregu Taylora jest nie większy niż odległość
od niej.
');

$iframe->slide('
Jest to część rzeczywista funkcji $$f(z)=\sqrt{z}$$
');


$iframe->slide('
Trochę inaczej wyglądają bieguny. Zarówno część rzeczywista jak i urojona
musi być rozbieżna do <em>obu</em> nieskończoności w tym punkcie. Oczywiście
każdy biegun ogranicza promień zbieżności szeregu Taylora.
');

$iframe->slide('
Na wykresie część urojona funkcji $$f(z)=\frac{1}{z}$$
');


$iframe->slide('
Gdy funkcja posiada więcej niż jeden punkt osobliwy (w tym wypadku
dwa bieguny), promień szeregu Taylora jest równy odległości do
najbliższego punktu.
');

$iframe->slide('
Na wykresie część urojona funkcji $$f(z)=\frac{1}{z^2+1}$$
');


$iframe->slide('
Może się okazać, że funkcja ma nieskończenie wiele biegunów.
Promień szeregu Taylora zachowuje się jak poprzednio.
');

$iframe->slide('
Na wykresie część rzeczywista funkcji $$f(z)=\operatorname{tg}(z)$$
');

$iframe->render();

