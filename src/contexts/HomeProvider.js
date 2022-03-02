import React, { useReducer } from "react";

export const HomeContext = React.createContext();

const initialState = {
  bookArray: [],
};

const ACTIONS = {
  BOOK_API_CALL: "MAKE-BOOK-API-CALL",
};

const reducer = (state, action) => {
  if (action.type === ACTIONS.BOOK_API_CALL) {
    return {
      ...state,

      bookArray: action.payload.bookData,
    };
  }
};

export const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const globalHomeValues = {
    dispatch,
    state,
    ACTIONS,
  };

  return (
    <HomeContext.Provider value={globalHomeValues}>
      {children}
    </HomeContext.Provider>
  );
};
