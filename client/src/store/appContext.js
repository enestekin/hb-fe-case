import React, { useContext, useEffect, useReducer } from 'react';

import reducer from './reducer';
import axios from 'axios';
import { SETUP_PRODUCTS_BEGIN, SETUP_PRODUCTS_SUCCESS } from './actions';

const initialState = {
  products: [],
  isLoading: false,
};

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    const URL = `/api/v1/products`;
    dispatch({ type: SETUP_PRODUCTS_BEGIN });
    try {
      const { data } = await axios(URL);
      dispatch({
        type: SETUP_PRODUCTS_SUCCESS,
        payload: {
          products: data.products,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log(state.products);

  return (
    <AppContext.Provider value={{ ...state, getProducts }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, AppContext, initialState };
