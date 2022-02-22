import {Component, OnInit} from '@angular/core';
import {PageTemplate} from '../page-template';
import {Slide} from '../../helper/slides-helper/slides-helper.component';

@Component({
  selector: 'app-p2-intro',
  templateUrl: './p2-intro.component.html',
  styleUrls: ['./p2-intro.component.less']
})
export class P2IntroComponent implements PageTemplate, OnInit {

  complexAlgebraSlidesAdd: Array<Slide> = [
    {content: 'Zacznijmy od prostej rzeczywistej.'},
    {content: 'Na niej znajdują się wszystkie liczby rzeczywiste.' },
    {content: `Jesteśmy w stanie dodać do niej nowy wymiar &mdash; "urojony".
        W taki sposób powstaje <em>płaszczyzna zespolona</em>.` },
    {content: `Na niej znajdują się już wszystkie liczby zespolone, każda postaci
      $$\{\\color{blue}{z}}={\\color{red}{x}}+i{\\color{green}{y}}$$
      W tym momencie liczbę $\{\\color{red}{x}}+i{\\color{green}{y}}$ możemy utożsamiać z punktem
      $$({\\color{red}{x}},{\\color{green}{y}})$$`},


// Na liczbach zespolonych jesteśmy w stanie wykonywać różne operacje arytmetyczne.
//   Zacznijmy od ich sumy: wyobraźmy sobie dwie liczby zespolone: ${\color{blue}{a}}$ i ${\color{orange}{b}}$.
//
// Możemy je traktować jak wektory o początku w punkcie $0$.
//
// Wektor ${\color{orange}{b}}$ przesuwamy, tak aby jego początek znajdował się w punkcie ${\color{blue}{a}}$.
//
// Koniec tak przesuniętego wektora wyznacza nam liczbę ${\color{green}{a+b}}$.
//
//
//
// Wróćmy z powrotem do naszych punktów.
//
// Aby odjąć od siebie dwie liczby zespolone znowu traktujemy je jako wektory.
//
// Następnie znajdujemy wektor przeciwny do ${\color{orange}{b}}$.
//
// Robimy podobnie jak przy dodawaniu &mdash; przesuwamy wektor ${\color{orange}{-b}}$ tak,
//   aby jego początek znajdował się w punkcie ${\color{blue}{a}}$.
//
// Koniec tak przesuniętego wektora wyznacza nam liczbę ${\color{green}{a-b}}$.
// ];
//
//   complexAlgebraSlidesProd: Array<Slide> = [
//     {content: ''}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  getPageTitle(): string {
    return 'Wstęp do liczb zespolonych - Zbaczając z osi rzeczywistej';
  }

}
