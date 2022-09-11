import { SETUP_PRODUCTS_BEGIN, SETUP_PRODUCTS_SUCCESS } from './actions';

import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === SETUP_PRODUCTS_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_PRODUCTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      products: action.payload.products,
    };
  }
  return { ...initialState };
};

export default reducer;
