import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {P0TocComponent} from './pages/p0-toc/p0-toc.component';
import {P1InfoComponent} from './pages/p1-info/p1-info.component';
import {RouterModule} from '@angular/router';
import {LoadingComponent} from './loading/loading.component';
import {P2IntroComponent} from './pages/p2-intro/p2-intro.component';
import {SlidesHelperComponent} from './helper/slides-helper/slides-helper.component';
import {PageHostDirective} from './directives/page-host.directive';
import {HeaderComponent} from './header/header.component';
import {CachedSrcDirective} from './directives/cached-src.directive';
import {P3SeqSphereComponent} from './pages/p3-seq-sphere/p3-seq-sphere.component';
import { P4Func3dComponent } from './pages/p4-func3d/p4-func3d.component';
import { P5LimitsDerivativeComponent } from './pages/p5-limits-derivative/p5-limits-derivative.component';
import { P6MobiusComponent } from './pages/p6-mobius/p6-mobius.component';
import { P7TaylorSeriesComponent } from './pages/p7-taylor-series/p7-taylor-series.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    P0TocComponent,
    P1InfoComponent,
    P2IntroComponent,
    SlidesHelperComponent,
    PageHostDirective,
    HeaderComponent,
    CachedSrcDirective,
    P3SeqSphereComponent,
    P4Func3dComponent,
    P5LimitsDerivativeComponent,
    P6MobiusComponent,
    P7TaylorSeriesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    P0TocComponent,
    P1InfoComponent,
    P2IntroComponent,
    P3SeqSphereComponent,
    P4Func3dComponent,
    P5LimitsDerivativeComponent,
    P6MobiusComponent,
    P7TaylorSeriesComponent,
  ],
})
export class AppModule {
}
