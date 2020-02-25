import React, { createContext, useContext, useReducer } from 'react';

import { reducer, createDefaultState } from '../store/reducer';

export const ApplicationContext = createContext();

export function useApplicationContext() {
  return useContext(ApplicationContext);
}

// eslint-disable-next-line react/prop-types
export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, createDefaultState());

  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      {children}
    </ApplicationContext.Provider>
  );
}
