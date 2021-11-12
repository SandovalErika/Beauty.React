import stock from "./stock";

const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
      // reject("Rechazado")
    }, 2000);
  });
};

export default pedirProductos;
