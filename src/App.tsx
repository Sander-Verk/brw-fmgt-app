import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TruckOverviewContainer from './components/truckOverview';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <div>
              <h1>About</h1>
            </div>
          </Route>
          <Route path="/">
            <TruckOverviewContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
