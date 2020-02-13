let body = document.querySelector('body');
let container_task = document.getElementById('task1');
let select_img_size = document.getElementById('select_img_size');
select_img_size.value = 600;

let select_img_amount = document.getElementById('select_img_amount');

const workRow = container_task.getElementsByClassName('click_items');
let divToClone = container_task.getElementsByClassName('click_item');

// Just to short HTML code

for (let i = 1; i <= select_img_amount.value - 1; i++) {
    let divClone = divToClone[0].cloneNode(true);
    workRow[0].appendChild(divClone);
}
// --------------------------------------------------------

let click_item = document.querySelectorAll('.click_item');
let control_div = document.querySelector('.control_items');
let items_count = document.querySelector('.items_count');
let click_item_content = document.querySelectorAll('.click_item_content');

for (let a = 0; a < click_item.length; a++) {
    let click_item_img = click_item[a].getElementsByClassName('my_click');
    click_item_img[0].setAttribute("img-data-pos", a);
    click_item_img[0].src = "https://picsum.photos/" + select_img_size.value + "?random" + a;
}
select_img_size.addEventListener('change', function () {

    let size_value = select_img_size.value;
    select_img_size.value = size_value;
    let itemsToChange = document.querySelectorAll('.click_item');

    for (let b = 0; b < itemsToChange.length; b++) {
        let click_item_img = itemsToChange[b].getElementsByClassName('my_click');
        click_item_img[0].src = "https://picsum.photos/" + size_value + "?random" + b;

    }
});

let change = document.querySelector('.change');
let select_check = document.querySelector('.select_buttons');

select_check.addEventListener('click', function () {
    let click_item_content = document.querySelectorAll('.click_item_content');

    if (select_check.classList.contains('active')) {
        container_task.classList.remove('now_selected');
        this.classList.remove('active');
        this.innerHTML = 'Select';

        for (let cs = 0; cs < click_item_content.length; cs++) {
            if (click_item_content[cs].classList.contains('selected')) {
                click_item_content[cs].classList.remove('selected');
                items_count.innerHTML = ' 0';
            }
        }

    } else {
        container_task.classList.add('now_selected');
        this.classList.add('active');
        this.innerHTML = 'Clear';

    }
});
let light_g = document.getElementsByClassName('light_g');
let light_arrow = document.querySelectorAll('.light_g_arrow ');
let prev_light_arrow = control_div.querySelector('.prev_arrow');

workRow[0].addEventListener('click', function (event) {
    let clickItem = event.target;
    let workItem = clickItem.closest('.click_item_content');

    if (select_check.classList.contains('active')) {

        if (workItem.classList.contains('selected')) {
            workItem.classList.remove('selected')
        } else {
            workItem.classList.add('selected');

        }
        let click_item_content_selected = document.querySelectorAll('.click_item_content.selected');
        items_count.innerHTML = ' ' + click_item_content_selected.length;
    } else {
        container_task.classList.add('active');
        light_g[0].children[0].src = workItem.children[0].src;
        light_g[0].children[0].setAttribute('img-data-pos', workItem.children[0].getAttribute('img-data-pos'));
        body.classList.add('not_move');

    }
    let close_light_g = control_div.querySelector('.light_g_close');
    close_light_g.addEventListener('click', function () {
        container_task.classList.remove('active');
        body.classList.remove('not_move');
    });
    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) {
            container_task.classList.remove('active');
            body.classList.remove('not_move');
        }
    });

});

for (let z = 0; z < light_arrow.length; z++) {
    light_arrow[z].addEventListener('click', function () {
        let all_img = document.querySelectorAll('.my_click');
        let total_img = all_img.length;
        let first_light_g_img = all_img[0];
        let first_light_g_img_data = first_light_g_img.getAttribute('img-data-pos');

        let last_light_g_img = all_img[total_img - 1];
        let last_light_g_img_data = last_light_g_img.getAttribute('img-data-pos');

        let active_img = document.querySelector('.main_light_g_img');
        let active_img_data = active_img.getAttribute('img-data-pos');

        let prev_img = all_img[+active_img_data - +1];
        let next_img = all_img[+1 + +active_img_data];

        if (this === prev_light_arrow) {
            if (+active_img_data - +1 < +first_light_g_img_data) {

                active_img.src = last_light_g_img.src;
                active_img.setAttribute('img-data-pos', last_light_g_img.getAttribute('img-data-pos'));

            } else {
                active_img.src = prev_img.src;
                active_img.setAttribute('img-data-pos', prev_img.getAttribute('img-data-pos'));
            }

        } else {
            if (+active_img_data + +1 > +last_light_g_img_data) {
                active_img.src = first_light_g_img.src;
                active_img.setAttribute('img-data-pos', first_light_g_img.getAttribute('img-data-pos'));

            } else {
                active_img.src = next_img.src;
                active_img.setAttribute('img-data-pos', next_img.getAttribute('img-data-pos'));
            }
        }
    });

}

change.addEventListener('click', function () {
    let check_for_selected = workRow[0].querySelectorAll('.selected');
    for (let cl = 0; cl < check_for_selected.length; cl++) {
        let random_img = Math.floor(Math.random() * (100 - click_item.length)) + click_item.length + 1;
        if (select_check.classList.contains('active')) {
            check_for_selected[cl].children[0].src = "https://picsum.photos/" + select_img_size.value + "?random" + random_img * 3;
            check_for_selected[cl].classList.remove('selected');
        }
    }
    items_count.innerHTML = ' 0';

});

let start_amount = parseInt(select_img_amount.value);

select_img_amount.addEventListener('change', function () {

    let currentAmount = workRow[0].querySelectorAll('.click_item').length;
    let selected_amount = select_img_amount.value;

    // Create new elements
    const createWorkDiv = document.createElement('div');
    createWorkDiv.classList.add('click_item');
    createWorkDiv.innerHTML = '<div class="click_item_content rounded"><img class="my_click " src="" alt="Some Random IMG"></div>';
    // --------------

    let addNewItems = (selected_amount - currentAmount);
    if (currentAmount <= selected_amount) {
        for (let i = 1; i <= addNewItems; i++) {
            let creatingNumber = currentAmount++;
            let cloneWorkDiv = createWorkDiv.cloneNode(true);
            workRow[0].appendChild(cloneWorkDiv);
            cloneWorkDiv.getElementsByClassName('my_click')[0].src = "https://picsum.photos/" + select_img_size.value + "?random" + creatingNumber;
            cloneWorkDiv.getElementsByClassName('my_click')[0].setAttribute("img-data-pos", '' + creatingNumber + '');
        }
    } else {
        let removeItem = currentAmount - selected_amount;
        for (let s = 1; s <= removeItem; s++){
            workRow[0].removeChild(workRow[0].lastChild)
        }
    }

});