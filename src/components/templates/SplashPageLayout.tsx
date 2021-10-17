import { url } from "inspector";
import { useCallback, useEffect } from "react";
import styled from "styled-components";
import splash from "../../assets/images/splash_background.jpg";
export interface SplashPageLayoutProps {
  imageSrc: string;
}

export const SplashPageLayout: React.VFC<SplashPageLayoutProps> = ({
  imageSrc,
}) => {
  return (
    <Root>
      <DarkerLayer />
      <Icon src={imageSrc} />
    </Root>
  );
};

export const Icon = styled.img<{ src: string }>`
  src: url(${(props) => props.src});
  z-index: 3;
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
