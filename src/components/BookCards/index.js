import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useHomeContextValues } from "../../hooks";
import { BookCard } from "./BookCard";
import { useNavigate } from "react-router-dom";

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
  const { state, dispatch, ACTIONS, user, isLoggedIn } = useHomeContextValues();

  const [executeSaveBook, { data, loading, error }] = useMutation(SAVE_MY_BOOK);

  const navigate = useNavigate();

  const onClickSaveIcon = async (e) => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }

    const id = e.currentTarget.id;
    await executeSaveBook({
      variables: {
        input: {
          bookId: id,
          username: user.username,
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
