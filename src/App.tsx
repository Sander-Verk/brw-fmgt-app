import "./app.scss";
import {
  BrowserRouter as Router
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
        <div>Not authenticated</div>
      }
    </Router>
  );
}

export default App;
