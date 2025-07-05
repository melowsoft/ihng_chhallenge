import React, { useCallback, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

import { AppContainer } from "./styles";

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
    <AppContainer>
      <Sidebar />
      <Header
        userName="Emily Carter"
        title="Cardiologist at NHOG"
        onCreateWeb={handleCreateWeb}
        showConnections={showConnections}
        showConnectionsOnMap={showConnectionOnTheMap}
        onToggleConnections={handleToggleConnections}
        onToggleConnectionsOnMap={handleToggleConnectionsOnMap}
      />
    </AppContainer>
  );
}

export default App;
