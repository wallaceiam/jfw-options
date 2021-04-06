import React from "react";
import styled from "styled-components";

const SideNav = styled.div`
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
`;

interface INavbarContainer {
  children?: React.ReactNode;
}

export const NavbarContianer = ({ children }: INavbarContainer) => (
  <SideNav>{children}</SideNav>
);
