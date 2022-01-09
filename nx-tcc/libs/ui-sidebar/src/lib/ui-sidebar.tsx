import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiSidebarProps {}

const StyledUiSidebar = styled.div`
  color: pink;
`;

export function UiSidebar(props: UiSidebarProps) {
  return (
    <StyledUiSidebar>
      <h1>Welcome to UiSidebar!</h1>
    </StyledUiSidebar>
  );
}

export default UiSidebar;
