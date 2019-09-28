import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import Exercise1 from './exercises/exercise1';
import Exercise2 from './exercises/exercise2';
import Exercise3 from './exercises/exercise3';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <h1>Awesome Learning</h1>
        <h2>React Hooks</h2>
        <nav className="App-nav">
          <NavLink
            activeClassName="App-navLink--isActive"
            className="App-navLink"
            to="/exercise1"
          >
            Exercise 1
          </NavLink>
          <NavLink
            activeClassName="App-navLink--isActive"
            className="App-navLink"
            to="/exercise2"
          >
            Exercise 2
          </NavLink>
          <NavLink
            activeClassName="App-navLink--isActive"
            className="App-navLink"
            to="/exercise3"
          >
            Exercise 3
          </NavLink>
        </nav>
        <hr className="Divider" />
        <Switch>
          <Route
            exact
            path="/exercise1"
            component={Exercise1}
          />
          <Route
            exact
            path="/exercise2"
            component={Exercise2}
          />
          <Route
            exact
            path="/exercise3"
            component={Exercise3}
          />
          {/* Initial route */}
          <Route
            component={Exercise1}
          />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById(
  'root',
);
ReactDOM.render(<App />, rootElement);
