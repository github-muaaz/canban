import styled from "styled-components";
import Logo from "./common/logo";
import Navbar from "./common/navbar";

const StyledHeader = styled.header`
    
`

const Header = ({myRef}, ...rest) => {
    return ( 
        <StyledHeader {...rest} ref={myRef} id="head--my" className="flex--row">
            <Logo/>

            <Navbar/>
        </StyledHeader>
     );
}
 
export default Header;