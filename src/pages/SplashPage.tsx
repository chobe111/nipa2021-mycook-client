import React from "react";
import { SplashPageLayoutProps } from "../components/templates/SplashPageLayout";
import { SplashPageLayout } from "../components/templates/SplashPageLayout";
import icon from "../assets/images/main_icon.png";
import { useEffect, useCallback, useMemo } from "react";

export const SplashPage: React.VFC = () => {
  return <SplashPageLayout imageSrc={icon}></SplashPageLayout>;
};
