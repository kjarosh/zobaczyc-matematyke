import {Component, OnInit} from '@angular/core';
import {PageTemplate} from '../page-template';
import {Slide} from '../../helper/slides-helper/slides-helper.component';

@Component({
  selector: 'app-p3-seq-sphere',
  templateUrl: './p3-seq-sphere.component.html',
  styleUrls: ['./p3-seq-sphere.component.less']
})
export class P3SeqSphereComponent implements PageTemplate, OnInit {

  complexSequencesSlides: Array<Slide> = [
    {
      content: `Klasyczna reprezentacja ciągu jest bardzo intuicyjna, oś pozioma jest osią argumentów (czyli indeksów),
      natomiast oś pionowa jest osią wartości. Granicę ciągu oznacza się wtedy poziomą linią.`
    },
    {
      content: `Aby jednak łatwo wyobrazić sobie ciąg dwuwymiarowy, należy pozbyć się jednej z osi. Jak widać
      oś indeksów nie wnosi zbyt wiele, dlatego ją usuwamy.<br/>
      Sprawia to jednak, iż czasem nie jesteśmy w stanie zobaczyć kolejności wyrazów ciągu.
      Zamiast tego, można użyć kolorów lub połączyć punkty ze sobą, jednak
      w większości przypadków nie jest to konieczne.`
    },

    {
      content: `W taki sposób ciąg mieści się tylko na jednej osi. Granicę możemy łatwo zauważyć jako
      "skupienie" dużej ilości wyrazów ciągu.`
    },

    {
      content: `Używając takiej reprezentacji najłatwiej jest wyobrazić sobie ciąg liczb zespolonych,
      jako ciąg punktów na płaszczyźnie. Analogicznie jak ciąg liczb rzeczywistych był
      ciągiem punktów na prostej.<br/>
      Weźmy pod uwagę dowolną liczbę zespoloną $\color{red}{q}$.`
    },
    {
      content: `Na rysunku obok leży ona na tak zwanym okręgu jednostkowym, czyli takim, którego
      środek znajduje się w zerze i promień wynosi $1$.`
    },
    {
      content: `Rysujemy kilkadziesiąt pierwszych wyrazów ciągu
      $$\{\\color{blue}{a_n}}=\{\\color{red}{q}}^n$$
      Oczywiście dla rzeczywistego $\{\\color{red}{q}}$, mniejszego od $1$ ciąg ten
      ma granicę równą zero.<br/>
      Co jednak gdy $\{\\color{red}{q}}$ będzie liczbą zespoloną?`
    },
    {
      content: `Okazuje się, że ciąg ten jest zbieżny do zera dla <em>każdego</em> $\\color{red}{q}$,
      które leży wewnątrz koła jednostkowego, tzn. $$|\{\\color{red}{q}}|&lt;1$$`
    },
    {
      content: `Nieważne jak daleko od liczby $1$, jego granica zawsze będzie wynosić $0$.`,
      width: 3,
    },
    {
      content: `Jednak co jeśli liczba $\{\\color{red}{q}}$ leży na zewnątrz okręgu jednostkowego?<br/>
      Na przykład, gdy $\{\\color{red}{q}}$ jest liczbą rzeczywistą większą od $1$, ciąg ten jest rozbieżny do $\infty$.`
    },
    {
      content: `Zachowuje się on podobnie dla każdej liczby zespolonej leżącej na zewnątrz
      koła jednostkowego $$|{\\color{red}{q}}|&gt;1$$`,
      width: 2,
    },
    {
      content: `Okazuje się, że gdy $$|{\\color{red}{q}}|=1$$
      ciąg ten znajduje się wtedy w całości na okręgu jednostkowym i gdy $\{\\color{red}{q}}$ jest różne od $1$ jest on rozbieżny,
      okrążając okrąg jednostkowy w nieskończoność.`
    },

    {
      content: `Gdy $\{\\color{red}{q}}=-1$, otrzymujemy słynny rozbieżny ciąg
      $$\{\\color{blue}{a_n}}=(-1)^n$$`
    },
    {content: `Oczywiście gdy $\{\\color{red}{q}}= 1$, wszystkie jego wyrazy są równe $1$, dlatego też jest on zbieżny do $1$.`},
    {content: `Ciągi zespolone nie zawsze muszą być zbieżne do jakiejś liczby rzeczywistej.`},
    {
      content: `Ten konkretny jest zbieżny do liczby zespolonej wynoszącej w przybliżeniu
      $$0.318132... + 1.33724...\\,i$$
      jeśli tylko jego wyraz początkowy $\{\\color{red}{q}}$ znajduje się powyżej osi rzeczywistej.`,
      width: 2,
    },
    {
      content: `Jeśli natomiast $\{\\color{red}{q}}$ jest poniżej osi rzeczywistej, jego granica jest równa
      $$0.318132... - 1.33724...\\,i$$`,
      width: 2,
    },
  ];

  riemannSphereSlides: Array<Slide> = [
    {content: `Przed sobą mamy płaszczyznę zespoloną.`},
    {
      content: `Ustawiamy nad nią sferę o promieniu równym $1$, tak aby
      leżała na punkcie $0$.`
    },
    {content: `Punkt na sferze leżący naprzeciwko zera oznaczymy za pomocą $\{\\color{red}{P}}$.`},
    {content: `Wybieramy dowolny punkt na płaszczyźnie $\{\\color{blue}{a}}$...`},
    {content: `... i łączymy ze sobą oba punkty.`},
    {content: `Odcinek ten przecina sferę w punkcie $\{\\color{orange}{a'}}$.`},
    {content: `Przesuwając punkt $\{\\color{blue}{a}}$, położenie zmienia również $\{\\color{orange}{a'}}$.`},
    {content: `Punkt $\{\\color{orange}{a'}}$ jest rzutem punktu $\{\\color{blue}{a}}$ na sferę.`},
    {
      content: `Im dalej punkt $\{\\color{blue}{a}}$ znajduje się od środka, tym bardziej
      punkt $\{\\color{orange}{a'}}$ zbliża się do $\{\\color{red}{P}}$.`
    },
    {
      content: `Innymi słowy: gdy $\{\\color{blue}{a}}$ dąży do nieskończoności,
      $\{\\color{orange}{a'}}$ dąży do $\{\\color{red}{P}}$.`
    },
    {
      content: `Sam punkt $\{\\color{red}{P}}$ uważa się za obraz nieskończoności i oznacza najczęściej jako
      $$\{\\color{red}{P}}=\\tilde{\\infty}$$
      natomiast sam zbiór liczb zespolonych wraz z nieskończonością jako
      $$\\hat{\\mathbb{C}}=\\mathbb{C} \\cup \\left\\{\\tilde{\\infty}\\right\\}$$
      Jest to zbiór wszystkich punktów na sferze Riemanna.`
    },
    {content: `Teraz rzutujemy całą płaszczyznę na naszą sferę.`},
    {
      content: `Na niej najłatwiej jest zobaczyć granicę ciągu w nieskończoności.<br/>
      Ciąg $\{\\color{orange}{a'_n}}$ jest obrazem ciągu $\{\\color{blue}{a_n}}$ na sferze Riemanna.`
    },
    {
      content: `Jak widać, wyrazy skupiają się w punkcie $\{\\color{red}{P}}$, czyli w nieskończoności.<br/>
      Mówimy wtedy, że na sferze Riemanna ten ciąg jest <em>zbieżny</em> do nieskończoności, ponieważ
      sama nieskończoność należy do naszego uniwersum $\\hat{\\mathbb{C}}$.`,
      width: 4,
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  getPageTitle(): string {
    return 'Ciągi zespolone i sfera Riemanna';
  }
}
