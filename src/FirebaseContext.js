import React from 'react';

export const FireBaseContext = React.createContext();

export function FireBaseContextProvider({ children, db }) {
  return <FireBaseContext.Provider value={{ db }}>{children}</FireBaseContext.Provider>;
}
