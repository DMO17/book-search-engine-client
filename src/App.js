import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./AppRouter";
import { PrivateNavigationBar } from "./components/Navbar/PrivateNavigationBar";
import { PublicNavigationBar } from "./components/Navbar/PublicNavigationBar";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomeProvider } from "./contexts/HomeProvider";
import { useHomeContextValues } from "./hooks";

const link = createHttpLink({
  uri: "http://localhost:4000/",
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
  // const { isLoggedIn } = useHomeContextValues();
  // console.log(isLoggedIn);
  return (
    <ApolloProvider client={client}>
      <HomeProvider>
        <BrowserRouter>
          {false ? <PrivateNavigationBar /> : <PublicNavigationBar />}
          <AppRouter />
        </BrowserRouter>
      </HomeProvider>
    </ApolloProvider>
  );
}

export default App;
