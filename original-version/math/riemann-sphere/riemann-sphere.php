<?php

include_once dirname(__FILE__) .'/../iframe-helper.php';

$iframe = new IFrame('Sfera Riemanna', 'riemann-sphere.html', 'riemann-sphere');

function rsslide1(){ ?>
Przed sobą mamy płaszczyznę zespoloną.
<?php }
$iframe->slide('rsslide1');

function rsslide2(){ ?>
Ustawiamy nad nią sferę o promieniu równym $1$, tak aby
leżała na punkcie $0$.
<?php }
$iframe->slide('rsslide2');

function rsslide3(){ ?>
Punkt na sferze leżący naprzeciwko zera oznaczymy za pomocą ${\color{red}{P}}$.
<?php }
$iframe->slide('rsslide3');

function rsslide4(){ ?>
Wybieramy dowolny punkt na płaszczyźnie ${\color{blue}{a}}$...
<?php }
$iframe->slide('rsslide4');

function rsslide5(){ ?>
... i łączymy ze sobą oba punkty.
<?php }
$iframe->slide('rsslide5');

function rsslide6(){ ?>
Odcinek ten przecina sferę w punkcie ${\color{orange}{a'}}$.
<?php }
$iframe->slide('rsslide6');

function rsslide7(){ ?>
Przesuwając punkt ${\color{blue}{a}}$, położenie zmienia również ${\color{orange}{a'}}$.
<?php }
$iframe->slide('rsslide7');

function rsslide8(){ ?>
Punkt ${\color{orange}{a'}}$ jest rzutem punktu ${\color{blue}{a}}$ na sferę.
<?php }
$iframe->slide('rsslide8');

function rsslide9(){ ?>
Im dalej punkt ${\color{blue}{a}}$ znajduje się od środka, tym bardziej
punkt ${\color{orange}{a'}}$ zbliża się do ${\color{red}{P}}$.
<?php }
$iframe->slide('rsslide9');

function rsslide10(){ ?>
Innymi słowy: gdy ${\color{blue}{a}}$ dąży do nieskończoności,
${\color{orange}{a'}}$ dąży do ${\color{red}{P}}$.
<?php }
$iframe->slide('rsslide10');

function rsslide11(){ ?>
Sam punkt ${\color{red}{P}}$ uważa się za obraz nieskończoności i oznacza najczęściej jako
$${\color{red}{P}}=\tilde{\infty}$$
natomiast sam zbiór liczb zespolonych wraz z nieskończonością jako
$$\hat{\mathbb{C}}=\mathbb{C} \cup \left\{\tilde{\infty}\right\}$$
Jest to zbiór wszystkich punktów na sferze Riemanna.
<?php }
$iframe->slide('rsslide11');

function rsslide12(){ ?>
Teraz rzutujemy całą płaszczyznę na naszą sferę.
<?php }
$iframe->slide('rsslide12');

function rsslide13(){ ?>
Na niej najłatwiej jest zobaczyć granicę ciągu w nieskończoności.<br/>
Ciąg ${\color{orange}{a'_n}}$ jest obrazem ciągu ${\color{blue}{a_n}}$ na sferze Riemanna.
<?php }
$iframe->slide('rsslide13');

function rsslide14(){ ?>
Jak widać, wyrazy skupiają się w punkcie ${\color{red}{P}}$, czyli w nieskończoności.<br/>

Mówimy wtedy, że na sferze Riemanna ten ciąg jest <em>zbieżny</em> do nieskończoności, ponieważ
sama nieskończoność należy do naszego uniwersum $\hat{\mathbb{C}}$.
<?php }
$iframe->slide('rsslide14', 3);

$iframe->render();

