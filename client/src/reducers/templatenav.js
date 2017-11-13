import {
  TOGGLE_TEMPLATE_NAV,
} from '../actions/templatenav'

const DEFAULT_STATE={
  isHidden:true,
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case TOGGLE_TEMPLATE_NAV:
      state = {...state, isHidden:payload.isHidden};
    default:
      return state;
  }
};
