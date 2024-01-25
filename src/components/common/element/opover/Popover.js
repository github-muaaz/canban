import React, {useContext, useState} from "react";
import styled from "styled-components";
import MyThemeContext from "../../../../context/myThemeContext";

const ContainerStyled = styled.div`
  position: relative;
`

const PopoverStyled = styled.div`
  background: ${({bg}) => bg};
  box-shadow: 0 4px 6px 0 rgba(54, 78, 126, 0.10);
  position: absolute;
  right: 100%;
  top: 100%;
  display: block;
  z-index: 960;
  border-radius: 6px;
`

const Popover = ({component, children}) => {

    const themeContext = useContext(MyThemeContext);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(prev => !prev);
    }

    return (
        <ContainerStyled>
            <div onClick={handleOpen}>
                {component}
            </div>
            {open &&
                <PopoverStyled className={'flex--column'} bg={themeContext.getTheme().darkBgColor}>
                    {children}
                </PopoverStyled>}
        </ContainerStyled>
    )
}

export default Popover;