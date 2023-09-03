// Define the items on my menu.
const food_items = [
    {name: 'Fatty Patty', price: 4.95},
    {name: 'Fatty Patty Jr', price: 1.99},
    {name: 'Fatty Fries', price: 3.49},
    {name: 'Obesity Rings', price: 4.49},
];

function generateMenu() {
    const menu = document.getElementById('menu');

    food_items.forEach(item => {
        const list_item = document.createElement('li');
        list_item.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        menu.appendChild(list_item);
    });
}

generateMenu();