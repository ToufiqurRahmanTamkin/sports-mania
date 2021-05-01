import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import TeamDetails from './Component/TeamDetails/TeamDetails';
import NotMatched from './Component/NotMatched/NotMatched';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
             <Home/>
          </Route>
          <Route exact path="/home">
             <Home/>
          </Route>
          <Route  path="/teamDetails/:id">
             <TeamDetails></TeamDetails>
          </Route>
          <Route path="*">
            <NotMatched/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
