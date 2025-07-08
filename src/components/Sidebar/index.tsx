import React, { useState } from "react";
import {
  MagnifyingGlass,
  User,
  ChatCircleText,
  Bell,
  BookBookmark,
  CalendarBlank,
  Medal,
  Cube,
  CreditCard,
  Gear,
  SignOut,
  List,
  X,
} from "phosphor-react";
import {
  SidebarContainer,
  MobileMenuButton,
  SidebarLogo,
  MenuItemsWrap,
  MenuButton,
  MenuIcon,
  SidebarBottomWrap,
  ExitButton,
  MobileSidebarOverlay,
  MobileSidebarContent,
} from "./styles";
import LOGO from "../../assets/images/logo_ihng.png";

const menuItems = [
  { icon: <MagnifyingGlass color="grey" />, label: "Search", active: true },
  { icon: <User color="grey" />, label: "Profile", active: false },
  { icon: <ChatCircleText color="grey" />, label: "Messages", active: false },
  { icon: <Bell color="grey" />, label: "Notification", active: false },
  { icon: <BookBookmark color="grey" />, label: "Bookmark", active: false },
  { icon: <CalendarBlank color="grey" />, label: "Calender", active: false },
  { icon: <Medal color="grey" />, label: "Award", active: false },
  {
    icon: <MagnifyingGlass color="grey" />,
    label: "Advanced Search",
    active: false,
  },
  { icon: <Cube color="grey" />, label: "Packages", active: false },
  { icon: <CreditCard color="grey" />, label: "Account", active: false },
  { icon: <Gear color="grey" />, label: "Settings", active: false },
];

const Sidebar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      <SidebarContainer>
        <SidebarLogo src={LOGO} alt="IHNG Logo" />
        <MenuItemsWrap>
          {menuItems.map((item, index) => (
            <MenuButton
              key={index}
              active={item.active}
              title={item.label}
              aria-label={item.label}
            >
              <MenuIcon>{item.icon}</MenuIcon>
            </MenuButton>
          ))}
        </MenuItemsWrap>

        <SidebarBottomWrap>
          <ExitButton>
            <SignOut color="grey" size={24} />
          </ExitButton>
        </SidebarBottomWrap>
      </SidebarContainer>

      <MobileMenuButton onClick={toggleMobileMenu}>
        {isMobileOpen ? <X size={24} /> : <List size={24} />}
      </MobileMenuButton>

      {isMobileOpen && <MobileSidebarOverlay onClick={toggleMobileMenu} />}

      <MobileSidebarContent isOpen={isMobileOpen}>
        <SidebarLogo src={LOGO} alt="IHNG Logo" />
        <MenuItemsWrap>
          {menuItems.map((item, index) => (
            <MenuButton
              key={index}
              active={item.active}
              title={item.label}
              aria-label={item.label}
              onClick={toggleMobileMenu}
            >
              <MenuIcon>{item.icon}</MenuIcon>
              <span>{item.label}</span>
            </MenuButton>
          ))}
        </MenuItemsWrap>

        <SidebarBottomWrap>
          <ExitButton onClick={toggleMobileMenu}>
            <SignOut color="grey" size={24} />
          </ExitButton>
        </SidebarBottomWrap>
      </MobileSidebarContent>
    </>
  );
};

export default Sidebar;
