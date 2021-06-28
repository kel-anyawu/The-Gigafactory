import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Store from "./Components/Store";
import Footer from "./Components/Footer";
import background from "./images/wood.jpg";
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
        <div className="App" style={{ backgroundImage: `url(${background})` }}>
          <Route component={Header} />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Products" component={Products} />
          <Route path="/Store" component={Store} />
          <Route component={Footer} />
        </div>
    </Router>
  )
}

export default App;
