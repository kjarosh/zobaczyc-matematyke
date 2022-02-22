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
import { HeaderComponent } from './header/header.component';

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
  ],
})
export class AppModule {
}

