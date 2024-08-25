import * as React from "react";
import { AuthCard } from "../../common/AuthCard";
import { Logo } from "../../icons/Logo";
import { isStringValid } from "../../../utils";
import { useNavigate } from "react-router-dom";

export function Auth() {
  const navigate = useNavigate();
  React.useEffect(() => {
    const userState = localStorage.getItem("userState");
    if (isStringValid(userState)) navigate("/");
  }, []);

  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center gap-[16px]">
      <Logo />
      <AuthCard />
    </div>
  );
}
