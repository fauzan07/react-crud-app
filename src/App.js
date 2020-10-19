import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Post from "./pages/Posts/Post";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import { AuthProvider } from './context/Auth';
import PrivateRoute from './common/guards/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path='/Post' component={Post} />
          <Route path="/LoginRegister" component={LoginRegister} />
          <Route exact path="*" component={Home} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
