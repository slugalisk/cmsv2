export const OPEN_PAGE_BACKGROUND_COLOR = Symbol('OPEN_PAGE_BACKGROUND_COLOR');
export const CLOSE_PAGE_BACKGROUND_COLOR = Symbol('CLOSE_PAGE_BACKGROUND_COLOR');
export const TOGGLE_PAGE_BACKGROUND_COLOR = Symbol('TOGGLE_PAGE_BACKGROUND_COLOR');

export const togglePageBackgroundColor = (pageBackgroundColorHidden) =>{
    return{
      type: TOGGLE_PAGE_BACKGROUND_COLOR,
      pageBackgroundColorHidden
    };
}


