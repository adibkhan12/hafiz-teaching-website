"use client";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
`;
const Section = styled.section`
  padding: 2rem 0.5rem 2.5rem 0.5rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #38bdf8 30%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeInUp} 0.8s cubic-bezier(.4,0,.2,1) both;
  @media (min-width: 480px) { font-size: 2.3rem; }
  @media (min-width: 768px) { font-size: 2.7rem; }
`;
const Subtitle = styled.p`
  margin-bottom: 2rem;
  color: #a1a1aa;
  font-size: 1.05rem;
  text-align: center;
  max-width: 500px;
  animation: ${fadeInUp} 1.1s cubic-bezier(.4,0,.2,1) both;
  @media (min-width: 480px) { font-size: 1.2rem; }
`;
const CardRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  align-items: center;
  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2.5rem;
    justify-content: center;
  }
`;
const cardAppear = keyframes`
  from { opacity: 0; transform: scale(0.95) translateY(40px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;
const Card = styled.div`
  background: rgba(30,41,59,0.85);
  border-radius: 1.2rem;
  box-shadow: 0 8px 32px #0ea5e980, 0 1.5px 8px #0002;
  padding: 1.5rem 1rem 1.2rem 1rem;
  width: 100%;
  max-width: 340px;
  border: 1.5px solid #38bdf8;
  backdrop-filter: blur(4px);
  animation: ${cardAppear} 0.8s cubic-bezier(.4,0,.2,1) both;
  transition: transform 0.2s, box-shadow 0.2s, border 0.2s;
  &:hover {
    transform: translateY(-10px) scale(1.04) rotate(-1deg);
    box-shadow: 0 16px 48px #818cf880, 0 2px 16px #0003;
    border: 2.5px solid #818cf8;
  }
`;
const CardTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #38bdf8;
  @media (min-width: 480px) { font-size: 1.5rem; }
`;
const CardDesc = styled.p`
  color: #cbd5e1;
  margin-bottom: 1.2rem;
`;
const CardLink = styled.a`
  color: #818cf8;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.05rem;
  border-bottom: 2px solid #818cf8;
  transition: color 0.2s, border 0.2s;
  &:hover { color: #38bdf8; border-bottom: 2px solid #38bdf8; }
`;

export default function Courses() {
  return (
    <Section>
      <Title>Our Courses</Title>
      <Subtitle>
        Explore our Quran memorization, Tajweed, and Islamic studies courses. Each course is designed to help you grow in knowledge and spirituality.
      </Subtitle>
      <CardRow>
        <Card style={{ animationDelay: "0.1s" }}>
          <CardTitle>Quran Memorization</CardTitle>
          <CardDesc>Step-by-step guidance to become a Hafiz with expert teachers.</CardDesc>
          <CardLink href="#">View Details</CardLink>
        </Card>
        <Card style={{ animationDelay: "0.2s" }}>
          <CardTitle>Tajweed Mastery</CardTitle>
          <CardDesc>Perfect your recitation with our comprehensive Tajweed course.</CardDesc>
          <CardLink href="#">View Details</CardLink>
        </Card>
        <Card style={{ animationDelay: "0.3s" }}>
          <CardTitle>Islamic Studies</CardTitle>
          <CardDesc>Deepen your understanding of Islam with engaging lessons.</CardDesc>
          <CardLink href="#">View Details</CardLink>
        </Card>
      </CardRow>
    </Section>
  );
}
