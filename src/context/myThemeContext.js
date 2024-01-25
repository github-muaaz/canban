import React from "react";

const MyThemeContext = React.createContext();

export const MyThemeProvider = MyThemeContext.Provider;
export const MyThemeConsumer = MyThemeContext.Consumer;

export default MyThemeContext;