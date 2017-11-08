import {
  OPEN_PAGE_BACKGROUND_COLOR,
  CLOSE_PAGE_BACKGROUND_COLOR,
  TOGGLE_PAGE_BACKGROUND_COLOR,
} from '../actions/setup'


const DEFAULT_STATE={
  pageBackgroundColorHidden:true,
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case TOGGLE_PAGE_BACKGROUND_COLOR:
      state = {...state, pageBackgroundColorHidden:payload.pageBackgroundColorHidden};
    default:
      return state;
  }
};
