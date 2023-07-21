import React, { createContext, useContext, useEffect, useReducer } from 'react';

const initialState = {
  items: null,
  isLoading: false,
  error: null,
};

const actions = {
  FETCH_DATA_START: 'FETCH_DATA_START',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.FETCH_DATA_START:
      return { ...state, isLoading: true, error: null };
    case actions.FETCH_DATA_SUCCESS:
      return { ...state, items: action.payload, isLoading: false };
    case actions.FETCH_DATA_ERROR:
      return { ...state, error: action.payload, isLoading: false };
      case actions.DELETE_PRODUCT:
        console.log(state, "TEST22222");
        return {
          ...state,
          items: state.items.filter((product) => product.id !== action.payload),
        };
    default:
      console.log(state, "TEST111");
      return state;
  }
};

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: actions.FETCH_DATA_START });

      try {
        const response = await fetch('https://dummyjson.com/products');
        const items = await response.json();
        dispatch({ type: actions.FETCH_DATA_SUCCESS, payload: items.products });
      } catch (error) {
        dispatch({ type: actions.FETCH_DATA_ERROR, payload: error.message });
      }


    };
    fetchData();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`,
        {
          method: 'DELETE',
        }
      );
      const items = await response.json();
      dispatch({ type: actions.DELETE_PRODUCT, payload: productId });
      console.log(items.id);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <StoreContext.Provider value={{ state, dispatch, deleteProduct }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);