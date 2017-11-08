export const OPEN_MENU = Symbol('OPEN_MENU');
export const CLOSE_MENU = Symbol('CLOSE_MENU');
export const TOGGLE_MENU = Symbol('TOGGLE_MENU');

export const toggleMenu = (isHidden) =>{

    return{
      type: TOGGLE_MENU,
      isHidden
    };
 
}

