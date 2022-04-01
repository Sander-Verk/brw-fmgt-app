import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import App from "./app";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Translations from "./translations";
import { FronteggProvider } from "@frontegg/react";

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
  // uri: 'https://brw-fmgt-api.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const contextOptions = {
  baseUrl: "https://app-grh37bz1gon0.frontegg.com",
};

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
      <FronteggProvider contextOptions={contextOptions}>
        <App />
      </FronteggProvider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
