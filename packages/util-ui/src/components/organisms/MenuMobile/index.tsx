import { LogoutOutlined, PersonOutlineOutlined } from "@mui/icons-material";
import { Navigate } from "../../molecules";
import { Separator } from "../../atoms";
import { Menu, WrapperSeparator } from "./styles";
import AccountIcon from "../../../assets/icons/account.svg";

export const MenuMobile = () => {
  return (
    <Menu>
      <Navigate path="/" children="Shop" />
      <Navigate path="/our_story" children="Our Story" />

      <WrapperSeparator>
        <Separator maxWidth="100%" />
      </WrapperSeparator>

      <Navigate
        path="/account"
        children="My Account"
        icon={<img src={AccountIcon} alt="Account Icon" />}
      />
      <Navigate
        path="/logout"
        children="Logout"
        icon={<LogoutOutlined fontSize="large" />}
      />
    </Menu>
  );
};
