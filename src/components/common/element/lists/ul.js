import React from "react";
import List from "./list";

const Ul = ({items}) => {

    return (
        <ul>
            {items.map(item =>
                <List key={item.id} item={item}/>
            )}
        </ul>
    )
}

export default Ul;