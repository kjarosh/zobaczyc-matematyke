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
    return $localize`:@@624de3a96d78b5e7a1277283e51b003aa2ab4484:Strona główna`;
  }

  isEnglishVersion(): boolean {
    return window.location.href.includes('/en-US');
  }
}
