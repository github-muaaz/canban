import {useContext} from "react";
import {toast} from "react-toastify";
import styled from "styled-components";
import ModalContext from "../../context/modalContext";
import BoardContext from "../../context/boardContext";
import http from "../../service/httpService";
import Span from "./element/text/span";
import Button from "./element/button";
import Text from "./element/text";

const DivStyled = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const DeleteModalBody = ({url, warning, title}) => {

    const modalContext = useContext(ModalContext);
    const boardContext = useContext(BoardContext);

    const handleCancel = () => {
        modalContext.setModal(null);
    }

    const handleDelete = () => {
        http.delete(url)
            .then(res => toast.info(res.message))
            .catch(err => toast.error(err.message));

        modalContext.setModal(null);
        boardContext.updateBoards();
    }

    return <div className={'flex--column g--24'}>
        <Text color={'var(--red, #EA5555)'} content={title}/>
        <Span className={'l--height--23 font--weight--5'} content={warning}/>

        <DivStyled className={'flex--row g--16'}>
            <Button
                onClick={handleDelete}
                w={'100%'}
                noHover={'var(--red-hover, #FF9898)'}
                color={'var(--White, #FFF)'}
                bg={'var(--Red, #EA5555)'}
            >
                Delete
            </Button>

            <Button
                onClick={handleCancel}
                w={'100%'}
                color={'var(--Main-Purple, #635FC7)'}
                noHover={'rgba(99, 95, 199, 0.25)'}
                bg={'rgba(99, 95, 199, 0.10)'}
            >
                Cancel
            </Button>
        </DivStyled>
    </div>
}

export default DeleteModalBody;