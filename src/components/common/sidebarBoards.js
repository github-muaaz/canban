import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import Ul from "./element/lists/ul";
import BoardContext from "../../context/boardContext";
import Text from "./element/text";
import Icon from "./element/icon/icon";
import Button from "./element/button";
import http from "../../service/httpService";
import config from "../../config.json";
import {toast} from "react-toastify";
import BoardForm from "./board/boardForm";
import ModalContext from "../../context/modalContext";

const BoxStyled = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  box-shadow: ${({shadow}) => shadow ? `0 -25px 10px -25px rgba(0,0,0,0.45) inset` : ''};
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  
  @media(max-width: 768px){
    max-height: 50vh;
  }
`

const SidebarBoards = () => {

    const boardContext = useContext(BoardContext);
    const modalContext = useContext(ModalContext);

    const boards = boardContext.getBoards();

    const handleClick = () => {
        const apiCall = (data) => {
            http.post(`${config.apiEndpoint}/board`, data)
                .then(res => toast.info(res.message))
                .catch(err => toast.error(err.message))
        }

        modalContext
            .setModal(
                <BoardForm
                    title={'Add New Board'}
                    btnTitle={'Create New Board'}
                    apiCall={apiCall}
                />);
    }


    useEffect(() => {
        boardContext.onBoardChanged(boards[0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [boards])

    return (
        <div style={{padding: '20px 20px 0 0'}}>
            <Text
                content={`ALL BOARDS (${boards.length})`}
                className="board--subtitle"
                fs={'12px'}
                lSpace={'2.4px'}
                color={'var(--medium-grey, #828FA3)'}
            />

            <BoxStyled shadow={boards.length > 10}>
                <Ul items={boards}/>
            </BoxStyled>

            <Button
                onClick={handleClick}
                bg={'transparent'}
                color={'var(--main-purple)'}
                padding={'16px 20px 5px 35px'}
                noHover
            >
                <Icon icon={'board--purple'}/>

                <span>
                    + Create New Board
                </span>
            </Button>
        </div>
    )
}

export default SidebarBoards;