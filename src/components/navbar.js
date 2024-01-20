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
        modalContext.setModalItem({})
        modalContext
            .setModal(
                <TaskForm
                    title={'Add New Task'}
                    btnTitle={'Create Task'}
                    boardId={board?.id}
                />);
    }

    const handleEdit = () => {
        modalContext
            .setModal(
                <BoardForm
                    title={'Add New Task'}
                    btnTitle={'Create Task'}
                    defaultValues={board}
                />);
    }

    return (
        <DivStyled className="flex--row align--itm--center justify--s--between">
            {board &&
                <React.Fragment>
                    <Text content={board?.name} fs={'24px'}/>

                    <div className="flex--row align--itm--center justify--s--between g--25">
                        <Button onClick={handleNew}>
                            + Add New Task
                        </Button>

                        <Icon onClick={handleEdit} icon={MenuSvg}/>
                    </div>
                </React.Fragment>
            }
        </DivStyled>
    )
}

export default Navbar;