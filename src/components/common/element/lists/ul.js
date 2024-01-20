import List from "./list";
import Button from "../button";
import Icon from "../icon/icon";
import React, {useContext} from "react";
import ModalContext from "../../../../context/modalContext";
import BoardForm from "../../board/boardForm";

const Ul = ({items}) => {

    const modalContext = useContext(ModalContext);

    const handleClick = () => {
        modalContext
            .setModal(
                <BoardForm
                    title={'Add New Board'}
                    btnTitle={'Create New Board'}
                />);
    }

    return (
        <ul>
            {items.map(item =>
                <List key={item.id} item={item}/>
            )}

            <Button
                onClick={handleClick}
                bg={'transparent'}
                color={'var(--main-purple)'}
                padding={'16px 20px 16px 35px'}
                noHover
            >
                <Icon icon={'board--purple'}/>

                <span>
                    + Create New Board
                </span>
            </Button>
        </ul>
    )
}

export default Ul;