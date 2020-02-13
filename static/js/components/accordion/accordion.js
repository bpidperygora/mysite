"use strict";

var accordionBlock = document.querySelectorAll('.accordion_block');
console.log(accordionBlock);

for (var a = 0; a < accordionBlock.length; a++) {
  accordionBlock[a].addEventListener('click', function (ev) {
    var accordionItems = ev.target.parentNode.children;

    if (ev.target.className.indexOf('accordion_item') >= 0) {
      if (ev.target.parentNode.className.indexOf('accordion') >= 0) {
        if (ev.target.className.indexOf('active') >= 0) {
          slideUp(ev.target.children[1], 500);
          ev.target.classList.remove('active');
          ev.target.children[0].classList.remove('active');
        } else {
          for (var ai = 0; ai < accordionItems.length; ai++) {
            if (accordionItems[ai].className.indexOf('active') >= 0) {
              slideUp(accordionItems[ai].children[1], 500);
              accordionItems[ai].classList.remove('active');
              accordionItems[ai].children[0].classList.remove('active');
              break;
            }
          }

          slideDown(ev.target.children[1], 500);
          ev.target.classList.add('active');
          ev.target.children[0].classList.add('active');
        }
      }
    }
  });
} // Pur JS animation


function slideUp(target, duration) {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

function slideDown(target, duration) {
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}