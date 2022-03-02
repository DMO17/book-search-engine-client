import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useHomeContextValues } from "../../hooks";
import { BookCard } from "./BookCard";

const SAVE_MY_BOOK = gql`
  mutation Mutation($input: UserBooks) {
    savedBooks(input: $input) {
      books {
        id
        title
        imageUrl
      }
    }
  }
`;
export const BookCards = () => {
  const { state, dispatch, ACTIONS } = useHomeContextValues();

  const [executeSaveBook, { data, loading, error }] = useMutation(SAVE_MY_BOOK);

  const onClickSaveIcon = async (e) => {
    const id = e.currentTarget.id;
    console.log(id);
    await executeSaveBook({
      variables: {
        input: {
          bookId: id,
          username: "tester",
        },
      },
    });
  };

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {state.bookArray.map((book, index) => {
        return (
          <BookCard {...book} key={index} onClickSaveFuc={onClickSaveIcon} />
        );
      })}
    </div>
  );
};
