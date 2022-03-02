import React from "react";
import { useHomeContextValues } from "../../hooks";
import { BookCard } from "./BookCard";
export const BookCards = () => {
  const { state } = useHomeContextValues();
  console.log(state.bookArray, "eriubgeruagb");
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {state.bookArray.map((book, index) => {
        return <BookCard {...book} key={index} />;
      })}
    </div>
  );
};
