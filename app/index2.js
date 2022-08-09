// Deconstructing and Rest
const fruits = ["mango", "apple", "strawberry", "grapes", "banana"];

const [mango, apple, , , ...otherFruits] = fruits;

console.log(otherFruits, fruits);
