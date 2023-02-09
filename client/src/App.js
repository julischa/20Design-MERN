import "./App.css";
import DesignersList from "./components/DesignersList.js";
//import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  //NOTE NExt steps : build a component to display your list of designers (fetch(localhost:5002))
  //NOTE 2nd step :build the routing in your client.
  //NOTE 3rd step : create a new collection, build base url, route, model and controller.
  return (
    <div className="App">
      <DesignersList />
    </div>
  );
}

export default App;
