import React, {useContext} from "react";
import styled from "styled-components";
import {toast} from "react-toastify";
import MenuSvg from "../assets/icons/menu-dots.svg";
import BoardContext from "../context/boardContext";
import ModalContext from "../context/modalContext";
import Button from "./common/element/button";
import Icon from "./common/element/icon/icon-img";
import Icon2 from "./common/element/icon/icon";
import Text from "./common/element/text";
import TaskForm from "./common/task/taskForm";
import BoardForm from "./common/board/boardForm";
import config from "../config.json";
import {capitalizeAll} from "../utils/utils";
import Popover from "./common/element/opover";
import List from "./common/element/lists/list-2";
import Span from "./common/element/text/span";
import http from "../service/httpService";
import DeleteModalBody from "./common/deleteModalBody";
import MyThemeContext from "../context/myThemeContext";
import SidebarBoards from "./common/sidebarBoards";
import NightModeBtn from "./common/nightModeBtn";
import SmallModalContext from "../context/smallModalContext";

const DivStyled = styled.div`
  padding: 20px 30px;
  flex: 1;
  border-bottom: 1px solid var(--lines-light, #E4EBFA);
  background: ${({bg}) => bg};

  .smaller {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    
    .bigger {
      display: none;
    }

    .smaller {
      display: block;
    }
  }
`

const Navbar = () => {

    const boardContext = useContext(BoardContext);
    const modalContext = useContext(ModalContext);
    const smallModalContext = useContext(SmallModalContext);
    const themeContext = useContext(MyThemeContext);

    const board = boardContext.getSelectedBoard();

    const handleNewTask = () => {
        const apiCall = async (data) => {
            await http.post(`${config.apiEndpoint}/task`, data)
                .then(res => {
                    toast.success(res.data.message);
                    boardContext.updateBoardData();
                })
                .catch(err => toast.error(err.response.data.errors[0].msg))
        }

        smallModalContext.setModal(null);
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

        const apiCall = async (data) => {
            await http.put(`${config.apiEndpoint}/board/${data.id}`, data)
                .then(res => {
                    toast.success(res.data.message);
                    boardContext.updateBoards();
                })
                .catch(err => toast.error(err.response.data.errors[0].msg))
        }

        smallModalContext.setModal(null);
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
        smallModalContext.setModal(null);
        modalContext.setModalItem({})
        modalContext.setModal(<DeleteModalBody
            url={`${config.apiEndpoint}/board/${board?.id}`}
            title={'Delete this board?'}
            warning={'Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.'}
        />);

        boardContext.updateBoards();
    }

    const handleClick = () => {
        if (smallModalContext.getModal()) {
            smallModalContext.setModal(null);
            return;
        }

        smallModalContext.setModal(
            <div style={{width: 'max-content'}}>
                <SidebarBoards/>

                <div className={'p--15--25'}>
                    <NightModeBtn/>
                </div>
            </div>
        );
    }

    return (
        <DivStyled className="flex--row align--itm--center justify--s--between">
            {board &&
                <React.Fragment>
                    <React.Fragment>
                        <Text
                            className={'bigger'}
                            content={capitalizeAll(board?.name)} fs={'24px'}
                            color={themeContext.getTheme().textColor}
                        />

                        <div className={'smaller'}>
                            <div onClick={handleClick} className={'flex--row align--itm--center g--8'}>
                                <Text
                                    content={capitalizeAll(board?.name ? board?.name : '')}
                                    fs={'18px'}
                                    color={themeContext.getTheme().textColor}
                                />

                                <Icon2 icon={smallModalContext.getModal() ? 'drop--up' : 'drop--down'}/>
                            </div>
                        </div>
                    </React.Fragment>

                    <div className="flex--row align--itm--center justify--s--between nav--g--25">
                        <Button className={'bigger'} onClick={handleNewTask}>
                            + Add New Task
                        </Button>

                        <Button padding={'5px 18px 10px'} className={'smaller'} onClick={handleNewTask}>
                            +
                        </Button>

                        <Popover
                            top={'100%'}
                            right={'100%'}
                            component={<Icon icon={MenuSvg}/>}
                        >
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