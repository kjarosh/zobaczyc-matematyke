<?php

include_once dirname(__FILE__) .'/../iframe-helper.php';

$iframe = new IFrame('Całka oznaczona', 'real-integral.html', 'real-integral');

$iframe->slide('
Całka oznaczona funkcji ma bardzo prostą interpretację geometryczną.
');

$iframe->slide('
Dla danej funkcji ${\color{orange}{f}}(x)$, ...
');

$iframe->slide('
... jej całkę na przedziale $({\color{green}{a}};{\color{green}{b}})$
definiujemy jako pole pod tą funkcją i oznaczamy

$$\int_a^b f(x)\,dx$$
');


$iframe->slide('
Pole to jest polem <em>skierowanym</em>. Oznacza to, że
pole, które znajduje się pod krzywą ma ujemny znak.
');

$iframe->slide('
W tym wypadku na danym przedziale pola nad funkcją $x^3-x$ i
pod nią są równe, lecz to drugie posiada ujemny znak, więc
pole skierowane jest równe zeru

$$\int_{-1}^1 (x^3-x)\,dx=0$$
');


$iframe->slide('
Całkować możemy również na przedziale nieskończonym, całki
takie nazywa się <em>niewłaściwymi</em>. Nie dla wszystkich funkcji
muszą być one zbieżne.
');

$iframe->slide('
W przypadku funkcji $$f(x)=\frac{1}{x^2}$$

Całka niewłaściwa na przedziale $(1;\infty)$ jest zbieżna
i równa

$$\int_0^\infty \frac{1}{x^2}\,dx=1$$
');


$iframe->slide('
Całka niewłaściwa to również taka, gdzie w przedziale całkowania
funkcja jest nieograniczona. Na przykład funkcja $$f(x)=\frac{1}{\sqrt{x}}$$
');

$iframe->slide('
Jej całka na przedziale $(0;1)$ jest zbieżna i równa

$$\int_0^1 \frac{1}{\sqrt{x}}\,dx=2$$
');


$iframe->slide('
Przed nami funkcja $$f(x)=\sin\left(\frac{1}{x}\right)$$

W otoczeniu punktu $0$ oscyluje nie przyjmując tam żadnej wartości.
');

$iframe->slide('
Do całek zbieżnych można zaliczyć również całkę tej funkcji
na przedziale $(0;1)$. Jest ona równa

$$\int_0^1\sin\left(\frac{1}{x}\right)\,dx\approx0.50406$$
');


$iframe->render();

