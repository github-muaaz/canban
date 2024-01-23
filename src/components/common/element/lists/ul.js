import List from "./list";
import Button from "../button";
import Icon from "../icon/icon";
import React, {useContext} from "react";
import ModalContext from "../../../../context/modalContext";
import BoardForm from "../../board/boardForm";
import config from "../../../../config.json";
import {toast} from "react-toastify";
import http from "../../../../service/httpService";

const Ul = ({items}) => {

    const modalContext = useContext(ModalContext);

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