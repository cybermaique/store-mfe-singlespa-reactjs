import { useState } from "react";
import { navigateToUrl } from "single-spa";
import { Navigate, SearchBar } from "../../molecules";
import { Logo, Separator, Icon } from "../../atoms";
import { MenuMobile } from "../MenuMobile";
import {
  Container,
  Wrapper,
  GroupMenu,
  WrapperMobile,
  WrapperDesktop,
  ContentHeader,
  WrapperSearchBar,
} from "./styles";
import { MenuOutlined, CloseOutlined } from "@mui/icons-material";

import SearchIcon from "../../../assets/icons/search.svg";
import CartIcon from "../../../assets/icons/cart.svg";
import AccountIcon from "../../../assets/icons/account.svg";

export const Header = () => {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);
  const [isShowSearchBar, setIsShowSearchBar] = useState(false);

  const handleShowMenuMobile = () => {
    setIsOpenMenuMobile((prevState) => !prevState);
  };

  const handleShowSearchBar = () => {
    setIsShowSearchBar((prevState) => !prevState);
  };

  const renderIconMenuMobile = isOpenMenuMobile ? (
    <CloseOutlined fontSize="large" />
  ) : (
    <MenuOutlined fontSize="large" />
  );

  return (
    <ContentHeader>
      <Container>
        <Wrapper>
          <Logo onClick={() => navigateToUrl("/")} />
          <GroupMenu>
            <WrapperDesktop>
              <Navigate path="/" children="Shop" />
              <Navigate path="/our_story" children="Our Story" />
              <Navigate path="/blog" children="Blog" />

              <Separator dark={true} maxHeight="1.7rem" />

              <Icon
                onClick={handleShowSearchBar}
                children={<img src={SearchIcon} alt="Search" />}
              />
              <Icon children={<img src={CartIcon} alt="Cart" />} />
              <Icon
                onClick={() => navigateToUrl("account")}
                children={<img src={AccountIcon} alt="Account" />}
              />
            </WrapperDesktop>

            <WrapperMobile>
              <Icon children={<img src={CartIcon} alt="Cart" />} />
              <Icon
                onClick={handleShowMenuMobile}
                children={renderIconMenuMobile}
              />
            </WrapperMobile>
          </GroupMenu>
        </Wrapper>
      </Container>

      <WrapperSearchBar isShowSearchBar={isShowSearchBar}>
        <SearchBar />
      </WrapperSearchBar>

      {isOpenMenuMobile && <MenuMobile />}
    </ContentHeader>
  );
};
