let links = document.querySelectorAll('a');
for (let a = 0; a < links.length; a++){
    let currentLink = links[a].getAttribute('href');
    links[a].setAttribute('href', '/mysite' + currentLink);
}