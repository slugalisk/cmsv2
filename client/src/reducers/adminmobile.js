import {
  TOGGLE_MENU,
} from '../actions/adminmobile'

const DEFAULT_STATE={
  isHidden:true,
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case TOGGLE_MENU:
      return state = {...state, isHidden:payload.isHidden};
    default:
      return state;
  }
};

