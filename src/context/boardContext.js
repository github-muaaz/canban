import React from "react";

const BoardContext = React.createContext();

export const BoardProvider = BoardContext.Provider;
export const BoardConsumer = BoardContext.Consumer;

export default BoardContext;