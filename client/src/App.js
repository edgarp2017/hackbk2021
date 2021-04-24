import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// imports pages
import Home from './components/pages/Home.js'
import Landing from './components/pages/Landing.js'
import Upload from './components/pages/Upload.js'
import About from './components/pages/About.js'

//css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Map" component={Home} />
          <Route exact path="/Upload" component={Upload} />
          <Route exact path="/About" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
