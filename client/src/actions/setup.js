
export const TOGGLE_COLOR_PICKER = Symbol('TOGGLE_COLOR_PICKER');

export const toggleColorPicker = (key, colorPickerDisplay) => {
  return{
    type: TOGGLE_COLOR_PICKER,
    key,
    colorPickerDisplay,
  };
}

