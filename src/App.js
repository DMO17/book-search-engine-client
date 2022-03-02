import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./AppRouter";

import { NavigationBar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
