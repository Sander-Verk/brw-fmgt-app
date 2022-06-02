import "./app.scss";
import {
  BrowserRouter as Router, Redirect
} from "react-router-dom";
import AppLayoutContainer from "./layout";
import { useAuth } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();

  if (user) {
    localStorage.setItem("token", user.accessToken);
  }

  return (
    <Router>
      { isAuthenticated ?
        <AppLayoutContainer></AppLayoutContainer> :
        <Redirect to="/account/login" />
      }
    </Router>
  );
}

export default App;
