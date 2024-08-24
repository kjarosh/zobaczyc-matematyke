import {Component, ComponentRef, OnInit, Type, ViewChild} from '@angular/core';
import {P0TocComponent} from './pages/p0-toc/p0-toc.component';
import {P1InfoComponent} from './pages/p1-info/p1-info.component';
import {PageTemplate} from './pages/page-template';
import {Title} from '@angular/platform-browser';
import {P2IntroComponent} from './pages/p2-intro/p2-intro.component';
import {PageHostDirective} from './directives/page-host.directive';
import {P3SeqSphereComponent} from './pages/p3-seq-sphere/p3-seq-sphere.component';
import {P4Func3dComponent} from './pages/p4-func3d/p4-func3d.component';
import {P5LimitsDerivativeComponent} from './pages/p5-limits-derivative/p5-limits-derivative.component';
import {P6MobiusComponent} from './pages/p6-mobius/p6-mobius.component';
import {P7TaylorSeriesComponent} from './pages/p7-taylor-series/p7-taylor-series.component';
import {P8AnalyticContinuationComponent} from './pages/p8-analytic-continuation/p8-analytic-continuation.component';
import {P9ComplexIntegralComponent} from './pages/p9-complex-integral/p9-complex-integral.component';

const PAGES: Map<number, Type<PageTemplate>> = new Map([
  [0, P0TocComponent as Type<PageTemplate>],
  [1, P1InfoComponent],
  [2, P2IntroComponent],
  [3, P3SeqSphereComponent],
  [4, P4Func3dComponent],
  [5, P5LimitsDerivativeComponent],
  [6, P6MobiusComponent],
  [7, P7TaylorSeriesComponent],
  [8, P8AnalyticContinuationComponent],
  [9, P9ComplexIntegralComponent],
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  @ViewChild(PageHostDirective, {static: true})
  pageHost!: PageHostDirective;

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');

    this.setPage(+page as number || 0);
  }

  setPage(n: number): void {
    const viewContainerRef = this.pageHost.viewContainerRef;
    viewContainerRef.clear();
    const component: ComponentRef<unknown> = viewContainerRef.createComponent(PAGES.get(n));
    const pageTemplate: PageTemplate = component.instance as PageTemplate;
    let title = pageTemplate.getPageTitle();
    title += ' – ' + $localize`:@@68392eeeec7a845ea67a7d02687e3993dd577aa3:Zbaczając z osi rzeczywistej`;
    this.titleService.setTitle(title);
  }
}
