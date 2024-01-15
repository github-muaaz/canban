import styled from "styled-components";
import Column from "./column";
import Button from "./element/button";

const BoxStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
`

const Board = ({board}) => {

    return(
        <BoxStyled className={'p--25 h--100 g--25'}>
            {board.columns.map(column =>
                <Column column={column} key={column.id}/>
            )}

           <Button
               className={'medium--grey f--size--24 m--top--40'}
               width={'280px'}
               borderR={'6px'}
               noHover
               bg={'var(--lines-light)'}
           >
               + New Column
           </Button>
        </BoxStyled>
    )
}

export default Board;