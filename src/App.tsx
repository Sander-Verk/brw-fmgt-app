import './app.scss';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { LandingPage } from './authentication/components/landingPage/landingPage';
import AppLayoutContainer from './layout';

function App() {
  return (
    <Router>
      <AuthenticatedTemplate>
        <AppLayoutContainer></AppLayoutContainer>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <LandingPage></LandingPage>
      </UnauthenticatedTemplate>
    </Router>
  );
}

export default App;
