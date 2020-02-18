// add current link to terminal name
let currentLink = document.querySelector('.menu_current_link');
currentLink.innerHTML = '<p>' + window.location.href + '</p>';

// mark list items with number

let items = document.querySelectorAll('.menu_item > h3');
for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = items[i].innerHTML + '<span class="item_number" data-number=' + (i + 1) + '>[' + (i + 1) + ']</span>';
}

// add current link to terminal
let inputBlock = document.querySelector('.menu_info_enter_input');

inputBlock.children[0].innerHTML = '<span>' + window.location.pathname.replace('.html', '') + '>&nbsp' + '</span>';
console.log(window.location.pathname.replace('.html', ''));


// make some actions on enter click

let input = document.getElementById('enter');

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        let currentValue = input.value.toLowerCase();
        let correct = false;
        for (let i = 0; i < items.length; i++) {
            let a = items[i].getElementsByTagName('a')[0];
            let aNuber = items[i].getElementsByTagName('span')[0].dataset.number;
            if ('cd ' + aNuber === currentValue) {
                window.location = a.href;
                correct = true;
                break;
            } else if ('cd ' + a.innerText.toLowerCase() === currentValue) {
                window.location = a.href;
                correct = true;
                break;
            } else {
                correct = false
            }
        }
        let messageBlock = document.querySelector('.menu_info_enter_title');
        if (!correct) {
            if (currentValue.indexOf('cd ') < 0) {
                messageBlock.innerHTML = '<h4>Error! There is no "cd + ..." in input<h4>'
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
});

// Show Terminal Function

let header = document.getElementsByTagName('header')[0];
let menuButton = document.getElementsByClassName('menu_button')[0];
if (menuButton) {
    menuButton.addEventListener('click', function () {
        header.classList.toggle('show');
        this.classList.toggle('show_terminal');
        this.classList.toggle('terminal_visible');
        if (this.classList.contains('show_terminal')) {
            this.innerHTML = 'Show Terminal'
        } else {
            this.innerHTML = 'Hide Terminal'
        }
    });
}
