import { addCartItem } from "./Cart.Context";

const cartItems = [
  {
    id: 1,
    name: "Brown Brim",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    price: 25,
  },
  {
    id: 2,
    name: "Blue Beanie",
    imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    price: 18,
  },
  {
    id: 3,
    name: "Brown Cowboy",
    imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    price: 35,
  },
];

const item = {
  id: 4,
  name: "Grey Brim",
  imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
  price: 25,
};

describe("cart context tests", () => {
  it("adding a new item to cart", () => {
    const newCart = addCartItem(cartItems, item);
    expect(newCart.length).toBe(4);
  });
});
