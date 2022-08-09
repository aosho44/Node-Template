// Deconstructing and Rest
const fruits = ["mango", "apple", "strawberry", "grapes", "banana"];

const [mango, apple, , , ...otherFruits] = fruits;

console.log(otherFruits, fruits);

//
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
  },
];

const [, ...last2Products] = products;

last2Products.push({
  id: 4,
  name: "Product 4",
  price: 40,
});

console.log(products, last2Products);

// map

const productMap = products.map((products) => products.name);

console.log(productMap);

const productPrice = products.map((products) => products.price * 100);
console.log(productPrice);
