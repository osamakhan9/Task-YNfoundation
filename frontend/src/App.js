import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/All_Small.page/Navbar";
import Home from "./components/Page/Home";
import All_Route from "./components/Router/All_Route";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <All_Route/>
    </div>  
  );
}

export default App;
