/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import { UseOutSideClick } from "../hooks/useOutSideClick";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

interface StyledListProps {
  $position?: {
    x: any;
    y: any;
  };
}

const StyledList = styled.ul<StyledListProps>`
  position: fixed;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  right: ${(props) => props.$position?.x}px;
  top: ${(props) => props.$position?.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;
interface MenusContextType {
  openId: string;
  close: () => void;
  open: (id: string) => void;
  positions: { x: number; y: number } | null;
  setPositions: React.Dispatch<React.SetStateAction<{ x: number; y: number } | null>>;
}
const MenusContext = createContext<MenusContextType | undefined>(undefined);
function Menus({ children }:any) {
  const [positions, setPositions] = useState<{ x: number; y: number } | null>(null);
  const [openId, setOpenId] = useState<string | any>(undefined);

  const close = () => setOpenId("");
  const open = (id: string | undefined) => setOpenId(id || "");

  return (
    <MenusContext.Provider value={{ openId, close, open, positions, setPositions }}>
      {children}
    </MenusContext.Provider>
  );
}
function Toggle({ id }:any) {
  const { open, close, openId, setPositions }:any = useContext(MenusContext);
  function handelClick(e:any) {
    const rect = e.target.closest("button").getBoundingClientRect();
    setPositions({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    openId === "" || openId !== id ? open(id) : close();
  }
  return (
    <StyledToggle onClick={handelClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}
function List({ id, children }:any) {
  const { openId, positions, close }:any = useContext(MenusContext);
  const ref = UseOutSideClick(close) as React.RefObject<HTMLUListElement>;
  if (openId !== id) return null;
  return createPortal(
    <StyledList $position={positions} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}
function Button({ children, icon, onClick }:any) {
  const { close }:any = useContext(MenusContext);
  function handelClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <StyledButton onClick={handelClick}>
        {icon}
        <span> {children}</span>
      </StyledButton>
    </li>
  );
}
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.Button = Button;
Menus.List = List;

export default Menus;
