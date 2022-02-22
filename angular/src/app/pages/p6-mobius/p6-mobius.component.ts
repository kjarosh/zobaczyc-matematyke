import {Component, OnInit} from '@angular/core';
import {PageTemplate} from '../page-template';
import {Slide} from '../../helper/slides-helper/slides-helper.component';

@Component({
  selector: 'app-p6-mobius',
  templateUrl: './p6-mobius.component.html',
  styleUrls: ['./p6-mobius.component.less']
})
export class P6MobiusComponent implements PageTemplate, OnInit {
  mobiusTransformationsSlides: Array<Slide> = [
    {
      content: `Wyobraźmy sobie kwadrat na płaszczyźnie zespolonej.
      Będziemy po kolei poddawać go czterem transformacjom Möbiusa.`
    },
    {
      content: `Pierwszą najprostszą transformacją jest translacja. Skoro liczby zespolone traktujemy jak wektory,
      dodając taką liczbę $\\color{green}{t}$ do każdego punktu kwadratu $q$
      przesuniemy go o korespondujący do niej wektor, otrzymując obraz $q'$ tego punktu:
      $$q'=q+{\\color{green}{t}}$$`,
      width: 4
    },
    {
      content: `Drugą transformacją jest skalowanie. Aby przeskalować nasz kwadrat,
      każdy jego punkt mnożymy przez jakąś liczbę rzeczywistą $\{\\color{orange}{k}}$.
      Na przykład dla $\{\\color{orange}{k}}=2$ kwadrat powiększy się dwukrotnie, dla $\{\\color{orange}{k}}=1/2$
      pomniejszy się dwukrotnie, natomiast dla $\{\\color{orange}{k}}=1$ pozostanie taki sam,
      $$q'={\\color{orange}{k}}\\cdot q$$`,
      width: 4
    },
    {
      content: `Kolejną transformacją jest obrót. Każdy punkt kwadratu mnożymy przez jakąś
      liczbę zespoloną $\{\\color{red}{r}}$ o module równym $1$ (tak aby kwadrat się nie przeskalował)
      i argumencie równym kątowi $\{\\color{red}{\\alpha}}$, o który chcemy obrócić figurę,
      $$\{\\color{orange}{q'}}={\\color{red}{r}}\\cdot{\\color{blue}{q}}$$`,
      width: 4
    },
    {
      content: `Oczywiście obie powyższe transformacje możemy ze sobą połączyć mnożąc
      przez liczbę $\{\\color{blue}{p}}$ której moduł jest równy skali,
      $$|{\\color{blue}{p}}|={\\color{orange}{k}}$$
      natomiast argument równy kątowi o jaki obracamy
      $$\\arg{\\color{blue}{p}}={\\color{red}{\\alpha}}$$`,
      width: 4
    },
    {
      content: `Ostatnią transformacją jest inwersja. Każdy punkt $q$ kwadratu odwracamy,
      otrzymując jego obraz $q'$:
      $$q'=\\frac1q$$`,
      width: 2
    },
    {
      content: `Im dalej punkt $q$ znajduje się od środka, tym bliżej będzie znajdował się punkt $q'$.
      Moduły punktów $q$ i $q'$ są odwrotne, natomiast ich argumenty przeciwne.
      Wynika to z działań na liczbach zespolonych w postaci trygonometrycznej.`,
      width: 2
    },
    {
      content: `Oczywiście możemy po kolei wykonywać transformacje Möbiusa, a wynik końcowy
      zawsze również będzie transformacją Möbiusa.`,
      width: 4
    },
    {
      content: `Aby lepiej zrozumieć wszystkie te transformacje, wyobraźmy sobie sferę Riemanna
      wraz z rzutem naszego kwadratu.`
    },
    {
      content: `Translacja jest konsekwencją poruszania sfery.`,
      width: 4
    },
    {
      content: `Skalowanie jest konsekwencją oddalania sfery od podłoża.`,
      width: 4
    },
    {
      content: `Rotacja konsekwencją obracania sfery.`,
      width: 4
    },
    {
      content: `Inwersja natomiast jest konsekwencją obrotu sfery "do góry nogami".<br/>
      Zauważmy, że wszystkie krzywe cały czas przecinają się pod kątami prostymi.`,
      width: 4
    },
    {
      content: `Okazuje się że te wszystkie cztery transformacje i ich złożenia można zapisać
      prostym wzorem
      $$q'=\\frac{aq+b}{cq+d}$$`
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  getPageTitle(): string {
    return 'Transformacje Möbiusa';
  }

}
