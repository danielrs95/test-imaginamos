import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart =
  (product, qty = 1) =>
  (dispatch, getState) => {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: qty,
      },
    });
  };
