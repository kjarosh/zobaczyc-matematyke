import {Component, OnInit} from '@angular/core';
import {PageTemplate} from '../page-template';

@Component({
  selector: 'app-p9-complex-integral',
  templateUrl: './p9-complex-integral.component.html',
  styleUrls: ['./p9-complex-integral.component.less']
})
export class P9ComplexIntegralComponent implements PageTemplate, OnInit {
  realIntegralSlides: any = [
    {content: `Całka oznaczona funkcji ma bardzo prostą interpretację geometryczną.`},
    {content: `Dla danej funkcji $\{\\color{orange}{f}}(x)$, ...`},
    {
      content: `... jej całkę na przedziale $({\\color{green}{a}};{\\color{green}{b}})$
      definiujemy jako pole pod tą funkcją i oznaczamy
      $$\\int_a^b f(x)\\,dx$$`
    },
    {
      content: `Pole to jest polem <em>skierowanym</em>. Oznacza to, że
      pole, które znajduje się pod krzywą ma ujemny znak.`
    },
    {
      content: `W tym wypadku na danym przedziale pola nad funkcją $x^3-x$ i
      pod nią są równe, lecz to drugie posiada ujemny znak, więc
      pole skierowane jest równe zeru
      $$\\int_{-1}^1 (x^3-x)\\,dx=0$$`
    },
    {
      content: `Całkować możemy również na przedziale nieskończonym, całki
      takie nazywa się <em>niewłaściwymi</em>. Nie dla wszystkich funkcji
      muszą być one zbieżne.`
    },
    {
      content: `W przypadku funkcji $$f(x)=\\frac{1}{x^2}$$
      Całka niewłaściwa na przedziale $(1;\\infty)$ jest zbieżna
      i równa
      $$\\int_0^\\infty \\frac{1}{x^2}\\,dx=1$$`
    },
    {
      content: `Całka niewłaściwa to również taka, gdzie w przedziale całkowania
      funkcja jest nieograniczona. Na przykład funkcja $$f(x)=\\frac{1}{\\sqrt{x}}$$`
    },
    {
      content: `Jej całka na przedziale $(0;1)$ jest zbieżna i równa
      $$\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx=2$$`
    },
    {
      content: `Przed nami funkcja $$f(x)=\\sin\\left(\\frac{1}{x}\\right)$$
      W otoczeniu punktu $0$ oscyluje nie przyjmując tam żadnej wartości.`
    },
    {
      content: `Do całek zbieżnych można zaliczyć również całkę tej funkcji
      na przedziale $(0;1)$. Jest ona równa
      $$\\int_0^1\\sin\\left(\\frac{1}{x}\\right)\\,dx\\approx0.50406$$`
    },
  ];
  lineIntegralSlides: any = [
    {content: `Całka krzywoliniowa płaska nieskierowana ma bardzo prostą interpretację geometryczną.`},
    {content: `Wyobraźmy sobie pewną funkcję dwóch zmiennych $f(x,y)$.`},
    {
      content: `Oraz pewną krzywą $\{\\color{green}{C}}$ wraz z rzutem
      $\{\\color{red}{C'}}$ na naszą funkcję.`,
      width: 2,
    },
    {
      content: `Wartość tej całki równa jest polu pomiędzy krzywą
      $\{\\color{green}{C}}$ a jej rzutem $\{\\color{red}{C'}}$.<br/>
      Oznacza się ją w następujący sposób:
      $$\\int_{C} f(x,y)\\,dC$$
      lub
      $$\\int_{C} f(x,y)\\,\\sqrt{{dx}^2+{dy}^2}$$`
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  getPageTitle(): string {
    return $localize`:@@560152aacc56867dd132d5cd84aefdd91a97262b:Całka zespolona`;
  }
}
