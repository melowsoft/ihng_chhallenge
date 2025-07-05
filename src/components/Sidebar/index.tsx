import React from "react";
import {
  SidebarContainer,
  MenuButton,
  MenuIcon,
  SidebarLogo,
  ExitButton,
  MenuItemsWrap,
  SidebarBottomWrap,
} from "./styles";
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
} from "phosphor-react";
import LOGO from "../../assets/images/logo_ihng.png";

const Sidebar: React.FC = () => {
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

  return (
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
  );
};

export default Sidebar;
