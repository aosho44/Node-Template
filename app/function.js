const customer = {
  firstName: "Frank",
  lastName: "Smith",
  id: 1,
  phoneNumber: "555-555-555",
  email: "franksmith@gmail.com",
};

const product = { name: "", price: 5, description: "", quantity: 12 };

/**
 * TODOs:
 * 1. Create a greeting fxn.. We pass in a customer object and return a greeting string. Stretch goal: Use destructuring to get the firstName and lastName from the customer object.
 * 2. Create a fxn. that takes in a product and the desired quantity and returns the total price. Stretch goal: Use destructuring to 'cherry pick' only the 'quantity' and 'price' properties from the product object.
 * 3. Create a fxn. that takes in a customer and returns true if we have voff their email and the phone number. Stretch goal: Use destructuring to get the email and phoneNumber from the customer object.
 * 4. Write some other kind of useful fxn. with whatever data you want. Stretch goal: Use default values wherever it makes sense.
 */

const createGreeting = ({ firstName, lastName }) => {
  console.log(`Hello ${firstName} ${lastName}`);
};

createGreeting(customer);

const calcTotalPrice = ({ price, quantity }) => {
  const total = price * quantity;
  return `The total is £${total}`;
};

console.log(calcTotalPrice(product));

const checkEmailPhoneNumber = ({ phoneNumber, email }) => {
  if (!(phoneNumber === null && email === null)) {
    console.log(true);
  }
};

checkEmailPhoneNumber(customer);
