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

const productAndPrice = products.map((newProducts) => {
  const currentProducts = { ...products };
  return `<tr><td>${newProducts.name}</td><td>${newProducts.price}</td></tr>`;
});

// console.log(productAndPrice);

const filterInStock = products
  .filter(({ stocked }) => stocked)
  .map((product) => {
    const quantity100 = { ...product };
    quantity100.quantity = 100;
    return quantity100;
  });

console.log(filterInStock);
