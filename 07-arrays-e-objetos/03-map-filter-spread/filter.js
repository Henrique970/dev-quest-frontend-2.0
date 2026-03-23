// filter - vai filtrar os elementos de um array caom base em uma condição.

const products = [
    {id: 1, name: 'Notebook', price: 2499},
    {id: 2, name: 'Mouse', price: 99},
    {id: 3, name: 'Keyboard', price: 19},
    {id: 4, name: 'Monitor', price: 599},
    {id: 5, name: 'Chair', price: 299}
];

console.log(products);

const priceGreaterThanOneHundred = products.filter(product => product.price > 100);

console.log(priceGreaterThanOneHundred);



