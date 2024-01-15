import {useState} from "react";
import Button from "./element/button";
import Icon from "./element/icon/icon";

const NightModeBtn = () => {

    const [checked, setChecked] = useState(false);
    const [posotion, setPosition] = useState('10');

    const handleClick = () => {
        if (checked) {
            setPosition('10');
            setChecked(false);
            return;
        }

        setPosition('30');
        setChecked(true);
    }

    return (
        <Button onClick={handleClick} borderR={'6px'} bg={"var(--light-grey-light-bg, #F4F7FD)"} width={'100%'} noHover>
            <Icon icon={'sun'}/>

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 40 20" fill="#fff">
                <rect x="0" y="0" width="40" height="20" rx="10" fill="#635FC7"/>
                <circle cx={posotion} cy="10" r="7" fill="white"/>
            </svg>

            <Icon icon={'moon'}/>
        </Button>)
}

export default NightModeBtn;