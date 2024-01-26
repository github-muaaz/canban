import React, {useContext, useState} from "react";
import styled from "styled-components";
import {SmallModalProvider} from "../../../../context/smallModalContext";
import MyThemeContext from "../../../../context/myThemeContext";

const ContainerStyled = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 850;
`

const ModalStyled = styled.div`
  border-radius: 6px;
  background: ${({bg}) => bg};
  z-index: 900;
  width: fit-content;
  gap: 20px;
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
`

const ModalContainer = ({children}) => {

    const themeContext = useContext(MyThemeContext);

    const [modal, setModal] = useState();

    const handleSetModal = data => setModal(data);

    const handleGetModal = () => modal;

    const context = {
        setModal: handleSetModal,
        getModal: handleGetModal,
    }

    const handleOutsideClick = e => {
        if(e.target !== e.currentTarget)
            return;

        setModal(null);
    }

    return (
        <SmallModalProvider value={context}>
            {modal &&
                <ContainerStyled onClick={handleOutsideClick}>
                    <ModalStyled bg={themeContext.getTheme().lightBgColor} className={'flex--column'}>
                        {modal}
                    </ModalStyled>
                </ContainerStyled>
            }

            {
                children
            }
        </SmallModalProvider>
    )
}

export default ModalContainer;