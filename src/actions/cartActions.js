import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = () => (dispatch) => {
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: 2,
      name: 'Desayuno de primer plano lácteos',
      qualification: 4.7,
      time: '20-25min',
      price: 9.99,
      image: '/images/pexels-photo-376464.jpeg',
    },
  });
};
