import React from "react";
import { gql, useQuery } from "@apollo/client";
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

export const SavedBookCards = () => {
  const { loading, error, data } = useQuery(GET_SAVED_BOOKS, {
    variables: { username: "tester" },
  });

  console.log(data);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {data?.getUsersSavedBooks?.books.map((book, index) => {
        return <SavedBookCard {...book} key={index} />;
      })}
    </div>
  );
};
