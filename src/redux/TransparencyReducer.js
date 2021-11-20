import * as ActionTypes from './ActionTypes';
import { initialState } from './initialState';

export const TrasparencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_TRANSPARENCY:
      const newTrasparency = action.payload;
      return {...state, Trasparency: newTrasparency};
    default:
        return state;
  }
}