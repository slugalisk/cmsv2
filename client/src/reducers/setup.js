import {
  TOGGLE_COLOR_PICKER,
} from '../actions/setup'


const DEFAULT_STATE={
  colorDisplay:{}
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case TOGGLE_COLOR_PICKER:
      state = {
        ...state, 
        colorDisplay: { 
          ...state.colorDisplay,
          [payload.key]: payload.colorPickerDisplay,
        }
      };

    default:
      return state;
  }
}