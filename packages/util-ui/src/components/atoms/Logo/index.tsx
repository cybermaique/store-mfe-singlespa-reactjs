import LogoImg from "../../../assets/images/logo.svg";
import { Img } from "./styles";
import { LogoProps } from "./types";

export const Logo = ({onClick}: LogoProps) => {
  return <Img src={LogoImg} alt="logo" onClick={onClick} />;
};
