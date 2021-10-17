import React from "react";
import { SplashPageLayout } from "../components/templates/SplashPageLayout";
import icon from "../assets/images/main_icon.png";
import { useEffect } from "react";
import { useHistory } from "react-router";
export const SplashPage: React.VFC = () => {
  const history = useHistory();

  const handleSplashDone = () => {
    history.push("/login");
  };

  useEffect(() => {
    const handleInterval = setTimeout(() => {
      handleSplashDone();
    }, 5000);
    return () => clearTimeout(handleInterval);
  }, []);

  return <SplashPageLayout imageSrc={icon}></SplashPageLayout>;
};
