import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home-page/Home';
import SkillsPage from './components/pages/skills-page/SkillsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/skills" component={SkillsPage} />
      </Switch>
    </Router>
  );
}

export default App;
