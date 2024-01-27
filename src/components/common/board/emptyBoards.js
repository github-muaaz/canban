import styled from "styled-components";
import Button from "../element/button";
import Text from "../element/text";
import http from "../../../service/httpService";
import config from "../../../config.json";
import {toast} from "react-toastify";
import BoardForm from "./boardForm";
import React, {useContext} from "react";
import ModalContext from "../../../context/modalContext";
import BoardContext from "../../../context/boardContext";

const BoxStyled = styled.div`
  gap: 20px;
  align-items: center;
`

const EmptyBoards = () => {

    const modalContext = useContext(ModalContext);
    const boardContext = useContext(BoardContext);

    const board = boardContext.getSelectedBoard();

    const handleEditBoard = () => {

        const apiCall = async (data) => {
            await http.put(`${config.apiEndpoint}/board/${data.id}`, data)
                .then(res => {
                    toast.success(res.data.message);
                    boardContext.updateBoards();
                })
                .catch(err => toast.error(err.response.data.errors[0].msg))
        }

        modalContext
            .setModal(
                <BoardForm
                    title={'Edit Board'}
                    btnTitle={'Save Board'}
                    defaultValues={board}
                    apiCall={apiCall}
                />);
    }

    return(
        <BoxStyled className="flex--column center--v--g">
            <Text
                className="medium--grey"
                content={'This board is empty. Create a new column to get started.'}
            />
            <Button onClick={handleEditBoard}>+ Add New Column</Button>
        </BoxStyled>
    )
}

export default EmptyBoards;