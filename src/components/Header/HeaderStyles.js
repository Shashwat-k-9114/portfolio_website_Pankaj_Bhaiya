import styled from 'styled-components';
import { IoIosArrowDropdown } from 'react-icons/io';

// Container and layout
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
    width: 100%;
  }
`;

// Hamburger Menu
export const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;

// Dropdown section
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  background: none;
  font-size: 1.7rem;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 15px;
    margin-top: 2px;
  }
`;

// Nav Link
export const NavLink = styled.a`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.85);
  transition: 0.4s ease;

  &:hover {
    color: #fff;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1rem;
  }
`;

// Social Icons
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
