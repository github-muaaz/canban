import React, {useContext} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import logoWithBrand from "../../assets/images/logoWithBrand.svg";
import logoWithoutBrand from "../../assets/images/logoWithoutBrand.svg";
import logoWithBrandLight from "../../assets/images/logoWithBrandLight.svg";
import MyThemeContext from "../../context/myThemeContext";

const Wrapper = styled.div`
  padding: 30px 25px 30px 35px;
  width: 300px;
  transition: .25s;
  border-bottom: ${({isSidebarOpen}) => isSidebarOpen ? '' : '1px solid var(--lines-light, #E4EBFA)'};
  border-right: 1px solid var(--lines-light, #E4EBFA);

  .withoutBrand {
    display: none;
  }

  @media (max-width: 768px) {
    border-bottom: none;
    width: fit-content;
    padding: 20px 16px;  
    border-bottom: 1px solid var(--lines-light, #E4EBFA);

    .withBrand {
      display: none;
    }

    .withoutBrand {
      display: block;
    }
  }
`

const Logo = ({isSidebarOpen, myRef}) => {
    const themeContext = useContext(MyThemeContext);

    return (
            <Wrapper ref={myRef} isSidebarOpen={isSidebarOpen} id="brand--box" >
                <Link to={"/"} className="flex--row align--itm--center withoutBrand">
                    <img src={logoWithoutBrand} alt={"logo"}/>
                </Link>
                <Link to={"/"} className="flex--row align--itm--center withBrand">
                    <img
                         src={themeContext.getTheme().name === 'dark' ? logoWithBrandLight : logoWithBrand}
                         alt={"logo"}/>
                </Link>
            </Wrapper>
    )
}

export default Logo;