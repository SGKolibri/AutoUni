import { useState } from "react";
import { HomeProvider } from "./contexts/HomeContext";
import Layout from "./components/Layout/Layout";
import HomeView from "./components/Home/HomeView";
import AutomationView from "./components/Automation/AutomationView";

function App() {
  const [currentView, setCurrentView] = useState<"home" | "automation">("home");

  return (
    <HomeProvider>
      <Layout currentView={currentView} onViewChange={setCurrentView}>
        {currentView === "home" ? <HomeView /> : <AutomationView />}
      </Layout>
    </HomeProvider>
  );
}

export default App;
