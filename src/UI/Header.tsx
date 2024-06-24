import styled from "styled-components";
import Heading from "./Heading";
import Row from "./Row";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap:2.4rem;
  align-items: center;
  justify-content: flex-end;
`;
function Header() {
  return (
    <StyledHeader>
        <Row type="horizontal">
        <Heading as="h1">All Bikes</Heading>
      </Row>
    </StyledHeader>
  );
}

export default Header;
