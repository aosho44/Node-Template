const products = [
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
 * TODO: Use map to take each product and the price and output an array of HTML like this one: <tr><td>Product Name</td><td>$49.99</td></tr>.
 *
 * HINT: Use template literals and interpolation.
 *
 * You may consult MDN for more information on <tr> and <td>, although, it's not really pertinent to this exercise.
 */

/**
 * TODO: Write a filter that returns an array of all in stock products.
 */

// Quiz will be worth 10 points. Scores will be shared with Rubik as a metric for their records.

const productAndPrice = products.map((newProducts) => {
  const currentProducts = { ...products };
  return `<tr><td>${newProducts.name}</td><td>${newProducts.price}</td></tr>`;
});

console.log(productAndPrice);

const filterInStock = products.filter((product) => {
  if (product.stocked === true) {
    return product.stocked;
  }
});

console.log(filterInStock);
