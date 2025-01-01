import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const sparkle = keyframes`
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const Container = styled.div`
  text-align: center;
  margin: 50px auto;
  padding: 30px;
  max-width: 600px;
  background: linear-gradient(135deg, #ff7eb3, #ff758c);
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 1s ease-out;
  position: relative;
  overflow: hidden;
`;

const Fireworks = styled.div`
  position: absolute;
  top: ${({ top }) => top || "0%"};
  left: ${({ left }) => left || "0%"};
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.7;
  animation: ${sparkle} 2s infinite ease-in-out;
`;

const Header = styled.h1`
  color: #ffffff;
  font-size: 3rem;
  font-family: "Pacifico", cursive;
  margin-bottom: 15px;
  text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
`;

const Subheader = styled.h2`
  color: #ffeee2;
  font-size: 1.5rem;
  font-family: "Lobster", cursive;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #fff5f0;
  margin: 20px 0;
  line-height: 1.8;
`;

const Hint = styled.p`
  font-size: 1rem;
  color: #ffeecc;
  margin: 20px 0;
  font-style: italic;
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);

  &:hover {
    background: linear-gradient(135deg, #0056b3, #003d7a);
    transform: scale(1.1);
  }
`;

// Modal Overlay
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

// Modal Content
const ModalContent = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  max-width: 400px;

  h2 {
    font-size: 2rem;
    color: #ff7eb3;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #555;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background: linear-gradient(135deg, #007bff, #0056b3);
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(135deg, #0056b3, #003d7a);
    }
  }
`;

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Container>
        {/* Fireworks */}
        <Fireworks top="10%" left="15%" />
        <Fireworks top="20%" left="80%" />
        <Fireworks top="50%" left="50%" />
        <Fireworks top="70%" left="30%" />
        <Fireworks top="80%" left="90%" />

        {/* Content */}
        <Header>🎆 Cheers to 2025! 🎆</Header>
        <Subheader>A Bright New Year Awaits</Subheader>
        <Message>
          Dear Mom, <br />
          Here’s to a year where all your dreams come true, <br />
          and every day is as sweet as your love. <br />
          Thank you for being my rock, my guide, and my biggest cheerleader. 💖
        </Message>
        <Hint>
          You know, New Year's resolutions often start with generosity. 😉{" "}
          <br />
          And who better to shower that generosity on than your hard-working
          child? A little “token of appreciation” could really kickstart my year
          with a bang!
        </Hint>
        <Button onClick={handleButtonClick}>Click if you agree 🎁</Button>
      </Container>

      {/* Modal */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Mom, You're the Best! 💖</h2>
            <p>
              I was thinking... what’s the best way to start 2025? <br />
              It hit me: a tiny sprinkle of your generosity (maybe cash?) <br />
              would make this New Year unforgettable. 🤑✨
            </p>
            <p>
              Don't worry, it’s just a token—think of it as an investment in
              your amazing child’s success! 😉
            </p>
            <button onClick={closeModal}>Got it, Mom! 🥰</button>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

export default App;
