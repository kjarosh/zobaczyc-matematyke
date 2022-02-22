import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

export interface Slide {
  content: string;
  width?: number;
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

  slidesUnmapped: Array<Slide>;
  slidesMapped: Array<Slide>;

  @Input()
  public get slides(): Array<Slide> {
    return this.slidesUnmapped;
  }

  public set slides(slides: Array<Slide>) {
    this.slidesUnmapped = slides;
    this.slidesMapped = this.mapSlides(this.slidesUnmapped);
  }

  @ViewChild('iframe', {static: false})
  iframe: ElementRef;

  iframeSrc: string;
  playing = false;
  slideNo = 0;

  constructor() {
  }

  ngOnInit() {
    this.slideReload();
  }

  private mapSlides(slides: Array<Slide>): Array<Slide> {
    const ret = [];
    slides.forEach(slide => {
      for (let i = 0; i < (slide.width || 1); ++i) {
        ret.push(slide);
      }
    });
    return ret;
  }

  play() {
    this.playing = true;
  }

  slidePrev() {
    if (this.slidePrevAvailable()) {
      this.slideNo--;
      this.iframe.nativeElement.contentWindow.Config.prevSlide();
    }
  }

  slidePrevAvailable() {
    return this.playing && this.slideNo > 0;
  }

  slideReload() {
    this.slideNo = 0;
    this.iframeSrc = this.src + '?time=' + (new Date()).getTime();
  }

  slideNext() {
    if (this.slideNextAvailable()) {
      this.slideNo++;
      this.iframe.nativeElement.contentWindow.Config.nextSlide();
    }
  }

  slideNextAvailable() {
    return this.playing && this.slideNo + 1 < this.slidesMapped.length;
  }
}
