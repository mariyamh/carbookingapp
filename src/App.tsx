import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <div>
    <Switch>
      {/* If the current URL is /, this route is rendered
          while the rest are ignored */}
      <Route path="/login" component={Login}>
        <Login />
      </Route>

      <Route path="/register" component={Register}>
        <Register />
      </Route>
      <Route path="/reset-password" component={ResetPassword}>
        <ResetPassword />
      </Route>

      {/* If none of the previous routes render anything,
          this route acts as a fallback.

          Important: A route with path="/" will *always* match
          the URL because all URLs begin with a /. So that's
          why we put this one last of all */}
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
