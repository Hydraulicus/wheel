import '../styles/index.scss';
import wheel1 from '../assets/wheel1.svg';
import wheel2 from '../assets/wheel2.svg';
import wheel3 from '../assets/wheel3.svg';
import wheel4 from '../assets/wheel4.svg';

// console.log('webpack starterkit');
var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
var scrollTimer;

function scroll_handler() {

  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(function () {
    // setNormalState();
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    console.log("scrolled = ", scrolled);
  }, 300);

  // var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  // var delta = scrolled - currentScroll;
  //
  // if (delta > 0 && !downAnimationInAction) {
  //   downAnimationInAction = true;
  //   upAnimationInAction = false;
  //   scrollDown();
  // }
  // if (delta < 0 && !upAnimationInAction) {
  //   upAnimationInAction = true;
  //   downAnimationInAction = false;
  //   scrollUp();
  // }
  // currentScroll = scrolled;
};

window.addEventListener("scroll", scroll_handler);