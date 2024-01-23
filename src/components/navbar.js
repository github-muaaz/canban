import React, {useContext} from "react";
import styled from "styled-components";
import MenuSvg from "../assets/icons/menu-dots.svg";
import BoardContext from "../context/boardContext";
import ModalContext from "../context/modalContext";
import Button from "./common/element/button";
import Icon from "./common/element/icon/icon-img";
import Text from "./common/element/text";
import TaskForm from "./common/task/taskForm";
import BoardForm from "./common/board/boardForm";
import config from "../config.json";
import axios from "axios";
import {toast} from "react-toastify";
import {capitalizeAll} from "../utils/utils";
import Popover from "./common/element/opover";
import List from "./common/element/lists/list-2";
import Span from "./common/element/text/span";
import http from "../service/httpService";

const DivStyled = styled.div`
  padding: 20px 30px;
  width: 100%;
  border-bottom: 1px solid var(--lines-light, #E4EBFA);
  border-left: 1px solid var(--lines-light, #E4EBFA);
`

const Navbar = () => {

    const boardContext = useContext(BoardContext);
    const modalContext = useContext(ModalContext);

    const board = boardContext.getSelectedBoard();


    const handleNew = () => {
        const apiCall = (data) => {
            axios.post(`${config.apiEndpoint}/task`, data)
                .then(res => toast.info(res.message))
                .catch(err => toast.error(err.message))
        }

        modalContext.setModalItem({})
        modalContext.setModal(
            <TaskForm
                title={'Add New Task'}
                btnTitle={'Create Task'}
                board={board}
                apiCall={apiCall}
            />);
    }

    const handleEdit = () => {
        const apiCall = (data) => {
            axios.put(`${config.apiEndpoint}/board/${data.id}`, data)
                .then(res => toast.info(res.message))
                .catch(err => toast.error(err.message))
        }
        modalContext
            .setModal(
                <BoardForm
                    title={'Add New Task'}
                    btnTitle={'Create Task'}
                    defaultValues={board}
                    apiCall={apiCall}
                />);
    }

    const handleDelete = () => {
        http.delete(`${config.apiEndpoint}/board/${board?.id}`)
            .then(res => toast.info(res.message))
            .catch(err => toast.error(err.message));

        boardContext.updateBoards();
    }

    return (
        <DivStyled className="flex--row align--itm--center justify--s--between">
            {board &&
                <React.Fragment>
                    <Text content={capitalizeAll(board?.name)} fs={'24px'}/>

                    <div className="flex--row align--itm--center justify--s--between g--25">
                        <Button onClick={handleNew}>
                            + Add New Task
                        </Button>

                        <Popover component={<Icon icon={MenuSvg}/>}>
                            <List onClick={handleEdit}>
                                <Span ws={'nowrap'} content={'Edit Board'}/>
                            </List>

                            <List onClick={handleDelete}>
                                <Span color={'var(--red, #EA5555)'} ws={'nowrap'} content={'Delete Board'}/>
                            </List>
                        </Popover>
                    </div>
                </React.Fragment>
            }
        </DivStyled>
    )
}

export default Navbar;