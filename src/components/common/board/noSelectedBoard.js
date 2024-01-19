import styled from "styled-components";
import Text from "../element/text";

const BoxStyled = styled.div`
  gap: 20px;
  align-items: center;
`

const NoSelectedBoard = () => {

    return(
        <BoxStyled className="flex--column center--v--g">
            <Text
                className="medium--grey"
                content={'No Selected Board Yet'}
            />
        </BoxStyled>
    )
}

export default NoSelectedBoard;