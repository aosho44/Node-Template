const data = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

/**
 * TODO: Use map to create a new array from 'data' wherein if the product name starts with "i", update the category to say "Electronics - Apple" and increase the price by 20%.
 *
 * DO NOT mutate the original data set.
 *
 * HINT: Use MDN to see how to check the if the first letter of a string. In other words, you need to know what a string STARTS WITH.
 *
 * This quiz is worth 5 points.
 */

const copyData = data;
// Use const currentData = {...data} inside the function. This fixes the mutation.

const newData = copyData.map((copyData) => {
  if (copyData.name.startsWith("i")) {
    copyData.price = "$" + (copyData.price.slice(1) * 1.2).toFixed(2); // Keeps it as a string

    copyData.category = "Electronics - Apple";
  }

  return copyData;
});

console.log(newData);
