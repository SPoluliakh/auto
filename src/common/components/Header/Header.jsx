import { headerNav } from "../helpers/headerNav";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";
import * as SC from "./Header.styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <SC.Wrapper>
      <SC.LogoWrapper>
        <SC.Logo>
          <Link to={"/"}>AutoParser</Link>
        </SC.Logo>
      </SC.LogoWrapper>
      <SC.ListWrapper>
        <SC.List>
          {headerNav.map(({ id, title, href }) => (
            <li key={id}>
              <SC.Button>
                <SC.Text>
                  <Link to={href}>{title}</Link>
                </SC.Text>
                <IoIosArrowDown />
              </SC.Button>
            </li>
          ))}
        </SC.List>
      </SC.ListWrapper>
      <SC.BurgerWrapper>
        <SC.BurgerInnerWrapper>
          <SC.BurgerButton>
            <RxHamburgerMenu size={"21px"} />
          </SC.BurgerButton>
        </SC.BurgerInnerWrapper>
      </SC.BurgerWrapper>
    </SC.Wrapper>
  );
};
