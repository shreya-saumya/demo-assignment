export const getAllProductList = () => ({
  type: 'GET_ALL_PRODUCTS'
});

export const setProductValue = (data) => ({
  type: 'SET_CURRENT_PRODUCT_VALUE',

  payload: data
});
