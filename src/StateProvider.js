
import React, { createContext, useContext, useReducer } from 'react';

//this is the DATA LAYER
const StateContext = createContext();


//Build 1 Provider
export const StateProvider = ({reducer, initState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);