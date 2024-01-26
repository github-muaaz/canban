import React from "react";

const SmallModalContext = React.createContext();

export const SmallModalProvider = SmallModalContext.Provider;
export const SmallModalConsumer = SmallModalProvider.Consumer;

export default SmallModalContext;