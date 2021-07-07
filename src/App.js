import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarPage from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarPage />
        <Router>
          
        </Router>
      </div>
    );
  }
}
export default App;
