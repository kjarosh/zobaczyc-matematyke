function emitBounded(emit, x, y, ymax, ymin, maxerror) {
  if (y >= ymin && y <= ymax) {
    emit(x, y);
  } else if (Math.abs(y - ymax) < maxerror) {
    emit(x, ymax);
  } else if (Math.abs(y - ymin) < maxerror) {
    emit(x, ymin);
  }
}

function dumbSlides(view, num) {
  for (let i = num; i-- > 0;) {
    view.slide();
  }
}

export const _DEBUG = false;

export const Config = {
  iframe: window !== window.top,
  debug: _DEBUG,
  plugins: ['core', 'controls', 'cursor'].concat(_DEBUG ? ['stats'] : []),
  // mathFont: '\'Latin Modern Math\'',
  // mathFont: 'math',
  mathFont: 'Helvetica',
  mathFontStyle: 'normal',
  mathFontStyleVar: 'italic',
  math: {
    x: String.fromCharCode(119909),
    f: String.fromCharCode(119891),
  },
  colors: {
    red: '#ff0000',
    blue: '#1a8cff',
    green: '#2eb82e',
    orange: '#f29e0c',

    light_gray: '#cccccc',
    gray: '#666666',
    black: '#000000',
    white: '#ffffff',

    pink: '#99004d',
  },

  zeroIndex: false,

  present: null,
  registerPresentation(present) {
    this.present = present;
  },
  registerInsert(f) {
    if (!f) {
      f = () => {};
    }

    if (this.debug) {
      // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
      window.onkeydown = (function(t, f) {
        // tslint:disable-next-line:only-arrow-functions
        return function(e) {
          const key = e.keyCode ? e.keyCode : e.which;

          if (key === 45) {
            t.nextSlide();
          } else if (key === 46) {
            f();
          }

        };
      })(this, f);
    }
  },

  nextSlide() {
    const present = this.present;

    if (!present) {
      console.error('Presentation is not registered');
      return;
    }

    const length = present.get('length');

    if (present.get('index') === present.get('length')) {
      if (this.zeroIndex) {
        present.set('index', 0);
      } else {
        present.set('index', 1);
      }
    } else {
      present.set('index', present.get('index') + 1);
    }

    console.log('Current slide: ' + present.get('index') + '/' + length);
  },
  prevSlide() {
    const present = this.present;

    if (!present) {
      console.error('Presentation is not registered');
      return;
    }

    if (present.get('index') === 1) {
      present.set('index', present.get('length'));
    } else {
      present.set('index', present.get('index') - 1);
    }

    console.log('Current slide: ' + present.get('index'));
  },
  slideNumber() {
    const present = this.present;

    if (!present) {
      console.error('Presentation is not registered');
      return;
    }

    return present.get('index');
  },
  totalSlides() {
    const present = this.present;

    if (!present) {
      console.error('Presentation is not registered');
      return;
    }

    return present.get('length');
  },
  onLoadEvents: [],
  loaded_: false,
  onLoad(f) {
    if (this.loaded_) {
      f();
    } else {
      this.onLoadEvents.push(f);
    }
  },
  loaded() {
    // tslint:disable-next-line:only-arrow-functions
    this.onLoadEvents.forEach(function(f) {
      f();
    });
    this.loaded_ = true;
  },
};

// tslint:disable-next-line:prefer-const
let katex;
let MathBox;
if (typeof katex !== 'undefined') {
  const latexFormat = MathBox.DOM.createClass({
    render(el) {
      this.props.innerHTML = katex.renderToString(this.children);
      return el('span', this.props);
    }
  });
}

function getUrlVars() {
  const vars = {};
  // tslint:disable-next-line:only-arrow-functions
  const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    vars[key] = value;
    return null;
  });

  return vars;
}
