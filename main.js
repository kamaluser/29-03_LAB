let order = 1;

const addBtn = document.querySelector('.addBtn');

const form = document.querySelector('#form');
const inputs = document.querySelector('.inputs');

const list = document.querySelector('.list');


addBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let count = getInputCount();
    count++;
    let element = CreateElement(count);
    inputs.appendChild(element);
})

function CreateElement(order) {
    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('name', 'input' + order);
    newInput.setAttribute('placeholder', 'Fullname ' + order);

    return newInput;
}

function getInputCount() {
    return document.querySelectorAll('.inputs input').length;
}


document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ul = document.getElementById('listItems');
    ul.innerHTML = "";
    document.querySelectorAll('.inputs input').forEach((elem, index) => {
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerText = (index+1) + '.' + elem.value;
        ul.appendChild(li)
    });

})
