import styled, { keyframes } from "styled-components";
import splash from "../../assets/images/splash_background.jpg";
import icon from "../../assets/images/main_icon.png";
import kakaoButton from "../../assets/images/kakao_login_large_wide.png";
import React, { useRef } from "react";
export const LoginPageLayout: React.FC = () => {
  const loginButton = useRef<HTMLImageElement>(null);

  const handleAnimationEnd = () => {
    const { current } = loginButton;
    if (current !== null) {
      current.style.visibility = "visible";
    }
  };

  return (
    <Root>
      <DarkerLayer />
      <Icon src={icon} onAnimationEnd={handleAnimationEnd} />
      <LoginButton src={kakaoButton} ref={loginButton} />
    </Root>
  );
};

export const iconUp = keyframes`
  from {

  }
  to {
      margin-bottom: 300px;
  }
`;

export const Icon = styled.img`
  /* src: url(${(props) => props.src}); */
  z-index: 3;
  animation: ${iconUp} 1s;
  animation-fill-mode: forwards;
`;

export const LoginButton = styled.img`
  visibility: hidden;
  z-index: 4;
`;

export const DarkerLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${splash});
  background-size: cover;
  z-index: 1;
  /* object-fit: contain; */
`;
