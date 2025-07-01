"use client";
import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useState } from "react";

const StyledHeader = styled.header`
  background-color: #111;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 9999;
  padding: 10px 0;
`;
const LogoBox = styled.div<{ $mobileNavActive?: boolean }>`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  position: relative;
  z-index: 3;
  transition: opacity 0.3s;
  opacity: ${({ $mobileNavActive }) => ($mobileNavActive ? 0 : 1)};
  pointer-events: ${({ $mobileNavActive }) => ($mobileNavActive ? 'none' : 'auto')};
  a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font-weight: inherit;
    &:hover {
      color: #ff9900;
      transition: color 0.2s ease;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;
const StyledNav = styled.nav<{ $mobileNavActive: boolean }>`
  display: ${({ $mobileNavActive }) => ($mobileNavActive ? "block" : "none")};
  gap: 20px;
  position: fixed;
  top: 0;
  right: 0;
  width: 70vw;
  height: 100vh;
  background-color: #111;
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
    background-color: transparent;
    box-shadow: none;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color: #eee;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 16px 0;
  min-height: 48px;
  transition: color 0.3s ease;
  font-weight: 500;
  &:hover {
    color: #ff9900;
  }
  @media (min-width: 800px) {
    padding: 0;
    margin: 0 15px;
    min-height: unset;
  }
`;
const Hamburger = styled.button<{ $open: boolean }>`
  display: block;
  background: none;
  border: none;
  color: #fff;
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
    background: #fff;
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
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <LogoBox $mobileNavActive={mobileNavActive}>
            <Link href="/">Hafiz Academy</Link>
          </LogoBox>
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
                onClick={() => setMobileNavActive(false)}
              >
                {label}
              </NavLink>
            ))}
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
