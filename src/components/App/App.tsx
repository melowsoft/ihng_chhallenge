import React, { useCallback, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { mockHCPs, generateNetworkData } from "../../data/mockData";
import { HCP, NetworkNode, NetworkLink } from "../../types/network.types";
import { AppContainer, MainContent, FilterContainer, GraphContainer, LinkTooltip } from "./styles";
import SearchPanel from "../SearchPanel";
import Filter from "../Filter";
import ProfileView from "../ProfileView";
import NetworkGraph from "../NetworkGraph/Index";

function App() {
  const [selectedHCP, setSelectedHCP] = useState<HCP | null>(null);
  const [showConnections, setShowConnections] = useState(true);
  const [hoveredLink, setHoveredLink] = useState<NetworkLink | null>(null);
  const [showConnectionOnTheMap, setShowConnectionOnTheMap] = useState(true);
  const [showProfilePanel, setShowProfilePanel] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<NetworkNode | null>(null);
  const [networkData, setNetworkData] = useState(() =>
    generateNetworkData("emily-carter")
  );

  const handleSearch = useCallback((hcp: HCP | null) => {
    setSelectedHCP(hcp);
    if (hcp) {
      setShowProfilePanel(true);
      setNetworkData(generateNetworkData(hcp.id));
    }
  }, []);

  const handleCreateWeb = useCallback(() => {
    console.log("Create Web button clicked");
  }, []);

  const handleToggleConnections = useCallback(() => {
    setShowConnections((prev) => !prev);
  }, []);

  const handleToggleConnectionsOnMap = useCallback(() => {
    setShowConnectionOnTheMap((prev) => !prev);
  }, []);

  const handleCloseProfile = useCallback(() => {
    setShowProfilePanel(false);
  }, []);

  const handleNodeClick = useCallback((node: NetworkNode) => {
    setSelectedHCP(node);
    setShowProfilePanel(true);
  }, []);

  const handleNodeHover = useCallback((node: NetworkNode | null) => {
    setHoveredNode(node);
  }, []);

  const handleLinkClick = useCallback((link: NetworkLink) => {
    console.log('Link clicked:', link);
  }, []);

  const handleLinkHover = useCallback((link: NetworkLink | null) => {
    setHoveredLink(link);
  }, []);

  return (
    <AppContainer>
      <Sidebar />

      <MainContent>
        <Header
          userName="Emily Carter"
          title="Cardiologist at NHOG"
          onCreateWeb={handleCreateWeb}
          showConnections={showConnections}
          showConnectionsOnMap={showConnectionOnTheMap}
          onToggleConnections={handleToggleConnections}
          onToggleConnectionsOnMap={handleToggleConnectionsOnMap}
        />

        <FilterContainer>
          <SearchPanel hcps={mockHCPs} onSearch={handleSearch} />
          <Filter />
        </FilterContainer>

        <GraphContainer>
            {showProfilePanel && (
              <ProfileView hcp={selectedHCP} onClose={handleCloseProfile} />
            )}
            <NetworkGraph
              data={networkData}
              selectedNode={selectedHCP?.id || null}
              onNodeClick={handleNodeClick}
              onNodeHover={handleNodeHover}
              onLinkClick={handleLinkClick}
              onLinkHover={handleLinkHover}
            />
            {hoveredLink && (
              <LinkTooltip>
                {hoveredLink.label}
              </LinkTooltip>
            )}
          </GraphContainer>
      </MainContent>
    </AppContainer>
  );
}

export default App;
