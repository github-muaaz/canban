import styled from "styled-components";
import Button from "./common/element/button";
import Icon from "./common/element/icon/icon-img";
import {useContext} from "react";
import BoardContext from "../context/boardContext";
import MenuSvg from "../assets/icons/menu-dots.svg";

const DivStyled = styled.div`
  padding: 20px 30px;
  width: 100%;
  border-bottom: 1px solid var(--lines-light, #E4EBFA);
  border-left: 1px solid var(--lines-light, #E4EBFA);
`

const Navbar = () => {

    const boardContext = useContext(BoardContext);

    return (
        <DivStyled className="flex--row align--itm--center justify--s--between">
            <h3 className="my--text f--size--24">{boardContext.selectedBoard?.title}</h3>

            <div className="flex--row align--itm--center justify--s--between g--25">
                <Button>
                    + Add New Task
                </Button>

                <Icon icon={MenuSvg}/>
            </div>
        </DivStyled>
    )
}

export default Navbar;