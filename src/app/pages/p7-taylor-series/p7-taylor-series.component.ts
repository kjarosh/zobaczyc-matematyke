import {Component, OnInit} from '@angular/core';
import {PageTemplate} from '../page-template';
import {Slide} from '../../helper/slides-helper/slides-helper.component';

@Component({
  selector: 'app-p7-taylor-series',
  templateUrl: './p7-taylor-series.component.html',
  styleUrls: ['./p7-taylor-series.component.less']
})
export class P7TaylorSeriesComponent implements PageTemplate, OnInit {
  taylorSeriesSlides: Array<Slide> = [
    {content: `Szereg Taylora służy do przybliżania funkcji.`},
    {content: `Na przykład spróbujmy przybliżyć funkcję $$\\sin(x)$$ w otoczeniu zera.`},
    {
      content: `Pierwszy wyraz szeregu Taylora jest następujący:
      $$\\sin(x)\\approx x$$`
    },
    {
      content: `Potem wyrazy stają się coraz bardziej skomplikowane:
      $$\\sin(x)\\approx x-\\frac13x^3$$`
    },
    {
      content: `Potem wyrazy stają się coraz bardziej skomplikowane:
      $$\\sin(x)\\approx x-\\frac13x^3+\\frac{1}{120}x^5$$`
    },
    {
      content: `Potem wyrazy stają się coraz bardziej skomplikowane:
      $$\\sin(x)\\approx x-\\frac13x^3+\\frac{1}{120}x^5-\\frac{1}{5040}x^7$$`
    },
    {
      content: `Potem wyrazy stają się coraz bardziej skomplikowane:
      $$\\sin(x)\\approx x-\\frac13x^3+\\frac{1}{120}x^5-\\frac{1}{5040}x^7+\\frac{1}{362880}x^9$$`
    },
    {
      content: `Aż w końcu gdy ilość wyrazów dąży do nieskończoności, szereg ten
      dąży do funkcji $\\sin(x)$.`
    },
    {content: `Promień zbieżności wynosi $R=\\infty$.`},
    {
      content: `Podobnie możemy robić z innymi funkcjami, na przykład z funkcją
      $$\\exp(x)=e^x$$
      również w otoczeniu zera.`
    },
    {
      content: `Ma ona następujący szereg Taylora:
      $$\\exp(x)\\approx 1+x$$`
    },
    {
      content: `Ma ona następujący szereg Taylora:
      $$\\exp(x)\\approx 1+x+\\frac12x^2$$`
    },
    {
      content: `Ma ona następujący szereg Taylora:
      $$\\exp(x)\\approx 1+x+\\frac12x^2+\\frac16x^3$$`
    },
    {
      content: `Ma ona następujący szereg Taylora:
      $$\\exp(x)\\approx 1+x+\\frac12x^2+\\frac16x^3+\\frac1{24}x^4$$`
    },
    {
      content: `Ma ona następujący szereg Taylora:
      $$\\exp(x)\\approx 1+x+\\frac12x^2+\\frac16x^3+\\frac1{24}x^4+\\frac1{120}x^5$$`
    },
    {content: `Promień zbieżności również wynosi $R=\\infty$.`},
    {
      content: `Jednak szereg Taylora nie musi być zbieżny w każdym punkcie, na przykład dla funkcji:
      $$\\ln(x)$$`
    },
    {
      content: `Jej szereg wokół $x_0=1$ wygląda następująco:
      $$\\ln(x)\\approx (x-1)$$`
    },
    {
      content: `Jej szereg wokół $x_0=1$ wygląda następująco:
      $$\\ln(x)\\approx (x-1)-\\frac12(x-1)^2$$`
    },

    {
      content: `Jej szereg wokół $x_0=1$ wygląda następująco:
      $$\\ln(x)\\approx (x-1)-\\frac12(x-1)^2+\\frac13(x-1)^3$$`
    },
    {
      content: `Jej szereg wokół $x_0=1$ wygląda następująco:
      $$\\ln(x)\\approx (x-1)-\\frac12(x-1)^2+\\frac13(x-1)^3-\\frac14(x-1)^4$$`
    },
    {
      content: `Jej szereg wokół $x_0=1$ wygląda następująco:
      $$\\ln(x)\\approx (x-1)-\\frac12(x-1)^2+\\frac13(x-1)^3-\\frac14(x-1)^4+\\frac15(x-1)^5$$`
    },
    {
      content: `Jak widać, promień zbieżności tego szeregu wynosi
      $R=1$ gdyż jest on zbieżny dla
      $$|x-1|\\lt1$$`
    },
    {
      content: `Promień ten wynosi tyle, dlatego że logarytm
      nie istnieje dla $x\\lt0$, więc szereg nie może tam być zbieżny.<br/>
      Dla punktu $x=0$ szereg jest oczywiście rozbieżny, natomiast dla punktu
      $x=2$ zbieżny do granicy $\\ln(2)$. Stąd ciekawa równość
      $$\\ln(2)=1-\\frac12+\\frac13-\\frac14+\\ldots$$`
    },
    {
      content: `Istnieją też takie funkcje, których promień zbieżności jest skończony,
      lecz funkcja jest gładka na całej swojej dziedzinie. Na przykład
      $$\\frac{1}{x^2+1}$$`
    },
    {
      content: `Szereg tej funkcji (wokół zera) jest następujący:
      $$\\frac{1}{x^2+1}\\approx 1$$`
    },
    {
      content: `Szereg tej funkcji (wokół zera) jest następujący:
      $$\\frac{1}{x^2+1}\\approx 1-x^2$$`
    },
    {
      content: `Szereg tej funkcji (wokół zera) jest następujący:
      $$\\frac{1}{x^2+1}\\approx 1-x^2+x^4$$`
    },
    {
      content: `Szereg tej funkcji (wokół zera) jest następujący:
      $$\\frac{1}{x^2+1}\\approx 1-x^2+x^4-x^6$$`
    },
    {
      content: `Szereg tej funkcji (wokół zera) jest następujący:
      $$\\frac{1}{x^2+1}\\approx 1-x^2+x^4-x^6+x^8$$`
    },
    {
      content: `Promień zbieżności tego szeregu wynosi
      $R=1$ gdyż jest on zbieżny dla
      $$|x|\\lt1$$`
    },
    {
      content: `Jak okaże się potem, promień tego szeregu jest bezpośrednio związany
      z pierwiastkami zespolonymi mianownika: $i$ oraz $-i$.`
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  getPageTitle(): string {
    return $localize`:@@fe96353eb2706d36639339a5ce191c4d79659725:Szereg Taylora`;
  }
}
