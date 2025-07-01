"use client";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
`;
const Section = styled.section`
  padding: 2rem 0.5rem 2.5rem 0.5rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  min-height: 60vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #f3f4f6;
  border-radius: 1.2rem;
  box-shadow: 0 8px 32px #38bdf880, 0 1.5px 8px #0002;
  animation: ${fadeInUp} 0.8s cubic-bezier(.4,0,.2,1) both;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #818cf8 30%, #38bdf8 100%);
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Input = styled.input`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1.5px solid #818cf8;
  background: #181826;
  color: #f3f4f6;
  font-size: 1rem;
  transition: border 0.2s;
  &:focus { border: 2px solid #38bdf8; outline: none; }
  @media (min-width: 480px) { font-size: 1.1rem; padding: 0.9rem; }
`;
const Textarea = styled.textarea`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1.5px solid #818cf8;
  background: #181826;
  color: #f3f4f6;
  font-size: 1rem;
  transition: border 0.2s;
  &:focus { border: 2px solid #38bdf8; outline: none; }
  @media (min-width: 480px) { font-size: 1.1rem; padding: 0.9rem; }
`;
const Button = styled.button`
  background: linear-gradient(90deg, #38bdf8 30%, #818cf8 100%);
  color: #fff;
  padding: 0.9rem;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 12px #38bdf880;
  transition: background 0.2s, transform 0.2s;
  &:hover { background: linear-gradient(90deg, #818cf8 30%, #38bdf8 100%); transform: scale(1.04); }
  @media (min-width: 480px) { font-size: 1.1rem; padding: 1rem; }
`;

export default function Contact() {
  return (
    <Section>
      <Title>Contact Us</Title>
      <Desc>
        Have questions or want to enroll? Reach out to us below!
      </Desc>
      <Form>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message" required rows={5} />
        <Button type="submit">Send Message</Button>
      </Form>
    </Section>
  );
}
