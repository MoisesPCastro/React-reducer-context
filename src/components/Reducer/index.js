import * as Type from "../Action";

export const Reducer = (state, action) => {
  switch (action.type) {
    case Type.Actions.CHANGE_TITLE: {

      return { ...state, title: action.payload };
    }
  }
  return { ...state };
}
