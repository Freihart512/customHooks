function getPrice(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function formatProduct(unformattedProduct) {
  if (!unformattedProduct) {
    return null;
  }
  const formattedProduct = {
    _id: unformattedProduct.id,
    name: unformattedProduct.name,
    properties: unformattedProduct.data,
    img: "https://picsum.photos/200/300",
    price: getPrice(100, 5000),
  };
  return formattedProduct;
}
