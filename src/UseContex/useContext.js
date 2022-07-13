
import React from 'react';
let userContext = React.createContext();
let UserProvider = userContext.Provider;
let UserConsumer = userContext.Consumer;
export {UserProvider, UserConsumer};