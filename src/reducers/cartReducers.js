import { CART_ADD_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      // ejemplo del action.payload
      //   const payload  = {
      //   id: product.id,
      //   name: product.name,
      //   price: product.price,
      //   image: product.image,
      //   qty,
      // },

      const product = action.payload;

      // Buscamos si el item ya está en el cartItems, en caso de que esté le sumamos 1 al qty
      const exist = state.cartItems.find((x) => x.id === product.id);

      if (exist) {
        // Si encuentra el producto en el cartItem lo reemplaza aumentando la cantidad en 1
        let newState = state.cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        );

        return {
          cartItems: newState,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, product],
        };
      }

    default:
      return state;
  }
};
