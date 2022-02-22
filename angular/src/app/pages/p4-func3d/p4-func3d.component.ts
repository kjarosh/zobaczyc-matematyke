import {Component, OnInit} from '@angular/core';
import {PageTemplate} from '../page-template';
import {Slide} from '../../helper/slides-helper/slides-helper.component';

@Component({
  selector: 'app-p4-func3d',
  templateUrl: './p4-func3d.component.html',
  styleUrls: ['./p4-func3d.component.less']
})
export class P4Func3dComponent implements PageTemplate, OnInit {
  funcModelSlides: Array<Slide> = [
    {
      content: `Aby lepiej zrozumieć wykres funkcji dwóch zmiennych,
      weźmy pod uwagę jakąś funkcję z parametrem.`
    },
    {
      content: `Na przykład
      $$f(x)=\\frac{(m+2)}{8}x^2-4mx+8m^2-3$$
      gdzie $m$ jest parametrem.`
    },
    {content: `Gdy $m$ się zmienia wykres funkcji również staje się inny.`},
    {
      content: `Kolejną funkcją może być np.:
      $$g(x)=mx^3+x$$`
    },
    {
      content: `Teraz, wyobraźmy sobie taki poruszający się wykres, ale w trzecim wymiarze
      (czyli po osi $z$). Jego pozycja w tej osi jest równa parametrowi $m$.`,
      width: 2,
    },
    {
      content: `Wykres ten "modeluje" nam powierzchnię trójwymiarową.
      Parametr $m$ jest wtedy uważany za drugą zmienną.`,
      width: 2,
    },
    {content: `Istnieje wiele przykładów funkcji wielu zmiennych.`},
    {
      content: `Jednym z nich jest powierzchnia
      $$f(x, y)=\\sin(x)+\\cos(y)$$`
    },
    {
      content: `Lub część wielomianu
      $$f(x, y)=xy^2$$`
    },
    {
      content: `Jednym z ważniejszych przykładów funkcji wielu zmiennych
      jest tak zwane "siodło":
      $$f(x, y)=y^2-x^2$$`
    },
    {
      content: `Oczywiście można pójść krok dalej i wprowadzić pojęcie funkcji
      dwóch zmiennych <em>z parametrem</em>. Wykres będzie wtedy
      zmieniał się zależnie od parametru.`
    },
    {
      content: `Na przykład
      $$f(x,y)=y^2-mx^2$$
      Na wykresie parametr $m$ przebiega przedział $[-1;1]$.`
    },
    {
      content: `Lub trochę bardziej skomplikowany, lecz bardzo ciekawy przykład:
      $$f(x, y)=\\frac{80\\sin(x^2+y^2 - m) + 40}{x^2+y^2+50}$$
      <em>Wzory powyższych funkcji są uproszczone &mdash; pominięte zostały
      stałe skalujące wykres.</em>`
    },
  ];

  complex3dSlidesMap: Array<Slide> = [
    {content: `Istnieje wiele sposobów przedstawienia funkcji zespolonej.`},
    {
      content: `Jednym z nich są tak zwane
      <em>mapy zespolone</em>. Polegają one na ukazaniu przekształcenia
      na jakiejś figurze (w tym wypadku na kolorowym kwadracie).<br/>
      Na rysunku przedstawiona jest funkcja $$f(z)=z^2$$`
    },
    {
      content: `Każdy punkt kwadratu traktujemy jako liczbę zespoloną, poddając
      ją działaniu danej funkcji. Tak otrzymujemy obraz widoczny po prawej.<br/>
      Na rysunku przedstawiona jest funkcja $$f(z)=\\sin(z)$$`
    },
    {
      content: `Dzięki czarnym liniom możemy zobaczyć w jaki sposób dana funkcja
      je przekształca.<br/>
      Na rysunku przedstawiona jest funkcja $$f(z)=\\exp(z)$$`
    },
    {
      content: `Gdy kąty pod jakimi się przecinają zostają takie same,
      mówimy o funkcji <em>konforemnej</em>.<br/>
      Na rysunku przedstawiona jest funkcja $$f(z)=\\sqrt{z}$$`
    },
    {
      content: `Czasem może zdarzyć się tak, że figura po przekształceniu zachodzi
      sama na siebie. Dzieje się tak, gdy funkcja nie jest różnowartościowa
      i przyjmuje jakieś wartości więcej niż raz. Na wykresach mapy dobierane
      są tak, aby na siebie nie zachodziły.<br/>
      Na rysunku przedstawiona jest funkcja $$f(z)=\\operatorname{tg}(z)$$`
    },
  ];

  complex3dSlidesPlot: Array<Slide> = [
    {
      content: `Drugim sposobem jest podzielenie wykresu funkcji zespolonej
      na dwa wykresy funkcji dwóch zmiennych. W tym wypadku będą to
      funkcje odpowiednio części rzeczywistej i urojonej.<br/>
      Na rysunku przedstawiona jest funkcja $$f(z)=z^2$$`
    },
    {
      content: `Na wykresach kolorem czerwonym są zaznaczone wartości funkcji na
      prostej rzeczywistej. Aby dana funkcja przyjmowała wartości rzeczywiste,
      jej część urojona musi być równa zero, tak jak widać na wykresach w przypadku prostej rzeczywistej.<br/>
      Na rysunku przedstawiona jest funkcja $$f(z)=z^4$$`
    },
    {
      content: `Na takich wykresach bardzo mocno widoczna jest zasada symetrii.
      Gdy na danej prostej wartości funkcji przyjmują wartości rzeczywiste,
      część rzeczywista tej funkcji jest symetryczna względem pionowej
      płaszczyzny przechodzącej przez tą prostą, natomiast część urojona
      jest symetryczna względem tej prostej.<br/>
      Na rysunku przedstawiona jest funkcja $$f(z)=\\sin(z)$$`
    },
    {
      content: `Niektóre funkcje, na przykład $f(z)=\\exp(z)$, posiadają okres zespolony.
      Oznacza to, że są okresowe, lecz w innym kierunku niż prosta rzeczywista.
      Okres tej funkcji wynosi $2\\pi i$.`
    },
    {
      content: `Gdy część urojona jest różna od zera, nie definiuje się wartości
      funkcji rzeczywistej w tym punkcie (gdyż takowe byłyby zespolone).
      Jest tak w przypadku funkcji $f(z)=\\sqrt{z}$ dla argumentów
      rzeczywistych, mniejszych od $0$.`
    },
    {
      content: `Bardzo ważnym elementem funkcji zespolonych sa tak zwane <em>bieguny</em>.
      Są to punkty, w których funkcja rozbiega do nieskończoności
      (pod pewnymi warunkami).<br/>
      Na przykład funkcja $$f(z)=\\frac{1}{z}$$ ma biegun w punkcie $z=0$.`
    },
    {
      content: `Na wykresie widoczna jest funkcja
      $$f(z)=\\frac{1}{z^2+1}$$
      Jak widać ma ona dwa bieguny w punktach $i$ i $-i$. To właśnie one
      ograniczały promień zbieżności szeregu Taylora tej funkcji.`
    },
    {
      content: `Funkcja
      $$f(z)=\\operatorname{tg}(z)$$
      ma nieskończenie wiele biegunów w punktach
      $$z=\\frac{\\pi}{2}+k\\pi,\\quad k\\in\\mathbb{Z}$$`
    },
    {
      content: `Logarytm jest bardzo ważną funkcją używaną w analizie zespolonej.
      Dla rzeczywistych ujemnych argumentów przyjmuje ona część urojoną równą $\\pi$.<br/>
      W punkcie $0$ rozbiega ona do nieskończoności, jednak punkt
      ten nie jest biegunem. Jest on <em>punktem rozgałęzienia</em>. Zbiorczo,
      takie punkty nazywa się <em>punktami osobliwymi</em>. Innym przypadkiem
      może być <em>punkt istotnie osobliwy</em>, który nie jest ani biegunem,
      ani punktem rozgałęzienia.`
    },
  ];

  complex3dSlidesColoring: Array<Slide> = [
    {
      content: `Kolejnym ze sposobów przedstawienia funkcji zespolonych jest tak
      zwana <em>technika kolorowania dziedziny</em>. Polega ona na tym,
      że wartość funkcji w punkcie jest reprezentowana przez jakiś kolor.<br/>
      W tym przypadku na wykresie widnieje funkcja $f(z)=z^2$. Jest widoczne
      dwukrotne powtórzenie się kolorów (np. dwa różowe promienie).`
    },
    {
      content: `Na wykresach białe pasy oznaczają równe moduły, natomiast czarne równe
      części rzeczywiste lub urojone.<br/>
      W przypadku funkcji $f(z)=z^4$, kolory powtarzają się czterokrotnie.
      Również białe okręgi są ułożone gęściej (im dalej od środka). Oznacza
      to tempo wzrostu funkcji.`
    },
    {
      content: `Na takich wykresach bardzo dobrze widoczne są miejsca zerowe. Mają
      one postać pojedynczej białej kropki. Na wykresie funkcja $$f(z)=\\sin(z)$$
      i jej miejsce zerowe $z=0$.`
    },
    {
      content: `Okresy funkcji również są widoczne jako powtarzające
      się elementy rysunku. Na przykład dla funkcji $f(z)=\\exp(z)$
      wykres się powtarza co $2\\pi$ w kierunku osi urojonej.`
    },
    {
      content: `Punkty, w których funkcja nie jest ciągła widać jako
      przeskoki kolorów. Na przykład funkcja $f(z)=\\sqrt{z}$
      jest nieciągła na ujemnej półprostej rzeczywistej.`
    },
    {
      content: `Bieguny funkcji są reprezentowane przez skupienie białych okręgów.
      W tym wypadku funkcja $$f(z)=\\frac{1}{z}$$ i jej biegun w zerze.`
    },
    {
      content: `Funkcja $$f(z)=\\frac{1}{z^2+1}$$ ma oczywiście widoczne dwa bieguny
      w punktach $i$ i $-i$.`
    },
    {
      content: `Na wykresie funkcji $f(z)=\\operatorname{tg}(z)$ widać zarówno bieguny jak
      i miejsca zerowe. W tym wypadku miejsce zerowe $z=0$ i bieguny w punktach
      $\\tfrac{\\pi}{2}$ i $-\\tfrac{\\pi}{2}$.`
    },
    {
      content: `Funkcja $f(z)=\\log(z)$ jest bardzo egzotyczna. Widzimy punkt rozgałęzienia
      w zerze, miejsce zerowe $z=1$ i nieciągłość na ujemnej półprostej rzeczywistej.`
    },
    {
      content: `Na wykresie funkcja $$f(z)=\\exp\\left(\\frac{1}{z}\\right)$$
      Jest ona bardzo trudna do narysowania w trójwymiarze, gdyż w zerze ma
      punkt istotnie osobliwy. Funkcja wokół takiego punktu przyjmuje prawie wszystkie
      wartości nieskończenie wiele razy. Oznacza to, że bardzo mocno tam oscyluje.`
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  getPageTitle(): string {
    return 'Funkcje dwóch zmiennych i funkcje zespolone';
  }

}
