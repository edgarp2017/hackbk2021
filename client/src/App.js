import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// imports pages
import Home from './components/pages/Home.js'
import Landing from './components/pages/Landing.js'
import Upload from './components/pages/Upload.js'
import About from './components/pages/About.js'
import Result from "./components/pages/Result.js";
import AddLocation from './components/pages/AddLocation.js'

//css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  localStorage.clear()
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Map" component={Home} />
          <Route exact path="/Upload" component={Upload} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Result" component={Result} />
          <Route exact path="/Add" component={AddLocation} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
