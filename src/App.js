import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./AppRouter";
import { NavigationBar } from "./components/Navbar";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <NavigationBar />
        <AppRouter />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
