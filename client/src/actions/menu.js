export const TOGGLE_MENU = Symbol('TOGGLE_MENU');

export const toggleMenu = (isHidden) =>{
    return{
      type: TOGGLE_MENU,
      isHidden
    };
 
}

