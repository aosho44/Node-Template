const customer = {
  firstName: "Ayo",
  lastName: "Osho",
  id: 1,
  phoneNumber: "07887244055",
  email: "aosho44@gmail.com",

  address: {
    street: "Maximfeldt Road",
    city: "London",
    state: "Erith",
    zipCode: "DA8 1AH",
  },
};

console.log(`Welcome ${customer.firstName} ${customer.lastName}`);

const product = {
  name: "Apple",
  price: 4,
  description: "Sweet royal gala apples",
  quantity: 4,
};

const total = product.price * product.quantity;

console.log(`Total: £${total}`);

const price = 130;

if (price > 100) {
  console.log(true);
} else {
  console.log(false);
}
