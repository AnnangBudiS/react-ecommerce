import { createContext, useContext, useReducer } from "react";

const CartCtxt = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

const cartReducer = (state, action) => {
  // add item to cart
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...state.items[existingCartItemIndex],
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  // removeItem from cart
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedUItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedUItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedUItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedUItems };
  }

  // clear cart
  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
};

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  function addItem(item) {
    dispatch({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", id });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  const values = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  return <CartCtxt.Provider value={values}>{children}</CartCtxt.Provider>;
}

export function useCart() {
  return useContext(CartCtxt);
}
