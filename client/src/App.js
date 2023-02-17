import "./App.css";
import Carddeck from "./components/Carddeck";
import Navbar from "./components/Navbar.js";
import { BrowserRouter } from "react-router-dom";
// import CreateContent from "./pages/CreateContent.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Carddeck />
        {/* <Route path="/" element={<CreateContent />} /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
