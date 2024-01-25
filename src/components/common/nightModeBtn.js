import {useContext, useState} from "react";
import Button from "./element/button";
import Icon from "./element/icon/icon";
import MyThemeContext from "../../context/myThemeContext";
import config from "../../config.json";

const NightModeBtn = () => {

    const [checked, setChecked] = useState(false);
    const [position, setPosition] = useState('10');

    const themeContext = useContext(MyThemeContext);

    const handleClick = () => {
        if (checked) {
            setPosition('10');
            setChecked(false);

            themeContext.setTheme(config.defaultTheme)
            return;
        }

        setPosition('30');
        setChecked(true);
        themeContext.setTheme(config.darkTheme)
    }

    return (
        <Button
            onClick={handleClick}
            borderR={'6px'}
            bg={themeContext.getTheme().darkBgColor}
            w={'100%'}
            noHover
        >
            <Icon icon={'sun'}/>

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 40 20" fill="#fff">
                <rect x="0" y="0" width="40" height="20" rx="10" fill="#635FC7"/>
                <circle cx={position} cy="10" r="7" fill="white"/>
            </svg>

            <Icon icon={'moon'}/>
        </Button>)
}

export default NightModeBtn;