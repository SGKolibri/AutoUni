import React from "react";
import { HomeProvider } from "./contexts/HomeContext";
import Layout from "./components/Layout/Layout";
import HomeView from "./components/Home/HomeView";

function App() {
  return (
    <HomeProvider>
      <Layout>
        <HomeView />
      </Layout>
    </HomeProvider>
  );
}

export default App;
