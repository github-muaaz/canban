import React from "react";

const PopoverContext = React.createContext();

export const PopoverProvider = PopoverContext.Provider;
export const PopoverConsumer = PopoverContext.Consumer;

export default PopoverContext;