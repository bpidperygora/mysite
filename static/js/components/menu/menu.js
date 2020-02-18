"use strict";

// add current link to terminal name
var currentLink = document.querySelector('.menu_current_link');
currentLink.innerHTML = '<p>' + window.location.href + '</p>'; // mark list items with number

var items = document.querySelectorAll('.menu_item > h3');

for (var i = 0; i < items.length; i++) {
  items[i].innerHTML = items[i].innerHTML + '<span class="item_number" data-number=' + (i + 1) + '>[' + (i + 1) + ']</span>';
} // add current link to terminal


var inputBlock = document.querySelector('.menu_info_enter_input');
inputBlock.children[0].innerHTML = '<span>' + window.location.pathname.replace('.html', '') + '>&nbsp' + '</span>';
console.log(window.location.pathname.replace('.html', '')); // make some actions on enter click

var input = document.getElementById('enter');
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var currentValue = input.value.toLowerCase();
    var correct = false;

    for (var _i = 0; _i < items.length; _i++) {
      var a = items[_i].getElementsByTagName('a')[0];

      var aNuber = items[_i].getElementsByTagName('span')[0].dataset.number;

      if ('cd ' + aNuber === currentValue) {
        window.location = a.href;
        correct = true;
        break;
      } else if ('cd ' + a.innerText.toLowerCase() === currentValue) {
        window.location = a.href;
        correct = true;
        break;
      } else {
        correct = false;
      }
    }

    var messageBlock = document.querySelector('.menu_info_enter_title');

    if (!correct) {
      if (currentValue.indexOf('cd ') < 0) {
        messageBlock.innerHTML = '<h4>Error! There is no "cd + ..." in input<h4>';
      } else {
        if (messageBlock.classList.contains('error')) {
          messageBlock.innerHTML = messageBlock.innerHTML + '<br><h4> Error! no such item (' + currentValue + ') in list. Try again</h4>';
        } else {
          messageBlock.innerHTML = '<h4>Error! no such item (' + currentValue + ') in list. Try again<h4>';
          messageBlock.classList.add('error');
        }
      }
    }
  }
}); // Show Terminal Function

var header = document.getElementsByTagName('header')[0];
var menuButton = document.getElementsByClassName('menu_button')[0];
menuButton.addEventListener('click', function () {
  header.classList.toggle('show');
  this.classList.toggle('show_terminal');
  this.classList.toggle('terminal_visible');

  if (this.classList.contains('show_terminal')) {
    this.innerHTML = 'Show Terminal';
  } else {
    this.innerHTML = 'Hide Terminal';
  }
});