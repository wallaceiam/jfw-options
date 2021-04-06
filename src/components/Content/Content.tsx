import React from "react";
import styled from "styled-components";

const Content = styled.div`
  margin-left: 200px;
  padding-left: 20px;
`;

interface IContentContainer {
  children?: React.ReactNode;
}

export const ContentContianer = ({ children }: IContentContainer) => (
  <Content>{children}</Content>
);
