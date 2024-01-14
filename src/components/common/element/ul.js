import List from "./list";
import Button from "./button";
import Icon from "./icon";
import PurpleGridSvg from "../../../assets/icons/board-purple.svg";

const Ul = ({items}) => {

    const handleClick = () => {

    }

    return (
        <ul>
            {items.map(item =>
                <List key={item.id} item={item}/>
            )}

            <Button onClick={handleClick} bg={'transparent'} color={'var(--main-purple)'} padding={'16px 20px 16px 35px'} noHover>
                <Icon src={PurpleGridSvg}/>

                <span>
                    + Create New Board
                </span>
            </Button>
        </ul>
    )
}

export default Ul;