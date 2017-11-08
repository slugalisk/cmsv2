export const TOGGLE_PAGE_BACKGROUND_COLOR = Symbol('TOGGLE_PAGE_BACKGROUND_COLOR');

export const togglePageBackgroundColor = (pageBackgroundColorDisplay) =>{
    return{
      type: TOGGLE_PAGE_BACKGROUND_COLOR,
      pageBackgroundColorDisplay
    };
}

export const TOGGLE_PAGE_HEADER_COLOR_1 = Symbol('TOGGLE_PAGE_HEADER_COLOR_1');

export const togglePageHeaderColor1 = (pageHeaderColor1Display) =>{
  return{
    type: TOGGLE_PAGE_HEADER_COLOR_1,
    pageHeaderColor1Display
  };
}

