<?php

include_once dirname(__FILE__) .'/../iframe-helper.php';

$iframe = new IFrame('Transformacje Möbiusa', 'mobius-transformations.html', 'mobius-transformations');

function mtslide1(){ ?>
Wyobraźmy sobie kwadrat na płaszczyźnie zespolonej.
Będziemy po kolei poddawać go czterem transformacjom Möbiusa.
<?php }
$iframe->slide('mtslide1');

function mtslide2(){ ?>
Pierwszą najprostszą transformacją jest translacja. Skoro liczby zespolone traktujemy jak wektory,
dodając taką liczbę $\color{green}{t}$ do każdego punktu kwadratu $q$
przesuniemy go o korespondujący do niej wektor, otrzymując obraz $q'$ tego punktu:

$$q'=q+{\color{green}{t}}$$

<?php }
$iframe->slide('mtslide2', 3);

function mtslide3(){ ?>
Drugą transformacją jest skalowanie. Aby przeskalować nasz kwadrat,
każdy jego punkt mnożymy przez jakąś liczbę rzeczywistą ${\color{orange}{k}}$.
Na przykład dla ${\color{orange}{k}}=2$ kwadrat powiększy się dwukrotnie, dla ${\color{orange}{k}}=1/2$
pomniejszy się dwukrotnie, natomiast dla ${\color{orange}{k}}=1$ pozostanie taki sam,

$$q'={\color{orange}{k}}\cdot q$$
<?php }
$iframe->slide('mtslide3', 3);

function mtslide4(){ ?>
Kolejną transformacją jest obrót. Każdy punkt kwadratu mnożymy przez jakąś
liczbę zespoloną ${\color{red}{r}}$ o module równym $1$ (tak aby kwadrat się nie przeskalował)
i argumencie równym kątowi ${\color{red}{\alpha}}$, o który chcemy obrócić figurę,

$${\color{orange}{q'}}={\color{red}{r}}\cdot{\color{blue}{q}}$$
<?php }
$iframe->slide('mtslide4', 3);

function mtslide5(){ ?>
Oczywiście obie powyższe transformacje możemy ze sobą połączyć mnożąc
przez liczbę ${\color{blue}{p}}$ której moduł jest równy skali,
$$|{\color{blue}{p}}|={\color{orange}{k}}$$
natomiast argument równy kątowi o jaki obracamy
$$\arg{\color{blue}{p}}={\color{red}{\alpha}}$$
<?php }
$iframe->slide('mtslide5', 3);



function mtslide6(){ ?>
Ostatnią transformacją jest inwersja. Każdy punkt $q$ kwadratu odwracamy,
otrzymując jego obraz $q'$:

$$q'=\frac1q$$
<?php }
$iframe->slide('mtslide6', 1);

function mtslide7(){ ?>
Im dalej punkt $q$ znajduje się od środka, tym bliżej będzie znajdował się punkt $q'$.
Moduły punktów $q$ i $q'$ są odwrotne, natomiast ich argumenty przeciwne.
Wynika to z działań na liczbach zespolonych w postaci trygonometrycznej.
<?php }
$iframe->slide('mtslide7', 1);



function mtslide8(){ ?>
Oczywiście możemy po kolei wykonywać transformacje Möbiusa, a wynik końcowy
zawsze również będzie transformacją Möbiusa.
<?php }
$iframe->slide('mtslide8', 3);



function mtslide9(){ ?>
Aby lepiej zrozumieć wszystkie te transformacje, wyobraźmy sobie sferę Riemanna
wraz z rzutem naszego kwadratu.
<?php }
$iframe->slide('mtslide9');

function mtslide10(){ ?>
Translacja jest konsekwencją poruszania sfery.
<?php }
$iframe->slide('mtslide10', 3);

function mtslide11(){ ?>
Skalowanie jest konsekwencją oddalania sfery od podłoża.
<?php }
$iframe->slide('mtslide11', 3);

function mtslide12(){ ?>
Rotacja konsekwencją obracania sfery.
<?php }
$iframe->slide('mtslide12', 3);

function mtslide13(){ ?>
Inwersja natomiast jest konsekwencją obrotu sfery "do góry nogami".<br/>
Zauważmy, że wszystkie krzywe cały czas przecinają się pod kątami prostymi.
<?php }
$iframe->slide('mtslide13', 3);











function mtslide14(){ ?>
Okazuje się że te wszystkie cztery transformacje i ich złożenia można zapisać
prostym wzorem

$$q'=\frac{aq+b}{cq+d}$$
<?php }
$iframe->slide('mtslide14');

$iframe->render();

