import styled, { keyframes } from "styled-components";

export const HeaderTop = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: space-between;
  gap: 17px;
`;
export const NameLeft = styled.div``;

export const Label = styled.div`
  font-family: monospace;
  font-size: 2.75em;
  padding-top: 15px;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

export const HeaderMain = styled.div`
  height: 60 vh;
  /*This part is important for centering*/
  display: flex;
  flex-direction: column;
  place-items: center;
  max-width: 700px;
  gap: 20px;
  margin: 0 auto;
  float: left;
  width: 450px;
`;

export const Type = styled.div` 
width: 22ch;
animation: typing 2s steps(22), blink .5s step-end infinite alternate;
white-space: nowrap;
overflow: hidden;
color:white;
border-right: 3px solid;
font-family: monospace;
font-size: 2em;

}

@keyframes typing {
from {
  width: 0
}
}
  
@keyframes blink {
50% {
  border-color: transparent
}
`;

export const HeaderMainLabel = styled.div`
  font-family: monospace;
  font-size: 1.5em;
  color: white;
`;
export const RightSection = styled.div`
  float: right;
  width: 450px;
`;
export const HeaderSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
`;
export const IMGContainer = styled.div`
  padding: var(--s);
  border: calc(2 * var(--s)) solid #0000;
  outline: 1px solid #000;
  outline-offset: calc(-1 * var(--s));
  background: conic-gradient(from 90deg at 1px 1px, #0000 25%, #000 0);
  --s: 25px;
`;
export const Page = styled.div`
  background: radial-gradient(
    circle at 24.1% 68.8%,
    rgb(50, 50, 50) 0%,
    rgb(0, 0, 0) 99.4%
  );
  height: 100vh;
  position: relative;
`;
const focusInContractBck = keyframes`
  0% {
    letter-spacing: 1em;
    transform: translateZ(300px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    transform: translateZ(12px);
    filter: blur(0);
    opacity: 1;
  }
`;

export const TechStackLabel = styled.div`
  font-family: monospace;
  font-size: 2.75em;
  padding-top: 25px;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  animation: ${focusInContractBck} 1s ease-in-out;
`;
export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
`;
export const AboutPage = styled.div`
  background: radial-gradient(
    circle at 24.1% 68.8%,
    rgb(50, 50, 50) 0%,
    rgb(0, 0, 0) 99.4%
  );
`;
export const AboutTitle = styled.div`
  font-family: monospace;
  font-size: 2.75em;
  padding-top: 80px;
  color: white;
  text-decoration: none;

  display: flex;
  justify-content: center;
`;
export const AboutLabel = styled.div`
  font-family: monospace;
  font-size: 1.3em;
  color: white;
`;
export const AboutSectionLeft = styled.div`
  float: left;
  max-width: 800px;
  margin: 40px 0 0 90px;
  max-height: 300px;
`;
export const AboutSectionRight = styled.div`
  float: right;
  max-width: 800px;
  margin: 40px 0 0 40px;
  max-height: 300px;
`;
export const ImageFrame = styled.img`
  max-height: 400px;
  max-width: 700px;
  border-radius: 50%;
`;
export const AboutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export const Button = styled.div`

  margin: 20px;
  background:white;
  width:110px;
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  padding: 13px 23px;
  border: 1px solid #222222;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,
  background: #fff;
  color: #222222;
  :hover {
    border-color: #000000;
    background: #f7f7f7;
  }
`;
export const ButtonLabel = styled.div`
  font-family: monospace;
  font-size: 1.1em;
  display: flex;
  flex-direction: row;
`;

export const MenuLabel = styled.div`
  font-family: monospace;
  font-size: 2.75em;
  color: white;
  padding-top: 15px;
  text-decoration: none;
  cursor: pointer;
`;
export const ContactMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

export const ContactMenuItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
export const ContactMenuItem = styled.li`
  margin-bottom: 10px;
  text-align: center;
  color: white;
`;
export const CloseToggle = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: white;
  svg {
    width: 48px;
    height: 48px;
  }
`;

export const ButtonCv = styled.button`
  position: fixed;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 200px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  padding: 13px 23px;
  border: 1px solid #222222;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s;
  background: #fff;
  color: #222222;

  &:hover {
    border-color: #000000;
    background: #f7f7f7;
  }
`;
