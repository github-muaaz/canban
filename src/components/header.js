import styled from "styled-components";
import Logo from "./common/logo";
import Navbar from "./navbar";

const StyledHeader = styled.header`
    
`

const Header = ({myRef, isSidebarOpen, ...rest}) => {
    return ( 
        <StyledHeader {...rest} ref={myRef} id="head--my" className="flex--row">
            <Logo isSidebarOpen={isSidebarOpen}/>

            <Navbar/>
        </StyledHeader>
     );
}
 
export default Header;