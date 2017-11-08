import {
  TOGGLE_MENU,
  OPEN_MENU,
  CLOSE_MENU,
} from '../actions/menu'

const DEFAULT_STATE={
  isHidden:true,
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case TOGGLE_MENU:
      state = {...state, isHidden:payload.isHidden};
    default:
      return state;
  }
};
