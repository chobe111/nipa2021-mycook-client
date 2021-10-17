import { LoginPageLayout } from "../components/templates/LoginPageLayout";
import { useEffect, useCallback, useState } from "react";
import { useHistory } from "react-router";

export type LoginPageStatus = "BEFORE" | "AFTER";

export const LoginPage: React.FC = () => {
  const [state, setState] = useState<LoginPageStatus>("BEFORE");
  const history = useHistory();

  const handleLoginDone = () => {
    setState("AFTER");
  };

  useEffect(() => {
    if (state == "BEFORE") return;
    history.push("/login");
  }, [state]);

  return <LoginPageLayout></LoginPageLayout>;
};
