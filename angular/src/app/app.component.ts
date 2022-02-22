import {Component, ComponentFactoryResolver, ComponentRef, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {P0TocComponent} from './pages/p0-toc/p0-toc.component';
import {P1InfoComponent} from './pages/p1-info/p1-info.component';
import {ActivatedRoute} from '@angular/router';
import {PageTemplate} from './pages/page-template';
import {Title} from '@angular/platform-browser';
import {P2IntroComponent} from './pages/p2-intro/p2-intro.component';
import {PageHostDirective} from './directives/page-host.directive';
import {P3SeqSphereComponent} from './pages/p3-seq-sphere/p3-seq-sphere.component';
import {P4Func3dComponent} from './pages/p4-func3d/p4-func3d.component';

const PAGES: Map<number, Type<PageTemplate>> = new Map([
  [0, P0TocComponent],
  [1, P1InfoComponent],
  [2, P2IntroComponent],
  [3, P3SeqSphereComponent],
  [4, P4Func3dComponent],
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  @ViewChild(PageHostDirective, {static: true})
  pageHost!: PageHostDirective;

  constructor(private route: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver,
              private titleService: Title) {

  }

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');

    this.setPage(+page as number || 0);
  }

  setPage(n: number): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PAGES.get(n));

    const viewContainerRef = this.pageHost.viewContainerRef;
    viewContainerRef.clear();
    const component: ComponentRef<unknown> = viewContainerRef.createComponent(componentFactory);
    const pageTemplate: PageTemplate = component.instance as PageTemplate;
    this.titleService.setTitle(pageTemplate.getPageTitle());
  }
}
