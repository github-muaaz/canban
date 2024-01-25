import styled from "styled-components";
import logoWithBrand from "../../assets/images/logoWithBrand.svg";
import logoWithoutBrand from "../../assets/images/logoWithoutBrand.svg";
import logoWithBrandLight from "../../assets/images/logoWithBrandLight.svg";
import {Link} from "react-router-dom";
import {useContext} from "react";
import MyThemeContext from "../../context/myThemeContext";

const Wrapper = styled.div`
  padding: 30px 25px 30px 35px;
  width: 360px;
  transition: .25s;
  border-bottom: ${({isSidebarOpen}) => isSidebarOpen ? '' : '1px solid var(--lines-light, #E4EBFA)'};

  .withoutBrand {
    display: none;
  }

  @media (max-width: 768px) {
    border-bottom: none;
    width: fit-content;

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
        <Wrapper ref={myRef} isSidebarOpen={isSidebarOpen} id="brand--box">
            <Link to={"/"}>
                <div className="flex--row align--itm--center">
                    <img className='withoutBrand' src={logoWithoutBrand} alt={"logo"}/>
                    <img className='withBrand' src={themeContext.getTheme().name==='dark' ? logoWithBrandLight : logoWithBrand} alt={"logo"}/>
                </div>
            </Link>
        </Wrapper>
    )
}

export default Logo;