import { InputBase } from "@mui/material";
import { Icon } from "../../atoms";
import { Search, Wrapper } from "./styles";
import SearchIcon from "../../../assets/icons/search.svg";

export const SearchBar = () => {
  return (
    <Search>
      <Wrapper>
        <Icon className="icon">
          <img src={SearchIcon} alt="Search Icon" width={17}  />
        </Icon>
        <InputBase
          className="InputBase"
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
      </Wrapper>
    </Search>
  );
};
