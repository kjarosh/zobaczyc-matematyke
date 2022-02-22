import {Component, Input, OnInit} from '@angular/core';

export interface Slide {
  content: string;
}

@Component({
  selector: 'app-slides-helper',
  templateUrl: './slides-helper.component.html',
  styleUrls: ['./slides-helper.component.less']
})
export class SlidesHelperComponent implements OnInit {
  @Input()
  src: any;

  @Input()
  title: string;

  @Input()
  slides: Array<Slide>;

  playing = false;

  slideNo = 0;

  constructor() {
  }

  ngOnInit() {
  }

  setupLoadChecker(iframe) {
    const IFRAME_LOADER_LAST_SLIDES = 0;
    const interval = setInterval(checkLoaded, 100);

    function checkLoaded() {
      if (iframe.contentWindow.Config && iframe.contentWindow.mathbox) {
        clearInterval(interval);

        // iframe.dispatchEvent(new Event('mathbox'));

        const evt = document.createEvent('Event');
        evt.initEvent('mathbox', true, true);
        document.dispatchEvent(evt);

        // TODO setupSlideChecker(iframe);
      }
    }
  }

  play() {
    this.playing = true;
  }

  slideBack() {
    this.slideNo--;
  }

  slideReload() {

  }

  slideNext() {
    this.slideNo++;
  }
}
