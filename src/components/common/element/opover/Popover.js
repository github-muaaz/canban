import React, {useContext, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import MyThemeContext from "../../../../context/myThemeContext";

const ContainerStyled = styled.div`
  position: relative;
  cursor: pointer;
`

const PopoverStyled = styled.div`
  background: ${({bg}) => bg};
  box-shadow: 0 4px 6px 0 rgba(54, 78, 126, 0.10);
  position: absolute;
  bottom: ${({bottom}) => bottom ? bottom : ''};
  top: ${({top}) => top ? top : ''};
  right: ${({right}) => right ? right : ''};
  left: ${({left}) => left ? left : ''};
  display: block;
  z-index: 960;
  border-radius: 6px;
`

const Popover = ({component, children, ...rest}) => {

    const themeContext = useContext(MyThemeContext);
    const ref = useRef();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(prev => !prev);
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (open && ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [open])

    return (
        <ContainerStyled {...rest}>
            <div className={'flex--row align--itm--center h--100'} onClick={handleOpen}>
                {component}
            </div>

            {open &&
                <PopoverStyled ref={ref} {...rest} className={'flex--column'} bg={themeContext.getTheme().darkBgColor}>
                    {children}
                </PopoverStyled>
            }
        </ContainerStyled>
    )
}

export default Popover;