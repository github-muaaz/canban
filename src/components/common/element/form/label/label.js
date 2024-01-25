import React, {useContext} from "react";
import Span from "../../text/span";
import MyThemeContext from "../../../../../context/myThemeContext";

const Label = ({htmlFor, title}) => {

    const themeContext = useContext(MyThemeContext);

    return(
        <label htmlFor={htmlFor}>
            <Span content={title} color={themeContext.getTheme().textColor2}/>
        </label>
    )
}

export default Label;