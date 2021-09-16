import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      // action.payload
      //   const payload  = {
      //   id: product.id,
      //   name: product.name,
      //   price: product.price,
      //   image: product.image,
      //   qty,
      // },

      const product = action.payload;

      // Buscamos si el item ya está en el cartItems, en caso de que esté le sumamos 1 al qty
      const productOnCart = state.cartItems.find((x) => x.id === product.id);

      if (productOnCart) {
        let plusQty = { ...productOnCart, qty: product.qty + 1 };

        let newState = state.cartItems.map((x) =>
          x.id === product.id ? plusQty : x
        );

        console.log(newState);

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
