// creo variabile per mostrare la data corrente
const date = document.getElementById('date');
const d = new Date();
currentDate = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
date.append(`Lista della spesa del ${currentDate}`);

// sezione lista della spesa
const list = document.getElementById('list');
const shoppingList = ['Latte', 'Verdura', 'Biscotti', 'Pane', 'Pasta', 'Coca Cola'];
let shoppingListIndex = 0;

while (shoppingListIndex < shoppingList.length) {
    let liElement = document.createElement('li');
    let product = document.createTextNode(shoppingList[shoppingListIndex]);
    liElement.appendChild(product);
    list.appendChild(liElement);
    shoppingListIndex++;
}














