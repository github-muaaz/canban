import styled from "styled-components";
import Button from "./common/element/button";
import Icon from "./common/element/icon/icon-img";
import React, {useContext} from "react";
import BoardContext from "../context/boardContext";
import MenuSvg from "../assets/icons/menu-dots.svg";
import ModalContext from "../context/modalContext";
import Modal from "./common/element/modal/modal";
import Text from "./common/element/text";
import Input from "./common/element/form/input";
import Textarea from "./common/element/form/textarea";
import ListInput from "./common/element/form/listInput";
import Form from "./common/element/form/form";
import Select from "./common/element/form/select";
import {getStatuses, getTask} from "../utils/fake";

const DivStyled = styled.div`
  padding: 20px 30px;
  width: 100%;
  border-bottom: 1px solid var(--lines-light, #E4EBFA);
  border-left: 1px solid var(--lines-light, #E4EBFA);
`

const Navbar = () => {

    const boardContext = useContext(BoardContext);
    const modalContext = useContext(ModalContext);

    const handleNew = () => modalContext.openModal((<ModalBody/>));

    const handleEdit = () => {
        const task = getTask('6837f484-fffd-47ea-8108-8797641d7d9e');

        modalContext.openModal((<ModalBody/>), task);
    }

    return (
        <DivStyled className="flex--row align--itm--center justify--s--between">
            <Text content={boardContext.getSelectedBoard()?.title} fs={'24px'}/>

            <div className="flex--row align--itm--center justify--s--between g--25">
                <Button onClick={handleNew}>
                    + Add New Task
                </Button>

                <Icon icon={MenuSvg} onClick={handleEdit}/>
            </div>
        </DivStyled>
    )
}

const ModalBody = () => {

    return(
        <Modal>
            <FormBody/>
        </Modal>
    )
}

const FormBody = () => {

    const modalContext = useContext(ModalContext);

    const task = modalContext.getModalItem();

    const statuses = getStatuses();

    return(
        <Form className={'flex--column g--24'}>
            <Text content={'Add New Task'}/>

            <Input
                placeholder={'e.g. Take coffee break'}
                name={'title'}
                label={'Title'}
                defaultValue={task?.title}
            />

            <Textarea
                placeholder={'e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'}
                name={'description'}
                label={'Description'}
                defaultValue={task?.description}
            />

            <ListInput
                name={'subtasks'}
                label={'Subtasks'}
                btnLabel={'+ Add New Subtask'}
                placeholder={'e.g. Make coffee'}
            />

            <Select
                name={'status'}
                label={'Current Status'}
                defaultValue={task?.status?.id}
                options={statuses}
            />

            <Button
                title={'Create Task'}
                type={'submit'}
            />
        </Form>
    )
}



export default Navbar;