import reducer from '../store/reducer';
import { initialState } from '../store/appContext';

test('should return the state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should handle SETUP_PRODUCTS_BEGIN', () => {
  const action = {
    type: 'SETUP_PRODUCTS_BEGIN',
  };
  const state = {
    isLoading: false,
  };
  const expected = {
    isLoading: true,
  };
  expect(reducer(state, action)).toEqual(expected);
});

test('should handle SETUP_PRODUCTS_SUCCESS', () => {
  const action = {
    type: 'SETUP_PRODUCTS_SUCCESS',
    payload: {
      products: [
        {
          id: 1,
          name: 'Test Product 1',
          brand: 'Test Brand 1',
          color: 'Test Color 1',
          price: 1,
          image: 'Test Image 1',
        },
        {
          id: 2,
          name: 'Test Product 2',
          brand: 'Test Brand 2',
          color: 'Test Color 2',
          price: 2,
          image: 'Test Image 2',
        },
      ],
      colorOptions: ['Test Color 1', 'Test Color 2'],
      brandOptions: ['Test Brand 1', 'Test Brand 2'],
      numOfPages: 2,
    },
  };
  const state = {
    isLoading: true,
  };
  const expected = {
    isLoading: false,
    products: [
      {
        id: 1,
        name: 'Test Product 1',
        brand: 'Test Brand 1',
        color: 'Test Color 1',
        price: 1,
        image: 'Test Image 1',
      },
      {
        id: 2,
        name: 'Test Product 2',
        brand: 'Test Brand 2',
        color: 'Test Color 2',
        price: 2,
        image: 'Test Image 2',
      },
    ],
    colorOptions: ['Test Color 1', 'Test Color 2'],
    brandOptions: ['Test Brand 1', 'Test Brand 2'],
    numOfPages: 2,
  };
  expect(reducer(state, action)).toEqual(expected);
});

test('should add filtered value to array if it is not already in array HANDLE_FILTER_CHANGE', () => {
  const action = {
    type: 'HANDLE_FILTER_CHANGE',
    payload: {
      filterOption: 'color',
      filteredValue: 'color3',
    },
  };
  const state = {
    isLoading: false,
    [action.payload.filterOption]: ['color1', 'color2'],
  };
  const expected = {
    isLoading: false,
    [action.payload.filterOption]: ['color1', 'color2', 'color3'],
  };
  expect(reducer(state, action)).toEqual(expected);
});

test('should delete filtered value from array if it is already in array HANDLE_FILTER_CHANGE', () => {
  const action = {
    type: 'HANDLE_FILTER_CHANGE',
    payload: {
      filterOption: 'color',
      filteredValue: 'color3',
    },
  };
  const state = {
    isLoading: false,
    [action.payload.filterOption]: ['color1', 'color2', 'color3'],
  };
  const expected = {
    isLoading: false,
    [action.payload.filterOption]: ['color1', 'color2'],
  };
  expect(reducer(state, action)).toEqual(expected);
});

test('should handle HANDLE_SORT_CHANGE if sort is empty', () => {
  const action = {
    type: 'HANDLE_SORT_CHANGE',
    payload: {
      sortedValue: 'asc',
    },
  };
  const state = {
    sort: '',
  };
  const expected = {
    sort: 'asc',
  };
  expect(reducer(state, action)).toEqual(expected);
});

test('should handle HANDLE_SORT_CHANGE if sort is not empty', () => {
  const action = {
    type: 'HANDLE_SORT_CHANGE',
    payload: {
      sortedValue: 'asc',
    },
  };
  const state = {
    sort: 'desc',
  };
  const expected = {
    sort: 'asc',
  };
  expect(reducer(state, action)).toEqual(expected);
});

test('should handle HANDLE_SEARCH_CHANGE', () => {
  const action = {
    type: 'HANDLE_SEARCH_CHANGE',
    payload: {
      searchedValue: 'search',
    },
  };
  const state = {
    search: '',
  };
  const expected = {
    search:
      action.payload.searchedValue.length > 2
        ? action.payload.searchedValue
        : '',
  };
  expect(reducer(state, action)).toEqual(expected);
});

test('should handle HANDLE_PAGE_CHANGE', () => {
  const action = {
    type: 'HANDLE_PAGE_CHANGE',
    payload: {
      page: 2,
    },
  };
  const state = {
    page: 1,
  };
  const expected = {
    page: action.payload.page,
  };
  expect(reducer(state, action)).toEqual(expected);
});

test('should handle SETUP_BASKET', () => {
  const action = {
    type: 'SETUP_BASKET',
    payload: {
      basket: [
        {
          id: 1,
          name: 'Test Product 1',
          brand: 'Test Brand 1',
          color: 'Test Color 1',
          price: 1,
          image: 'Test Image 1',
        },
        {
          id: 2,
          name: 'Test Product 2',
          brand: 'Test Brand 2',
          color: 'Test Color 2',
          price: 2,
          image: 'Test Image 2',
        },
      ],
    },
  };
  const state = {
    basket: [],
  };
  const expected = {
    basket: [
      {
        id: 1,
        name: 'Test Product 1',
        brand: 'Test Brand 1',
        color: 'Test Color 1',
        price: 1,
        image: 'Test Image 1',
      },
      {
        id: 2,
        name: 'Test Product 2',
        brand: 'Test Brand 2',
        color: 'Test Color 2',
        price: 2,
        image: 'Test Image 2',
      },
    ],
  };
  expect(reducer(state, action)).toEqual(expected);
});
