import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./AppRouter";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomeProvider } from "./contexts/HomeProvider";
import { AppNavigationBar } from "./components/Navbar/AppNavbar";

const link = createHttpLink({
  uri: process.env.GRAPHQL || "http://localhost:4000/",
  credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <HomeProvider>
        <BrowserRouter>
          <AppNavigationBar />
          <AppRouter />
        </BrowserRouter>
      </HomeProvider>
    </ApolloProvider>
  );
}

export default App;
