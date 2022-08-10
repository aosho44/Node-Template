// Deconstructing and Rest
// const fruits = ["mango", "apple", "strawberry", "grapes", "banana"];

// const [mango, apple, , , ...otherFruits] = fruits;

// console.log(otherFruits, fruits);

// //
// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 10,
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 20,
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     price: 30,
//   },
// ];

// const [, ...last2Products] = products;

// last2Products.push({
//   id: 4,
//   name: "Product 4",
//   price: 40,
// });

// console.log(products, last2Products);

// map

// const productMap = products.map((product) => product.name);

// console.log(productMap);

// const productPrice = products.map((product) => {
//   product.price * 100;
//   return product;
// });

// console.log(products);

// const onlyIncrease = products.map((product) => {
//   if (product.price <= 20) {
//     product.price *= 10;
//   }

//   return product;
// });

// console.log(onlyIncrease);

// Nested Objects Optional chaining

// const user = {
//   name: "Ayo",
//   age: 22,
//   address: {
//     street: "Nonya123",
//     city: "Busy ness",
//     state: "Middle of Nowhere",
//   },
// };

// console.log(me.address??.street); // optional chaining
