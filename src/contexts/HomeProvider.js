import React, { useReducer, useState } from "react";

export const HomeContext = React.createContext();

const initialState = {
  bookArray: [],
  savedBookId: "",
};

const ACTIONS = {
  BOOK_API_CALL: "MAKE-BOOK-API-CALL",
  SAVE_BOOK_ID: "CHOSEN BOOK ID",
};

const reducer = (state, action) => {
  if (action.type === ACTIONS.BOOK_API_CALL) {
    return {
      ...state,

      bookArray: action.payload.bookData,
    };
  }

  if (action.type === ACTIONS.SAVE_BOOK_ID) {
    return { ...state, savedBookId: action.payload };
  }
};

export const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token") || false
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || undefined
  );

  const globalHomeValues = {
    dispatch,
    state,
    ACTIONS,
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
  };

  return (
    <HomeContext.Provider value={globalHomeValues}>
      {children}
    </HomeContext.Provider>
  );
};
