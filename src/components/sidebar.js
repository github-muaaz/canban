import styled from "styled-components";
import Boards from "./common/boards";
import NightModeBtn from "./common/nightModeBtn";
import Button from "./common/element/button";
import Icon from "./common/element/icon";
import EyeSvg from "../assets/icons/eye.svg";

const WrapperStyled = styled.div`
  position: relative;

`

const TempStyled = styled.div`
  width: 300px;
  height: 100%;
  //background-color: blue;
  transition: 0.25s linear;
`

const DivStyled = styled.aside`
  position: absolute;
  top: 0;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.25s linear;
  //background-color: rgba(255, 0, 0, 0.22);
  border-right: 1px solid var(--lines-light, #E4EBFA);
  overflow: hidden;
  padding-bottom: 20px;
`

const Sidebar = ({onToggle}) => {

    return (<WrapperStyled>

        <TempStyled id={"my--inner--sidebar"}/>

        <DivStyled id={"my--sidebar"}>
            <Boards/>

            <div className={'p--25'}>
                <NightModeBtn/>

                <Button onClick={onToggle} bg={"transparent"}
                        color={' var(--medium-grey, #828FA3)'}
                        padding={'15px 5px'}
                        noHover
                >
                    <Icon src={EyeSvg}/>
                    <span>Hide Sidebar</span>
                </Button>

            </div>
        </DivStyled>
    </WrapperStyled>)
}

export default Sidebar;