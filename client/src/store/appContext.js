import React, { useContext, useEffect, useReducer } from 'react';

import reducer from './reducer';
import axios from 'axios';
import {
  SETUP_PRODUCTS_BEGIN,
  SETUP_PRODUCTS_SUCCESS,
  HANDLE_FILTER_CHANGE,
  HANDLE_SORT_CHANGE,
  HANDLE_SEARCH_CHANGE,
  HANDLE_PAGE_CHANGE,
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
  search: '',
  numOfPages: null,
  page: 1,
};

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    const { color, brand, sort, search, page } = state;
    const URL = `/api/v1/products?page=${page}&color=${color}&brand=${brand}&sort=${sort}&search=${search}`;
    dispatch({ type: SETUP_PRODUCTS_BEGIN });
    try {
      const { data } = await axios(URL);
      console.log(data.numOfPages);
      dispatch({
        type: SETUP_PRODUCTS_SUCCESS,
        payload: {
          products: data.products,
          colorOptions: data.colorOptions,
          brandOptions: data.brandOptions,
          numOfPages: data.numOfPages,
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

  const handleSearchChange = (searchedValue) => {
    dispatch({ type: HANDLE_SEARCH_CHANGE, payload: { searchedValue } });
  };

  const handlePageChange = (page) => {
    dispatch({ type: HANDLE_PAGE_CHANGE, payload: { page } });
  };

  useEffect(() => {
    if (state.page > state.numOfPages) {
      handlePageChange(1);
    }
  }, [state.page, state.numOfPages]);

  useEffect(() => {
    getProducts();
  }, [state.color, state.brand, state.sort, state.search, state.page]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getProducts,
        handleFilterChange,
        handleSortChange,
        handleSearchChange,
        handlePageChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, AppContext, initialState };
