import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appPageHost]'
})
export class PageHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
