import { useEffect } from "react";
import logo from "../../assets/img/LMDSA.png";
import { isAuth } from "../../util/Util";
import { TopMenu } from "../menu/TopMenu";
import "./Header.css";

export const Header = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <div className="flex text-center">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="flex text-center">
        <h1>Bienvenido </h1>
      </div>

      {isAuth() ? <TopMenu /> : ""}
    </div>
  );
};
