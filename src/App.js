import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Protected from "./components/pages/Protected";
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import Data from './components/pages/Data';
import Auth from './components/pages/Auth';
import Login from './components/pages/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          {/* <Route exact path="/" component={Home} />*/}
          <Route exact path="/">
            <Protected cmp={Home} />
          </Route>

          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/about">
            <Protected cmp={About} />
          </Route>
          {/* <Route exact path="/data" component={Data} />*/}
          <Route exact path="/data">
            <Protected cmp={Data} />
          </Route>

          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Auth} />
          <Route component={NotFound} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
