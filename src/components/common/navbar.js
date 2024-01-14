import styled from "styled-components";
import Button from "./element/button";
import Icon from "./element/icon";
import menuDots from "../../assets/icons/menu-dots.svg";
import {useContext} from "react";
import BoardContext from "../../context/boardContext";

const DivStyled = styled.div`
  padding: 20px 25px;
  width: 100%;
  border-bottom: 1px solid var(--lines-light, #E4EBFA);
  border-left: 1px solid var(--lines-light, #E4EBFA);
`

const Navbar = () => {

    const boardContext = useContext(BoardContext);

    return (
        <DivStyled className="flex--row align--itm--center justify--s--between">
            <h3 className="tab--title">{boardContext.selectedBoard?.title}</h3>

            <div className="flex--row align--itm--center justify--s--between g--25">
                <Button>
                    + Add New Task
                </Button>

                <Icon src={menuDots}/>
            </div>
        </DivStyled>
    )
}

export default Navbar;