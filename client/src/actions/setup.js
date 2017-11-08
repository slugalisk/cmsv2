
export const TOGGLE_COLOR_PICKER = Symbol('TOGGLE_COLOR_PICKER');
export const CHOOSE_COLOR = Symbol('CHOOSE_COLOR');

export const toggleColorPicker = (key, colorPickerDisplay) => {
  return{
    type: TOGGLE_COLOR_PICKER,
    key,
    colorPickerDisplay,
  };
}

export const chooseColor = (key, colorChoice) => {
  return{
    type: CHOOSE_COLOR,
    key,
    colorChoice,
  };
}


