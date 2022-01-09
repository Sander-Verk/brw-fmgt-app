import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './app';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { msalConfig } from './authentication/authConfig';
import Translations from './translations';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  // uri: 'https://brw-fmgt-api.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

const msalInstance = new PublicClientApplication(msalConfig);

i18n
  .use(initReactI18next)
  .init({
    resources: Translations,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
