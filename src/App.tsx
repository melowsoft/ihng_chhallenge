import React, { useCallback, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [showConnections, setShowConnections] = useState(true);
  const [showConnectionOnTheMap, setShowConnectionOnTheMap] = useState(true);

  const handleCreateWeb = useCallback(() => {
    console.log("Create Web button clicked");
  }, []);

  const handleToggleConnections = useCallback(() => {
    setShowConnections((prev) => !prev);
  }, []);

  const handleToggleConnectionsOnMap = useCallback(() => {
    setShowConnectionOnTheMap((prev) => !prev);
  }, []);

  return (
    <div>
      <GlobalStyles />
      <Header
        userName="Emily Carter"
        title="Cardiologist at NHOG"
        onCreateWeb={handleCreateWeb}
        showConnections={showConnections}
        showConnectionsOnMap={showConnectionOnTheMap}
        onToggleConnections={handleToggleConnections}
        onToggleConnectionsOnMap={handleToggleConnectionsOnMap}
      />
    </div>
  );
}

export default App;
