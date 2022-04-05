let shoppingItems = ["milk", "eggs", "bread"];
function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingItems.forEach((item) => {
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    });
}

updateItems();

function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingItems.push(item);
    console.log(shoppingItems);
    updateItems();
}

function clearList() {
    // let item = document.getElementById("clear-list-button").value;
    shoppingItems = [];
    console.log(shoppingItems);
    updateItems();
}
