import React, {useContext, useState} from "react";
import styled from "styled-components";
import {ModalProvider} from "../../../../context/modalContext";
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
  padding: 32px;
  width: 480px;
  gap: 20px;
  
  @media (max-width: 768px){
    width: 375px;
  }
`

const ModalContainer = ({children}) => {

    const themeContext = useContext(MyThemeContext);

    const [modal, setModal] = useState();
    const [modalItem, setModalItem] = useState();

    const handleSetModal = (data) => {
        // console.log('modal changed', data)
        setModal(data);
    }

    const handleGetModal = () => {
        return modal;
    }

    const handleSetModalItem = (data) => {
        setModalItem(data);
    }

    const handleGetModalItem = () => {
        return modalItem;
    }

    const context = {
        setModal: handleSetModal,
        getModal: handleGetModal,
        setModalItem: handleSetModalItem,
        getModalItem: handleGetModalItem,
    }

    const handleOutsideClick = e => {
        if(e.target !== e.currentTarget)
            return;

        setModal(null);
    }

    return (
        <ModalProvider value={context}>
            {modal &&
                <ContainerStyled onClick={handleOutsideClick}>
                    <ModalStyled bg={themeContext.getTheme().lightBgColor} className={'center--v--g flex--column'}>
                        {modal}
                    </ModalStyled>
                </ContainerStyled>
            }

            {
                children
            }
        </ModalProvider>
    )
}

export default ModalContainer;