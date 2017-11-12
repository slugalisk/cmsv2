import {
  TOGGLE_TOGGLER,
} from '../actions/togglers'


const DEFAULT_STATE={
  toggledOn:{},
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case TOGGLE_TOGGLER:
      return state = {
        ...state, 
        toggledOn: { 
          ...state.toggledOn,
          [payload.key]: payload.toggledOn,
        }
      };


    default:
      return state;
  }
}