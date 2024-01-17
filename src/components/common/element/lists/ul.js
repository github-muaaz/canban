import List from "./list";
import Button from "../button";
import Icon from "../icon/icon";

const Ul = ({items}) => {

    const handleClick = () => {

    }

    return (
        <ul>
            {items.map(item =>
                <List key={item.id} item={item}/>
            )}

            <Button
                onClick={handleClick}
                bg={'transparent'}
                color={'var(--main-purple)'}
                padding={'16px 20px 16px 35px'}
                noHover
            >
                <Icon icon={'board--purple'}/>

                <span>
                    + Create New Board
                </span>
            </Button>
        </ul>
    )
}

export default Ul;