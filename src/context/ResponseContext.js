import React, { createContext, useReducer } from 'react';
import {initialState, ResponseReducer} from '../reducers/ResponseReducer';

export const ResponseContext = createContext();

export default ({ children }) => {
  const [state, dispatch] = useReducer(ResponseReducer, initialState);



  return (
    <ResponseContext.Provider value={{state, dispatch}}>
      {children}
    </ResponseContext.Provider>
  )
}