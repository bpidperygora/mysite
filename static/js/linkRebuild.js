"use strict";

var links = document.querySelectorAll('a');

for (var a = 0; a < links.length; a++) {
  var currentLink = links[a].getAttribute('href');
  links[a].setAttribute('href', '/mysite' + currentLink);
}