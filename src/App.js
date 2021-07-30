import './App.css';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SmallComponent, MediumComponent, HomeComponent, NotFound} from './components';

function App() {
  return (
      <div className="App">
      <header className="App-header">
        <Router>
          <Link to="/">Home</Link>
          <Link to="/small">Small</Link>
          <Link to="/medium">Medium</Link>
        <Switch>
          <Route exact path="/small" component={SmallComponent}></Route>
          <Route exact path="/medium" component={MediumComponent}></Route>
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact component={NotFound}></Route>
        </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App;
