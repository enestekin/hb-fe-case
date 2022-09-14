import {
  SETUP_PRODUCTS_BEGIN,
  SETUP_PRODUCTS_SUCCESS,
  HANDLE_FILTER_CHANGE,
  HANDLE_SORT_CHANGE,
  HANDLE_SEARCH_CHANGE,
  HANDLE_PAGE_CHANGE,
} from './actions';

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
      colorOptions: action.payload.colorOptions,
      brandOptions: action.payload.brandOptions,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === HANDLE_FILTER_CHANGE) {
    if (
      !state[action.payload.filterOption].includes(action.payload.filteredValue)
    ) {
      const filteredArray = [
        ...state[action.payload.filterOption],
        action.payload.filteredValue,
      ];
      return {
        ...state,
        isLoading: false,
        [action.payload.filterOption]: filteredArray,
      };
    } else {
      const filteredArray = state[action.payload.filterOption].filter(
        (item) => item !== action.payload.filteredValue
      );
      return {
        ...state,
        isLoading: false,
        [action.payload.filterOption]: filteredArray,
      };
    }
  }
  if (action.type === HANDLE_SORT_CHANGE) {
    return {
      ...state,
      sort: action.payload.sortedValue,
    };
  }
  if (action.type === HANDLE_SEARCH_CHANGE) {
    return {
      ...state,
      search: action.payload.searchedValue,
    };
  }
  if (action.type === HANDLE_PAGE_CHANGE) {
    return {
      ...state,
      page: action.payload.page,
    };
  }
  return { ...initialState };
};

export default reducer;
