import React from "react";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SIGNUP = gql`
  mutation Mutation($input: AddUserInput!) {
    addUser(input: $input) {
      user {
        id
        username
        email
      }
    }
  }
`;

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [executeSignUp, { data, loading, error }] = useMutation(SIGNUP);

  const navigate = useNavigate();

  const onSubmit = async ({ username, email, password }) => {
    await executeSignUp({
      variables: {
        input: {
          username,
          email,
          password,
        },
      },
    });

    if ((username, email, password)) {
      navigate("/login", { replace: true });
    }
  };

  return (
    <div>
      <div className="h1 text-center mt-5">SIGNUP FORM</div>
      <Container className="p-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              {...register("username", { required: true, minLength: 5 })}
            />
            {errors.username && "Username must have atleast 5 characters"}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                required: true,
              })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                maxLength: 20,
                minLength: 7,
              })}
            />
            {errors.password && "Password must have a 7 - 20 characters"}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};
