import {
  TOGGLE_COLOR_PICKER,
  CHOOSE_COLOR,
} from '../actions/setup'


const DEFAULT_STATE={
  colorDisplay:{},
  colorChoice:{}
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case TOGGLE_COLOR_PICKER:
      return state = {
        ...state, 
        colorDisplay: { 
          ...state.colorDisplay,
          [payload.key]: payload.colorPickerDisplay,
        }
      };

    case CHOOSE_COLOR:
    state = {
      ...state, 
      colorChoice: { 
        ...state.colorChoice,
        [payload.key]: payload.colorChoice,
      }
    };

    default:
      return state;
  }
}