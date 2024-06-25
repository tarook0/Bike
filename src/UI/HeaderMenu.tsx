import styled from "styled-components";
import ButtonIcon from './ButtonIcon';
import { HiOutlineUser } from "react-icons/hi";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "./Logout";
const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;
function HeaderMenu() {
  return <StyledHeaderMenu>
    <li>
        <ButtonIcon >
            <HiOutlineUser/>
        </ButtonIcon>
    </li>
    <li>
      <DarkModeToggle/>
    </li>
    <li>
        <Logout/>
    </li>

  </StyledHeaderMenu>;
}

export default HeaderMenu;
