import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {ModalProvider} from "../../../../context/modalContext";
import {checkSubtask, setStatus} from "../../../../utils/fake";

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
    const [modalItem, setModalItem] = useState();
    const [modal, setModal] = useState();

    useEffect(() => {
        console.log('modal item changed', modalItem)
    }, [modalItem])

    const handleOpen = (modal, modalItem) => {
        setIsOpen(true);
        setModal(modal);
        if(modalItem)
            setModalItem(modalItem);
    };

    const handleSetModalItem = item => {
        setModalItem(item);
    }

    const handleGetModalItem = () => {
        return modalItem;
    }

    const handleClose = () => setIsOpen(false);

    const handleChecked = id => {
        const newTask = checkSubtask(modalItem.id, id);

        setModalItem( prev => ({...prev, ...newTask}));
    }

    const handleSelectChange = id => {
        const newTask = setStatus(modalItem.id, id);
        console.log(newTask)

        setModalItem(prev => ({...prev, ...newTask}));
    }

    const context = {
        openModal: handleOpen,
        closeModal: handleClose,
        onChecked: handleChecked,
        getModalItem: handleGetModalItem,
        setModalItem: handleSetModalItem,
        onSelectChange: handleSelectChange,
    };

    return (
        <ModalProvider value={context}>
            {isOpen ?
                <React.Fragment>
                    <ContainerStyled id={'modal--container'}>
                        {modal}
                    </ContainerStyled>

                    {children}
                </React.Fragment>
                : children}
        </ModalProvider>
    );
}

export default ModalContainer;