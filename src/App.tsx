import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/tailwind.css";
import ProtectedRoute from "./components/protectedRoutes";

// layouts
import Admin from "./layouts/admin";
import Auth from "./layouts/Auth";

// views without layouts
import Landing from "./views/Landing";
import Profile from "./views/Profile";
// import Index from "./views/Index";
import Login from "./components/login";
import UserList from "./components/UserList";

function app() {
    return(
        // ReactDOM.render(
          <BrowserRouter>
            <Switch>
              {/* add routes with layouts */}
              <ProtectedRoute path="/admin" component={Admin} />
              <ProtectedRoute path="/auth" component={Auth} />
              <ProtectedRoute path="/users/all" component={UserList} />
              {/* add routes without layouts */}
              <ProtectedRoute path="/landing" exact component={Landing} />
              <ProtectedRoute path="/profile" exact component={Profile} />
              <Route path="/" exact component={Login} />

              {/* add redirect for first page */}
              <Redirect from="*" to="/" />
            </Switch>
          </BrowserRouter>
        //   document.getElementById("root")
        );
}

export default app
