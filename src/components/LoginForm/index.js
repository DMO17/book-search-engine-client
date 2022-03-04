import React, { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import { useHomeContextValues } from "../../hooks";

const LOGIN = gql`
  mutation Mutation($input: UserLoginInput) {
    loginUser(input: $input) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [executeLogin, { data, loading, error }] = useMutation(LOGIN);

  const { setIsLoggedIn, setUser } = useHomeContextValues();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      const { token, user } = data.loginUser;

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setIsLoggedIn(true);
      setUser({
        id: user.id,
        email: user.email,
        username: user.username,
      });

      navigate("/", { replace: true });
    }
  }, [data]);

  const onSubmit = async (data) => {
    await executeLogin({
      variables: {
        input: {
          email: data.userEmail,
          password: data.userPassword,
        },
      },
    });
  };

  return (
    <div>
      <div className="h1 text-center mt-5">LOGIN FORM</div>
      <Container className="mt-3 p-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("userEmail", {
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
              {...register("userPassword", {
                required: true,
                maxLength: 20,
                minLength: 7,
              })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {Object.keys(errors).length !== 0 && (
          <Alert variant={"warning"} className="text-center mt-5">
            Failed to Login, please provide a correct email or password
          </Alert>
        )}
      </Container>
    </div>
  );
};
