import styled from "styled-components";
import Column from "./column";
import Button from "./element/button";

// const BtnStyled

const BoxStyled = styled.div`
  display: flex;
  gap: 25px;
  padding: 25px;

  background-color: red;
  overflow-y: auto;
`

const Board = ({board}) => {

    return(
        <BoxStyled>
            {board.columns.map(column =>
                <Column column={column} key={column.id}/>
            )}

           <Button width={'280px'} borderR={'6px'}>
               + New Column
           </Button>
        </BoxStyled>
    )
}

export default Board;