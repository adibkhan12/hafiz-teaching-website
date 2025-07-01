"use client";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
`;
const Section = styled.section`
  padding: 2rem 0.5rem 2.5rem 0.5rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #818cf8 30%, #38bdf8 100%);
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
const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 700px;
`;
const blogAppear = keyframes`
  from { opacity: 0; transform: scale(0.95) translateY(40px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;
const BlogCard = styled.div`
  background: rgba(30,41,59,0.85);
  border-radius: 1.2rem;
  box-shadow: 0 8px 32px #818cf880, 0 1.5px 8px #0002;
  padding: 1.5rem 1rem 1.2rem 1rem;
  border: 1.5px solid #818cf8;
  backdrop-filter: blur(4px);
  animation: ${blogAppear} 0.8s cubic-bezier(.4,0,.2,1) both;
  transition: transform 0.2s, box-shadow 0.2s, border 0.2s;
  &:hover {
    transform: translateY(-10px) scale(1.04) rotate(1deg);
    box-shadow: 0 16px 48px #38bdf880, 0 2px 16px #0003;
    border: 2.5px solid #38bdf8;
  }
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
`;
const BlogTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #818cf8;
  @media (min-width: 480px) { font-size: 1.5rem; }
`;
const BlogDesc = styled.p`
  color: #cbd5e1;
  margin-bottom: 1.2rem;
`;
const BlogLink = styled.a`
  color: #38bdf8;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.05rem;
  border-bottom: 2px solid #38bdf8;
  transition: color 0.2s, border 0.2s;
  &:hover { color: #818cf8; border-bottom: 2px solid #818cf8; }
`;

export default function Blog() {
  return (
    <Section>
      <Title>Educational Blog</Title>
      <Subtitle>
        Read our latest articles on Quranic studies, memorization tips, and Islamic lifestyle.
      </Subtitle>
      <BlogList>
        <BlogCard style={{ animationDelay: "0.1s" }}>
          <BlogTitle>How to Start Memorizing the Quran</BlogTitle>
          <BlogDesc>Discover practical steps and motivation for your Hifz journey.</BlogDesc>
          <BlogLink href="#">Read More</BlogLink>
        </BlogCard>
        <BlogCard style={{ animationDelay: "0.2s" }}>
          <BlogTitle>Benefits of Learning Tajweed</BlogTitle>
          <BlogDesc>Understand why Tajweed is essential for every Muslim.</BlogDesc>
          <BlogLink href="#">Read More</BlogLink>
        </BlogCard>
      </BlogList>
    </Section>
  );
}
