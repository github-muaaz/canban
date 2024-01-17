import React from "react";
import Span from "../../text/span";

const Label = ({htmlFor, title}) => {

    return(
        <label htmlFor={htmlFor}>
            <Span content={title}/>
        </label>
    )
}

export default Label;