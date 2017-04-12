<?php

include_once dirname(__FILE__) .'/../iframe-helper.php';

$iframe = new IFrame('Ciągi zespolone', 'complex-sequences.html', 'complex-sequences');

function csslide1(){ ?>
Klasyczna reprezentacja ciągu jest bardzo intuicyjna, oś pozioma jest osią argumentów (czyli indeksów),
natomiast oś pionowa jest osią wartości. Granicę ciągu oznacza się wtedy poziomą linią.
<?php }
$iframe->slide('csslide1');

function csslide2(){ ?>
Aby jednak łatwo wyobrazić sobie ciąg dwuwymiarowy, należy pozbyć się jednej z osi. Jak widać
oś indeksów nie wnosi zbyt wiele, dlatego ją usuwamy.<br/>
Sprawia to jednak, iż czasem nie jesteśmy w stanie zobaczyć kolejności wyrazów ciągu.
Zamiast tego, można użyć kolorów lub połączyć punkty ze sobą, jednak
w większości przypadków nie jest to konieczne.
<?php }
$iframe->slide('csslide2');

function csslide3(){ ?>
W taki sposób ciąg mieści się tylko na jednej osi. Granicę możemy łatwo zauważyć jako
"skupienie" dużej ilości wyrazów ciągu.
<?php }
$iframe->slide('csslide3');


function csslide4(){ ?>
Używając takiej reprezentacji najłatwiej jest wyobrazić sobie ciąg liczb zespolonych,
jako ciąg punktów na płaszczyźnie. Analogicznie jak ciąg liczb rzeczywistych był
ciągiem punktów na prostej.<br/>

Weźmy pod uwagę dowolną liczbę zespoloną $\color{red}{q}$.
<?php }
$iframe->slide('csslide4');

function csslide5(){ ?>
Na rysunku obok leży ona na tak zwanym okręgu jednostkowym, czyli takim, którego
środek znajduje się w zerze i promień wynosi $1$.
<?php }
$iframe->slide('csslide5');

function csslide6(){ ?>
Rysujemy kilkadziesiąt pierwszych wyrazów ciągu
$${\color{blue}{a_n}}={\color{red}{q}}^n$$

Oczywiście dla rzeczywistego ${\color{red}{q}}$, mniejszego od $1$ ciąg ten
ma granicę równą zero.<br/>

Co jednak gdy ${\color{red}{q}}$ będzie liczbą zespoloną?
<?php }
$iframe->slide('csslide6');

function csslide7(){ ?>
Okazuje się, że ciąg ten jest zbieżny do zera dla <em>każdego</em> $\color{red}{q}$,
które leży wewnątrz koła jednostkowego, tzn. $$|{\color{red}{q}}|&lt;1$$
<?php }
$iframe->slide('csslide7');

function csslide8(){ ?>
Nieważne jak daleko od liczby $1$, jego granica zawsze będzie wynosić $0$.
<?php }
$iframe->slide('csslide8', 2);

function csslide9(){ ?>
Jednak co jeśli liczba ${\color{red}{q}}$ leży na zewnątrz okręgu jednostkowego?<br/>
Na przykład, gdy ${\color{red}{q}}$ jest liczbą rzeczywistą większą od $1$, ciąg ten jest rozbieżny do $\infty$.
<?php }
$iframe->slide('csslide9');

function csslide10(){ ?>
Zachowuje się on podobnie dla każdej liczby zespolonej leżącej na zewnątrz
koła jednostkowego $$|{\color{red}{q}}|&gt;1$$
<?php }
$iframe->slide('csslide10', 1);

function csslide11(){ ?>
Okazuje się, że gdy $$|{\color{red}{q}}|=1$$
ciąg ten znajduje się wtedy w całości na okręgu jednostkowym i gdy ${\color{red}{q}}$ jest różne od $1$ jest on rozbieżny,
okrążając okrąg jednostkowy w nieskończoność.
<?php }
$iframe->slide('csslide11');

function csslide12(){ ?>
Gdy ${\color{red}{q}}=-1$, otrzymujemy słynny rozbieżny ciąg

$${\color{blue}{a_n}}=(-1)^n$$
<?php }
$iframe->slide('csslide12');

function csslide13(){ ?>
Oczywiście gdy ${\color{red}{q}}= 1$, wszystkie jego wyrazy są równe $1$, dlatego też jest on zbieżny do $1$.
<?php }
$iframe->slide('csslide13');

function csslide14(){ ?>
Ciągi zespolone nie zawsze muszą być zbieżne do jakiejś liczby rzeczywistej.
<?php }
$iframe->slide('csslide14');

function csslide15(){ ?>
Ten konkretny jest zbieżny do liczby zespolonej wynoszącej w przybliżeniu
$$0.318132... + 1.33724...\,i$$
jeśli tylko jego wyraz początkowy ${\color{red}{q}}$ znajduje się powyżej osi rzeczywistej.
<?php }
$iframe->slide('csslide15', 1);

function csslide16(){ ?>
Jeśli natomiast ${\color{red}{q}}$ jest poniżej osi rzeczywistej, jego granica jest równa
$$0.318132... - 1.33724...\,i$$
<?php }
$iframe->slide('csslide16', 1);

$iframe->render();

