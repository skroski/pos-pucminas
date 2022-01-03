import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PageTitleProps {}

const StyledPageTitle = styled.div`
  color: pink;
`;

export function PageTitle(props: PageTitleProps) {
  return (
    <StyledPageTitle>
      <h1>Welcome to PageTitle 2!</h1>
    </StyledPageTitle>
  );
}

export default PageTitle;
