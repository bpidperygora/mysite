
// add current link to terminal name
let currentLink = document.querySelector('.menu_current_link');
currentLink.innerHTML = '<p>' + window.location.href + '</p>';

// mark list items with number

let items = document.querySelectorAll('.menu_item > h3');
for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = items[i].innerHTML + '<span class="item_number">[' + (i + 1) + ']</span>'
}

// add current link to terminal
let inputBlock = document.querySelector('.menu_info_enter_input');

inputBlock.children[0].innerHTML =  '<span>' + window.location.pathname.replace('.html', '') + '>&nbsp' + '</span>';
console.log(window.location.pathname.replace('.html', ''));