import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { SavedBookCard } from "./SavedBookCard";

const GET_SAVED_BOOKS = gql`
  query Query($username: String!) {
    getUsersSavedBooks(username: $username) {
      books {
        title
        id
        imageUrl
      }
    }
  }
`;

const DELETE_BOOK = gql`
  mutation Mutation($input: UserBooks) {
    deleteBook(input: $input) {
      books {
        id
        title
        imageUrl
      }
    }
  }
`;

export const SavedBookCards = () => {
  const { loading, error, data } = useQuery(GET_SAVED_BOOKS, {
    variables: { username: "tester" },
  });

  const [executeDeleteBook, deleteBookData] = useMutation(DELETE_BOOK);

  const onClickDeleteIcon = async (e) => {
    const id = e.currentTarget.id;
    console.log(id);
    await executeDeleteBook({
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
      {data?.getUsersSavedBooks?.books.map((book, index) => {
        return (
          <SavedBookCard
            {...book}
            key={index}
            onClickDeleteFuc={onClickDeleteIcon}
          />
        );
      })}
    </div>
  );
};
