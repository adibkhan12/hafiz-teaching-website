"use client";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
`;
const Section = styled.section`
  padding: 2rem 0.5rem 2.5rem 0.5rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  min-height: 60vh;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: #f3f4f6;
  border-radius: 1.2rem;
  box-shadow: 0 8px 32px #818cf880, 0 1.5px 8px #0002;
  animation: ${fadeInUp} 0.8s cubic-bezier(.4,0,.2,1) both;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #38bdf8 30%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (min-width: 480px) { font-size: 2.3rem; }
  @media (min-width: 768px) { font-size: 2.7rem; }
`;
const Desc = styled.p`
  margin-bottom: 1.2rem;
  color: #a1a1aa;
  font-size: 1.05rem;
  @media (min-width: 480px) { font-size: 1.2rem; }
`;
const List = styled.ul`
  text-align: left;
  margin: 0 auto;
  max-width: 500px;
  padding-left: 1.2rem;
`;
const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: #cbd5e1;
  font-size: 1rem;
  position: relative;
  padding-left: 1.2rem;
  @media (min-width: 480px) { font-size: 1.1rem; }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.7em;
    width: 0.6em;
    height: 0.6em;
    background: linear-gradient(135deg, #38bdf8 30%, #818cf8 100%);
    border-radius: 50%;
    box-shadow: 0 0 8px #38bdf880;
  }
`;

export default function About() {
  return (
    <Section>
      <Title>About Hafiz Academy</Title>
      <Desc>
        Hafiz Academy is dedicated to helping students of all ages memorize the Quran, master Tajweed, and deepen their understanding of Islam. Our experienced teachers and innovative courses make learning accessible and engaging for everyone.
      </Desc>
      <List>
        <ListItem>Expert Hafiz instructors</ListItem>
        <ListItem>Flexible online courses</ListItem>
        <ListItem>Supportive learning community</ListItem>
        <ListItem>Resources for parents and students</ListItem>
      </List>
    </Section>
  );
}
