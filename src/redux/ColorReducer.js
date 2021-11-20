import * as ActionTypes from './ActionTypes';
import { initialState } from './initialState';

export const ColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_COLOR:
      const newColor = action.payload;
      return {...state, Color: newColor};
    default:
        return state;
  }
}