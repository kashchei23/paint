import * as ActionTypes from './ActionTypes';

export const changeColor = (newColor) => ({
    type: ActionTypes.CHANGE_COLOR,
    payload: {
        Color: newColor,
    }
});

export const changeTransparency = (newTransparency) => ({
    type: ActionTypes.CHANGE_TRANSPARENCY,
    payload: {
        Transparency: newTransparency,
    }
});

export const changeThickness = (newThickness) => ({
    type: ActionTypes.CHANGE_THICKNESS,
    payload: {
        Thickness: newThickness,
    }
})