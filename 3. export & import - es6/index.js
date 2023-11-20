import coffeeStock from './state.js';

const displayStock = (stock) => {
  for (let listStock in stock) {
    console.log(listStock);
  }
};

displayStock(coffeeStock);
