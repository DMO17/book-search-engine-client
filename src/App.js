import "bootstrap/dist/css/bootstrap.min.css";
import { BookCards } from "./components/BookCards";

import { NavigationBar } from "./components/Navbar";

function App() {
  return (
    <>
      <NavigationBar />
      <BookCards />
    </>
  );
}

export default App;
