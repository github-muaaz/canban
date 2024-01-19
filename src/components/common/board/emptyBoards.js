import styled from "styled-components";
import Button from "../element/button";
import Text from "../element/text";

const BoxStyled = styled.div`
  gap: 20px;
  align-items: center;
`

const EmptyBoards = () => {

    return(
        <BoxStyled className="flex--column center--v--g">
            <Text
                className="medium--grey"
                content={'This board is empty. Create a new column to get started.'}
            />
            <Button>+ Add New Column</Button>
        </BoxStyled>
    )
}

export default EmptyBoards;