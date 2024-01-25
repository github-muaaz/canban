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
import DeleteModalBody from "./common/deleteModalBody";
import MyThemeContext from "../context/myThemeContext";

const DivStyled = styled.div`
  padding: 20px 30px;
  width: 100%;
  border-bottom: 1px solid var(--lines-light, #E4EBFA);
  border-left: 1px solid var(--lines-light, #E4EBFA);
  background: ${({bg}) => bg};
`

const Navbar = () => {

    const boardContext = useContext(BoardContext);
    const modalContext = useContext(ModalContext);
    const themeContext = useContext(MyThemeContext);

    const board = boardContext.getSelectedBoard();

    const handleNewTask = () => {
        const apiCall = (data) => {
            http.post(`${config.apiEndpoint}/task`, data)
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

    const handleEditBoard = () => {
        const apiCall = (data) => {
            http.put(`${config.apiEndpoint}/board/${data.id}`, data)
                .then(res => toast.info(res.message))
                .catch(err => toast.error(err.message))
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

    const handleDeleteBoard = () => {
        modalContext.setModalItem({})
        modalContext.setModal(<DeleteModalBody
            url={`${config.apiEndpoint}/board/${board?.id}`}
            title={'Delete this board?'}
            warning={'Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.'}
        />);
    }

    return (
        <DivStyled className="flex--row align--itm--center justify--s--between">
            {board &&
                <React.Fragment>
                    <Text content={capitalizeAll(board?.name)} fs={'24px'} color={themeContext.getTheme().textColor}/>

                    <div className="flex--row align--itm--center justify--s--between g--25">
                        <Button onClick={handleNewTask}>
                            + Add New Task
                        </Button>

                        <Popover component={<Icon icon={MenuSvg}/>}>
                            <List onClick={handleEditBoard}>
                                <Span ws={'nowrap'} content={'Edit Board'}/>
                            </List>

                            <List onClick={handleDeleteBoard}>
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