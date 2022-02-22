import {Component, OnInit} from '@angular/core';
import {PageTemplate} from '../page-template';
import {Slide} from '../../helper/slides-helper/slides-helper.component';

@Component({
  selector: 'app-p8-analytic-continuation',
  templateUrl: './p8-analytic-continuation.component.html',
  styleUrls: ['./p8-analytic-continuation.component.less']
})
export class P8AnalyticContinuationComponent implements PageTemplate, OnInit {
  complexTaylorSlides: Array<Slide> = [
    {
      content: `Wiemy już jak wygląda przybliżanie funkcji rzeczywistych
      szeregiem Taylora, teraz pora na funkcje zespolone.<br/>
      Mamy przed sobą funkcję $$f(z)=\\sin(z)$$`
    },
    {
      content: `Pierwszy wyraz jest równy $$\\sin(z)\\approx z$$
      Jak widzimy, przybliżenie to jest styczne do funkcji.`
    },
    {
      content: `Kolejne wyrazy coraz bardziej przybliżają funkcję.`,
      width: 3,
    },
    {content: `Aż w końcu szereg jest zbieżny na całej płaszczyźnie.`},
    {
      content: `Podobnie jest z funkcją $$f(z)=\\exp(z)$$
      Promień zbieżności również wynosi $\\infty$ i daje się
      ją przybliżać na całej płaszczyźnie.`,
      width: 13,
    },
    {
      content: `Jednak nie dla wszystkich funkcji promień jest nieskończony.<br/>
      Przed nami funkcja $$f(z)=\\frac{1}{z^2+1}$$`
    },
    {
      content: `Wyrazy szeregu Taylora coraz bardziej ją przybliżają...`,
      width: 3,
    },
    {
      content: `Jednak promień wynosi zaledwie $R=1$, jest tak za sprawą
      dwóch biegunów w punktach $i$ i $-i$.`,
      width: 3,
    },
    {
      content: `W tym momencie widać jak kolejne wyrazy przybliżają funkcję
      koliście. Natomiast na brzegach szereg zaczyna rozbiegać do nieskończoności.`,
      width: 3,
    },
    {content: `Kolejnym przykładem jest logarytm: $$f(z)=\\log(z)$$`},
    {
      content: `Ma on punkt osobliwy w zerze, dlatego rozwijając funkcję w szereg Taylora
      wokół jedynki, promień nie może być większy od $R=1$.`,
      width: 3,
    },
    {
      content: `Widzimy jak wyrazy znowu przybliżają funkcję koliście.`,
      width: 6,
    },
    {
      content: `Na brzegach szereg ponownie zaczyna rozbiegać do nieskończoności.`,
      width: 5,
    },
    {content: `Ostatnią już funkcją jest pierwiastek: $$f(z)=\\sqrt{z}$$`},
    {
      content: `Rozwijając go w punkcie $z=1$ promień wynosi $R=1$.`,
      width: 3,
    },
    {
      content: `Dzieje się tak ze względu na punkt osobliwy (a dokładniej punkt
      rozgałęzienia) w zerze.`,
      width: 3,
    },
    {
      content: `Podobnie jak poprzednio, poza kołem zbieżności szereg rozbiega
      do nieskończoności, natomiast sama funkcja jest przybliżana koliście.
      Dlatego obszar zbieżności każdego szeregu Taylora jest kołem.`,
      width: 4,
    },
  ];

  analyticExpansionSlides: Array<Slide> = [
    {
      content: `Rozwijając daną funkcję posiadającą punkty osobliwe w szereg Taylora
      poznajemy tylko jej część. Aby odkryć jak ona wygląda na całej dziedzinie,
      kolejno rozwijamy ją w szeregi Taylora wokół punktów znajdujących się w kole
      zbieżności szeregu poprzedniego.<br/>
      Na wykresach na czerwono oznaczone są punkty osobliwe.`
    },
    {
      content: `Dzięki temu, możemy zobaczyć jak wygląda <em>cała</em> funkcja zespolona.<br/>
      Na prezentacji część rzeczywista funkcji $$f(z)=\\log(z)$$ wraz z punktem
      rozgałęzienia w zerze.`
    },
    {
      content: `Może zdarzyć się tak, że funkcja ma punkty osobliwe na jakiejś krzywej.
      Na przykład ta funkcja posiada je na ujemnej półosi rzeczywistej,
      gdyż promień szeregu Taylora jest nie większy niż odległość
      od niej.`
    },
    {content: `Jest to część rzeczywista funkcji $$f(z)=\\sqrt{z}$$`},
    {
      content: `Trochę inaczej wyglądają bieguny. Zarówno część rzeczywista jak i urojona
      musi być rozbieżna do <em>obu</em> nieskończoności w tym punkcie. Oczywiście
      każdy biegun ogranicza promień zbieżności szeregu Taylora.`
    },
    {content: `Na wykresie część urojona funkcji $$f(z)=\\frac{1}{z}$$`},
    {
      content: `Gdy funkcja posiada więcej niż jeden punkt osobliwy (w tym wypadku
      dwa bieguny), promień szeregu Taylora jest równy odległości do
      najbliższego punktu.`
    },
    {content: `Na wykresie część urojona funkcji $$f(z)=\\frac{1}{z^2+1}$$`},
    {
      content: `Może się okazać, że funkcja ma nieskończenie wiele biegunów.
      Promień szeregu Taylora zachowuje się jak poprzednio.`
    },
    {content: `Na wykresie część rzeczywista funkcji $$f(z)=\\operatorname{tg}(z)$$`},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  getPageTitle(): string {
    return 'Przedłużenia analityczne';
  }

}
