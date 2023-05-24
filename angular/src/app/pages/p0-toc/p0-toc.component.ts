import {Component, OnInit} from '@angular/core';
import {PageTemplate} from '../page-template';

@Component({
  selector: 'app-p0-toc',
  templateUrl: './p0-toc.component.html',
  styleUrls: ['./p0-toc.component.less']
})
export class P0TocComponent implements PageTemplate, OnInit {
  constructor() {

  }

  ngOnInit() {

  }

  getPageTitle(): string {
    return 'Strona główna - Zbaczając z osi rzeczywistej';
  }

  isEnglishVersion(): boolean {
    return window.location.href.includes('/en-US');
  }
}
