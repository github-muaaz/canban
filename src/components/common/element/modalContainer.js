import React, {useState} from "react";
import styled from "styled-components";
import {ModalProvider} from "../../../context/modalContext";

const ContainerStyled = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 850;
`

const ModalContainer = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = toggle => {
        setIsOpen(toggle);
        console.log(toggle, 'click');
    };

    return (
        <ModalProvider value={{toggleModal: handleToggle}}>
            {isOpen ?
                <React.Fragment>
                    <ContainerStyled id={'modal--container'}/>

                    {children}
                </React.Fragment>
                : children}
        </ModalProvider>
    );
}

export default ModalContainer;