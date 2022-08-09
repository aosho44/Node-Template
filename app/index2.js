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

last2Products[0].name = "Product 2 updated";

console.log(products);
