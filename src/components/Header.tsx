"use client";
import Link from "next/link";
import styled, { css } from "styled-components";
import { usePathname } from "next/navigation";
import { useState } from "react";

const StyledHeader = styled.header`
  background: rgba(22, 28, 44, 0.98);
  box-shadow: 0 2px 16px #23263a55;
  position: sticky;
  top: 0;
  z-index: 9999;
  padding: 0.5rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 600px) {
    padding: 10px 8px;
  }
`;
const Logo = styled(Link)<{ $mobileNavActive?: boolean }>`
  color: #b3c0e6;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #b3c0e6 30%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: opacity 0.3s;
  opacity: ${({ $mobileNavActive }) => ($mobileNavActive ? 0 : 1)};
  pointer-events: ${({ $mobileNavActive }) => ($mobileNavActive ? 'none' : 'auto')};
  z-index: 3;
`;
const StyledNav = styled.nav<{ $mobileNavActive: boolean }>`
  display: ${({ $mobileNavActive }) => ($mobileNavActive ? "block" : "none")};
  gap: 20px;
  position: fixed;
  top: 0;
  right: 0;
  width: 70vw;
  height: 100vh;
  background: rgba(22, 28, 44, 0.98);
  padding: 80px 20px 20px;
  transition: all 0.3s ease;
  transform: ${({ $mobileNavActive }) =>
    $mobileNavActive ? "translateX(0)" : "translateX(100%)"};
  box-shadow: ${({ $mobileNavActive }) =>
    $mobileNavActive ? "-5px 0 15px rgba(0,0,0,0.2)" : "none"};
  z-index: 1000;
  @media (min-width: 800px) {
    display: flex;
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    transform: translateX(0);
    background: transparent;
    box-shadow: none;
  }
`;
const navLinkStyles = css<{ $active?: boolean }>`
  color: #b3c0e6;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 16px 0;
  min-height: 48px;
  display: block;
  transition: color 0.3s, background 0.2s;
  ${({ $active }) =>
    $active &&
    css`
      color: #60a5fa;
      background: #23263a;
      font-weight: 800;
      border-radius: 0.5rem;
    `}
  &:hover {
    color: #ff9900;
    background: #23263a;
  }
  @media (min-width: 800px) {
    padding: 0;
    margin: 0 15px;
    min-height: unset;
    display: inline-block;
    border-radius: 0.5rem;
  }
`;
const NavLink = styled(Link)<{ $active?: boolean }>`
  ${navLinkStyles}
`;
const Hamburger = styled.button<{ $open: boolean }>`
  display: block;
  background: none;
  border: none;
  color: #b3c0e6;
  width: 44px;
  height: 44px;
  cursor: pointer;
  z-index: 1100;
  margin-left: 1rem;
  position: relative;
  @media (min-width: 800px) {
    display: none;
  }
  span {
    display: block;
    position: absolute;
    left: 8px;
    width: 28px;
    height: 4px;
    background: #b3c0e6;
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(.4,0,.2,1);
  }
  span:nth-child(1) {
    top: 10px;
    transform: ${({ $open }) => $open ? 'rotate(45deg) translateY(10px)' : 'none'};
  }
  span:nth-child(2) {
    top: 20px;
    opacity: ${({ $open }) => $open ? 0 : 1};
  }
  span:nth-child(3) {
    top: 30px;
    transform: ${({ $open }) => $open ? 'rotate(-45deg) translateY(-10px)' : 'none'};
  }
`;

const navItems = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const pathname = usePathname();
  return (
    <StyledHeader>
      <Wrapper>
        <Logo href="/" $mobileNavActive={mobileNavActive}>Hafiz Academy</Logo>
        <Hamburger
          aria-label={mobileNavActive ? "Close menu" : "Open menu"}
          $open={mobileNavActive}
          onClick={() => setMobileNavActive((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <StyledNav $mobileNavActive={mobileNavActive}>
          {navItems.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              $active={pathname === href}
              onClick={() => setMobileNavActive(false)}
            >
              {label}
            </NavLink>
          ))}
        </StyledNav>
      </Wrapper>
    </StyledHeader>
  );
}
