import styled from "styled-components";
import Button from "./element/button";

const BoxStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 20px;
  align-items: center;
`

const EmptyBoards = () => {

    return(
        <BoxStyled className="flex--column">
            <p className="my--text medium--grey">This board is empty. Create a new column to get started.</p>

            <Button>+ Add New Column</Button>
        </BoxStyled>
    )
}

export default EmptyBoards;