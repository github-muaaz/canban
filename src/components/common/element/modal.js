import styled from "styled-components";
import {useEffect} from "react";

const ModalStyled = styled.div`
  border-radius: 6px;
  background: var(--white, #FFF);
  z-index: 900;
  background-color: red;
  padding: 20px;
`

const Modal = ({children}) => {

    let modal = (
        <div style={{display: 'none'}}>
            <ModalStyled id={'modal--body'} className={'center--v--g'}>
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