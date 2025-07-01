"use client";
import styled, { keyframes } from "styled-components";

const bgGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
`;
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0.5rem 1.5rem 0.5rem;
  background: linear-gradient(120deg, #181c2a 0%, #23263a 100%);
  background-size: 200% 200%;
  animation: ${bgGradient} 24s ease-in-out infinite;
`;
const Hero = styled.div`
  max-width: 48rem;
  width: 100%;
  text-align: center;
  animation: ${fadeInUp} 0.8s cubic-bezier(.4,0,.2,1) both;
  background: rgba(24, 28, 42, 0.92);
  border-radius: 2rem;
  box-shadow: 0 4px 24px #23263a55, 0 1.5px 8px #0002;
  padding: 1.5rem 0.5rem 1.2rem 0.5rem;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(6px) saturate(1.1);
  @media (min-width: 600px) {
    padding: 2.5rem 2rem 2rem 2rem;
    margin-bottom: 2.5rem;
  }
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #b3c0e6 30%, #60a5fa 60%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 8px #23263a55;
  letter-spacing: 1px;
  @media (min-width: 480px) { font-size: 2.3rem; }
  @media (min-width: 768px) { font-size: 3.5rem; }
`;
const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #b3c0e6;
  margin-bottom: 2rem;
  @media (min-width: 480px) { font-size: 1.2rem; }
  @media (min-width: 768px) { font-size: 1.5rem; }
`;
const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  @media (min-width: 600px) {
    flex-direction: row;
    gap: 1.2rem;
  }
`;
const Button = styled.a`
  background: linear-gradient(90deg, #334155 30%, #475569 100%);
  color: #e0e7ff;
  padding: 1rem 1.5rem;
  border-radius: 0.7rem;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0 2px 8px #23263a33;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
  animation: ${fadeInUp} 1.2s cubic-bezier(.4,0,.2,1) both;
  &:hover { background: linear-gradient(90deg, #475569 30%, #334155 100%); transform: scale(1.04); }
  &.green { background: linear-gradient(90deg, #15803d 30%, #334155 100%); color: #d1fae5; &:hover { background: linear-gradient(90deg, #334155 30%, #15803d 100%); } }
  @media (min-width: 480px) { font-size: 1.1rem; padding: 1.1rem 2.2rem; }
`;
const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1.2s cubic-bezier(.4,0,.2,1) both;
`;
const VideoFrame = styled.div`
  border-radius: 1.2rem;
  overflow: hidden;
  box-shadow: 0 4px 24px #23263a55, 0 1.5px 8px #0002;
  border: 2px solid #334155;
  max-width: 100%;
  width: 100%;
  background: rgba(24, 28, 42, 0.92);
  backdrop-filter: blur(4px) saturate(1.1);
  @media (min-width: 480px) { max-width: 24rem; }
  @media (min-width: 768px) { max-width: 36rem; }
`;
const SocialSection = styled.div`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  animation: ${fadeInUp} 1.2s cubic-bezier(.4,0,.2,1) both;
  background: rgba(24, 28, 42, 0.92);
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px #23263a55, 0 1.5px 8px #0002;
  padding: 1.5rem 1rem 1rem 1rem;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(6px) saturate(1.1);
  @media (min-width: 600px) { padding: 2rem 1.5rem 1.5rem 1.5rem; margin-bottom: 2rem; }
`;
const SocialTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 800;
  background: linear-gradient(90deg, #b3c0e6 30%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  @media (min-width: 480px) { font-size: 1.5rem; }
  @media (min-width: 768px) { font-size: 2rem; }
`;
const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (min-width: 480px) { flex-direction: row; gap: 1.5rem; }
`;
const SocialLink = styled.a<{color: string}>`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ color }) => color || "#b3c0e6"};
  text-decoration: none;
  transition: transform 0.2s, text-shadow 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover { transform: scale(1.09) rotate(-2deg); text-shadow: 0 0 12px ${({ color }) => color || "#b3c0e6"}; }
  @media (min-width: 480px) { font-size: 2rem; }
`;

export default function Home() {
  return (
    <Section>
      <Hero>
        <Title>
          Welcome to <span>Hafiz Academy</span>
        </Title>
        <Subtitle>
          Unlock the beauty of the Quran and Islamic knowledge with our expert-led courses, engaging blog, and vibrant community.
        </Subtitle>
        <ButtonRow>
          <Button href="/courses">Explore Courses</Button>
          <Button href="/blog" className="green">Read Blog</Button>
        </ButtonRow>
      </Hero>
      <VideoWrapper>
        <VideoFrame>
          <iframe width="100%" height="215" src="https://www.youtube.com/embed/6R6g1UeF6jE" title="Sample Course Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </VideoFrame>
      </VideoWrapper>
      <SocialSection>
        <SocialTitle>Connect with us</SocialTitle>
        <SocialLinks>
          <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" color="#4267B2">Facebook</SocialLink>
          <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer" color="#FF0000">YouTube</SocialLink>
          <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" color="#1DA1F2">Twitter</SocialLink>
          <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" color="#C13584">Instagram</SocialLink>
        </SocialLinks>
      </SocialSection>
    </Section>
  );
}
