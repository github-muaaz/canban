import styled from "styled-components";
import {useEffect} from "react";

const ModalStyled = styled.div`
  border-radius: 6px;
  background: var(--white, #FFF);
  z-index: 900;
  padding: 32px;
  width: 32%;
  gap: 20px;
`

const Modal = ({children}) => {

    let modal = (
        <div style={{display: 'none'}}>
            <ModalStyled id={'modal--body'} className={'center--v--g flex--column'}>
                {children}
            </ModalStyled>
        </div>
    );

    const setModalBody = () => {
        const modalContainer = document.getElementById("modal--container");
        const child = document.getElementById('modal--body');

        if (modalContainer) {
            modalContainer.innerHTML = '';
            modalContainer.appendChild(child);
        }
    }

    useEffect(() => {
            setModalBody()
        }, []
    )

    return modal;
}

export default Modal;