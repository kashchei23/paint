import * as ActionTypes from './ActionTypes';

export const changeColor = (newColor) => ({
    type: ActionTypes.CHANGE_COLOR,
    payload: {
        Color: newColor,
    }
});

export const changeTempColor = (newTempColor) => ({
    type: ActionTypes.CHANGE_TEMP_COLOR,
    payload: {
        TempColor: newTempColor,
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