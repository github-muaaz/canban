import styled from "styled-components";
import Modal from "./element/modal";
import React, {useContext} from "react";
import ModalContext from "../../context/modalContext";
import Text from "./element/text";
import Span from "./element/text/span";

const TaskStyled = styled.div`
  padding: 23px 16px;
  border-radius: 8px;
  background: var(--white, #FFF);
  box-shadow: 0 4px 6px 0 rgba(54, 78, 126, 0.10);
  cursor: pointer;
  gap: 8px;
`

const Task = ({task}) => {

    const modalC = useContext(ModalContext);

    const {subtasks} = task;

    return (<React.Fragment>
            <TaskStyled className={"flex--column"} onClick={() => modalC.toggleModal(true)}>
                <Text content={task.title} fs={'15px'}/>

                <Span content={`${subtasks.completed} of ${subtasks.completed} subtasks`}/>
            </TaskStyled>

            <Modal>
                <button onClick={() => modalC.toggleModal(false)}
                        style={{padding: '30px'}}>
                    click
                </button>
            </Modal>
        </React.Fragment>

    )
}

export default Task;