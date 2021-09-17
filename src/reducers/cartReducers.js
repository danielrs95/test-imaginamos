import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

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

    case CART_REMOVE_ITEM:
      // action.payload == product.id, asi lo estamos enviando desde la accion

      const existRemove = state.cartItems.find((x) => x.id === action.payload);

      if (existRemove && existRemove.qty > 1) {
        // Si encuentra el producto en el cartItem lo reemplaza aumentando la cantidad en 1
        let newState = state.cartItems.map((x) =>
          x.id === action.payload
            ? { ...existRemove, qty: existRemove.qty - 1 }
            : x
        );

        return {
          cartItems: newState,
        };
      } else {
        /**
         * Como vamos a remover, vamos a filtrar el item que estamos removiendo
         * Vamos a filtrar todos los que el x.id no coincida con el payload
         */
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.id !== action.payload),
        };
      }

    default:
      return state;
  }
};
