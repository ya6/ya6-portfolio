/* eslint-disable linebreak-style */ import { useEffect } from "react";
import Layout from "./pages/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { route } from "./config/config";

import { AppStateProvider } from "./state/app-state";
import appStateReducer from "./state/appStateReducer";
import initialAppState from "./state/initialAppState";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(route.HOME);
  }, []);

  return <Layout />;
};

export default () => (
  <AppStateProvider reducer={appStateReducer} initialState={initialAppState}>
    <App />
  </AppStateProvider>
);
