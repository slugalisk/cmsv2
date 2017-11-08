import {
  TOGGLE_PAGE_BACKGROUND_COLOR,
  TOGGLE_PAGE_HEADER_COLOR_1,
} from '../actions/setup'


const DEFAULT_STATE={
  pageBackgroundColorDisplay:true,
  pageHeaderColor1Display:true,
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case TOGGLE_PAGE_BACKGROUND_COLOR:
      state = {...state, pageBackgroundColorDisplay:payload.pageBackgroundColorDisplay};
    default:
      return state;
  }

  switch(payload.type){
    case TOGGLE_PAGE_HEADER_COLOR_1:
      state = {...state, pageHeaderColor1Display:payload.pageHeaderColor1Display};
    default:
      return state;
  }

};
