import { Component, OnInit } from '@angular/core';
import {PageTemplate} from '../page-template';

@Component({
  selector: 'app-p1-info',
  templateUrl: './p1-info.component.html',
  styleUrls: ['./p1-info.component.less']
})
export class P1InfoComponent implements PageTemplate, OnInit {

  constructor() { }

  ngOnInit() {
  }

  getPageTitle(): string {
    return 'Informacje o stronie - Zbaczając z osi rzeczywistej';
  }

}
