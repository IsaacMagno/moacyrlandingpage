class handleScroll {
  constructor() {
    var _this2 = this;

    var _this$state = this.state,
      resetScroll = _this$state.resetScroll,
      translateY = _this$state.translateY;

    if (this.lockScroll) {
      // if > top and bottom < fix scroll
      window.scrollTo(0, translateY * -1);
      return false;
    }

    if (!this.ticking) {
      window.requestAnimationFrame(function () {
        if (resetScroll) {
          window.scrollTo(0, translateY * -1);
        }

        var pageYOffset = window.pageYOffset || 0;

        _this2.setState({
          pageYOffset: pageYOffset,
          resetScroll: false,
        });

        var newSlide = _this2.slides.find(function (slide) {
          var el = slide.el.current;
          return pageYOffset < el.offsetTop + el.offsetHeight * 0.5;
        });

        _this2["goto"](newSlide);

        _this2.ticking = false;
      });
    }

    this.ticking = true;
    return true;
  }
}
