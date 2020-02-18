"use strict";

var links = document.querySelectorAll('a');

for (var a = 0; a < links.length; a++) {
  links[a].href = 'mysite' + links[a].href;
}