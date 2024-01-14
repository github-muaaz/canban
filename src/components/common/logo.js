import styled from "styled-components";
import logoWithBrand from "../../assets/images/logoWithBrand.svg"
import logoWithoutBrand from "../../assets/images/logoWithoutBrand.svg"
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  padding: 30px 25px 30px 35px;
  width: 360px;
  transition: .25s;
  border-bottom: ${({isSidebarOpen}) => isSidebarOpen ? '' : '1px solid var(--lines-light, #E4EBFA)'};

  .withoutBrand {
    display: none;
  }

  @media (max-width: 750px) {
    border-bottom: 1px solid var(--lines-light, #E4EBFA);;

    .withBrand {
      display: none;
    }

    .withoutBrand {
      display: block;
    }
  }
`

const Logo = ({isSidebarOpen, myRef}) => {
    return (
        <Wrapper ref={myRef} isSidebarOpen={isSidebarOpen} id="brand--box">
            <Link to={"/"}>
                <div className="flex--row align--itm--center">
                    <img className='withoutBrand' src={logoWithoutBrand} alt={"logo"}/>
                    <img className='withBrand' src={logoWithBrand} alt={"logo"}/>
                </div>
            </Link>
        </Wrapper>
    )
}

export default Logo;