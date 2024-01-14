import React, {useContext, useEffect, useState} from "react";
import Ul from "./element/ul";
import {boards as fake} from "../../utils/fake";
import BoardContext from "../../context/boardContext";

const Boards = () => {

    const boardContext = useContext(BoardContext);

    const [boards, setBoards] = useState(fake);

    useEffect(() => {
        boardContext.onBoardChanged(boards[0])
    }, [])


    return (
        <div style={{padding: '20px 20px 35px 0'}}>
            <h4 className="board--subtitle">ALL BOARDS ({boards.length})</h4>

            <Ul items={boards}/>
        </div>
    )
}

export default Boards;