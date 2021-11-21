import * as ActionTypes from './ActionTypes';
import { initialState } from './initialState';

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_THICKNESS:
      const newThickness = action.payload;
      return {...state, Thickness: newThickness};
    case ActionTypes.CHANGE_COLOR:
      const newColor = action.payload;
      return {...state, Color: newColor};
    case ActionTypes.CHANGE_TRANSPARENCY:
      const newTransparency = action.payload;
      return {...state, Transparency: newTransparency};
    case ActionTypes.CHANGE_TEMP_COLOR:
      const newTempColor = action.payload;
      return {...state, TempColor: newTempColor};
    default:
        return state;
  }
}