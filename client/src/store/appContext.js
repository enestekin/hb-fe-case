import React, { useContext, useEffect, useReducer } from 'react';

import reducer from './reducer';
import axios from 'axios';
import {
  SETUP_PRODUCTS_BEGIN,
  SETUP_PRODUCTS_SUCCESS,
  HANDLE_FILTER_CHANGE,
  HANDLE_SORT_CHANGE,
} from './actions';

const initialState = {
  products: [],
  isLoading: false,
  colorOptions: null,
  brandOptions: null,
  sortOptions: [
    { name: 'asc', text: 'En Düşük Fiyat' },
    { name: 'desc', text: 'En Yüksek Fiyat' },
    { name: 'newestaz', text: 'En Yeniler (AZ)' },
    { name: 'newestza', text: 'En Yeniler (ZA)' },
  ],
  color: [],
  brand: [],
  sort: '',
};

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    const { color, brand, sort } = state;
    const URL = `/api/v1/products?color=${color}&brand=${brand}&sort=${sort}`;
    dispatch({ type: SETUP_PRODUCTS_BEGIN });
    try {
      const { data } = await axios(URL);
      dispatch({
        type: SETUP_PRODUCTS_SUCCESS,
        payload: {
          products: data.products,
          colorOptions: data.colorOptions,
          brandOptions: data.brandOptions,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterChange = ({ filterOption, filteredValue }) => {
    dispatch({
      type: HANDLE_FILTER_CHANGE,
      payload: { filterOption, filteredValue },
    });
  };

  const handleSortChange = (sortedValue) => {
    dispatch({ type: HANDLE_SORT_CHANGE, payload: { sortedValue } });
  };

  useEffect(() => {
    getProducts();
  }, [state.color, state.brand, state.sort]);

  return (
    <AppContext.Provider
      value={{ ...state, getProducts, handleFilterChange, handleSortChange }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, AppContext, initialState };
