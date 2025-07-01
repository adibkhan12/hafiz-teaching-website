"use client";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
`;
const FooterBar = styled.footer`
  width: 100vw;
  background: rgba(22, 28, 44, 0.98);
  color: #b3c0e6;
  text-align: center;
  padding: 1.5rem 0 1rem 0;
  margin-top: 2rem;
  box-shadow: 0 -2px 16px #23263a55;
  border-top: 2px solid #23263a;
  backdrop-filter: blur(8px) saturate(1.05);
  animation: ${fadeInUp} 1.1s cubic-bezier(.4,0,.2,1) both;
  @media (max-width: 600px) {
    padding: 1.2rem 0 0.7rem 0;
  }
`;
const Copyright = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 8px #23263a55;
`;
const SocialLinks = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;
const SocialLink = styled.a`
  color: #b3c0e6;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.3rem;
  padding: 0.2rem 0.7rem;
  border-radius: 0.5rem;
  transition: color 0.2s, box-shadow 0.2s, background 0.2s;
  box-shadow: 0 0 0 #23263a;
  &:hover {
    color: #60a5fa;
    background: #23263a;
    box-shadow: 0 0 8px #60a5fa55;
  }
`;

export default function Footer() {
  return (
    <FooterBar>
      <Copyright>© {new Date().getFullYear()} Hafiz Academy. All rights reserved.</Copyright>
      <SocialLinks>
        <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</SocialLink>
        <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</SocialLink>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</SocialLink>
        <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</SocialLink>
      </SocialLinks>
    </FooterBar>
  );
}
