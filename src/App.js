import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./AppRouter";
import { PrivateNavigationBar } from "./components/Navbar/PrivateNavigationBar";
import { PublicNavigationBar } from "./components/Navbar/PublicNavigationBar";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function App() {
  const user = false;
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        {user ? <PrivateNavigationBar /> : <PublicNavigationBar />}
        <AppRouter />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
