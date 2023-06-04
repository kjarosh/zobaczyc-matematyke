import {Component, OnInit} from '@angular/core';
import {PageTemplate} from '../page-template';
import {Slide} from '../../helper/slides-helper/slides-helper.component';

@Component({
  selector: 'app-p5-limits-derivative',
  templateUrl: './p5-limits-derivative.component.html',
  styleUrls: ['./p5-limits-derivative.component.less']
})
export class P5LimitsDerivativeComponent implements PageTemplate, OnInit {
  complexLimitsSlides: Array<Slide> = [
    {
      content: `Granice funkcji zespolonych są bardzo istotne w analizie zespolonej.
      Aby je sobie lepiej wyobrazić weźmy pod uwagę funkcję
      $$f(z)=\\frac{\\sin(z)}{z}$$
      Na wykresie widnieje część rzeczywista tej funkcji.`
    },
    {
      content: `Dla $z=0$ funkcja ta nie jest określona, jednak granica w tym punkcie istnieje,
      gdyż $f(z)$ ma granicę równą $1$ dla każdego ciągu zbieżnego do $0$.<br/>
      Taki punkt jest również osobliwy, gdyż funkcja nie jest tam zdefiniowana.
      Jednak jeśli istnieje granica tak jak tutaj, można osobliwość tę usunąć przyjmując
      $f(0)=1$. Dzięki temu funkcja jest ciągła w punkcie $z=0$ i różniczkowalna.
      Punkt taki nazywa się <em>punktem osobliwym z osobliwością usuwalną</em>.`
    },
    {
      content: `Kolejnym przykładem jest funkcja $$f(z)=\\sqrt{z}$$
      Jej część urojona jest nieciągła na ujemnej półprostej rzeczywistej.`
    },
    {content: `Jednak mimo to, granica tam istnieje i jest równa $0$.`},
    {
      content: `Trochę inaczej zachowuje się część urojona logarytmu i sam jej punkt
      rozgałęzienia.`
    },
    {
      content: `Granica w zerze nie istnieje gdyż zależnie od drogi, po jakiej się
      zbliżamy do punktu $0$, wartość granicy się zmienia.<br/>
      Oczywiście granica części rzeczywistej w tym punkcie jest
      równa $-\\infty$.`
    },
    {
      content: `Gdy mamy do czynienia z funkcją, której część rzeczywista lub urojona
      rozbiega do nieskończoności, zależnie od tego czy mówimy o zbiorze
      $\\mathbb{C}$ lub $\\hat{\\mathbb{C}}$ granica ta jest rozbieżna lub
      odpowiednio zbieżna do $\\tilde{\\infty}$.<br/>
      Oczywiście druga część funkcji musi być zbieżna do jakiejś liczby.
      W innym przypadku granica nie istnieje (na przyład w przypadku logarytmu).`
    },
    {
      content: `Jak widać na wykresie granica zmienia się pomiędzy $\\infty$ a $-\\infty$.
      Na rysunku można zauważyć, że w pewnych dwóch kierunkach, gdy granica
      zmienia znak, jest ona równa $0$. Jednak granica części rzeczywistej
      jest wtedy równa nieskończoności.`
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  getPageTitle(): string {
    return $localize`:@@2b1fcd4f570e5226a9e4c94f84891f5041010130:Granice funkcji zespolonych i pochodna zespolona`;
  }
}
