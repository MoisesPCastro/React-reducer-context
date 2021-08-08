import { createContext, useReducer } from "react";
import { Reducer } from "../Reducer";
import { InitialValue } from "../InitialValue";
import * as Type from "../Action";
import {Context} from '../CreateContetext'

 export const AppContext = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, InitialValue);

  const changeTitle = (payload) => {
    dispatch({ type: Type.Actions.CHANGE_TITLE, payload });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
}
