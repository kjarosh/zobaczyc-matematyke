import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

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

  // @ViewChild('iframe', {static: true})
  // iframe: any;

  playing = false;

  constructor(protected sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    // const iframe = this.iframe;
    // const that = this;
    // iframe.onload = () => {
    //   const innerDoc = iframe.contentWindow.document;
    //   // $(innerDoc).ready(function() {
    //   innerDoc.querySelector('div#play').onclick = function() {
    //     let src = iframe.src;
    //     let data = iframe.getAttribute('data-src');
    //
    //     // compare only ending
    //     if (data.length > src.length) {
    //       data = data.substring(data.length - src.length, data.length);
    //     } else {
    //       src = src.substring(src.length - data.length, src.length);
    //     }
    //
    //     // prevent reloading
    //     if (src !== data) {
    //       iframe.src = iframe.getAttribute('data-src');
    //
    //       that.setupLoadChecker(iframe);
    //     }
    //   };
    // };
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

  getIframeSrc(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
  }
}
