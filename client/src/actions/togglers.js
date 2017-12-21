
export const TOGGLE_TOGGLER = Symbol('TOGGLE_TOGGLER');

export const toggleColorPicker = (key, toggledOn) => {
  return{
    type: TOGGLE_TOGGLER,
    key,
    toggledOn,
  };
}



