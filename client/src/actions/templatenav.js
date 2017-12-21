export const TOGGLE_TEMPLATE_NAV = Symbol('TOGGLE_TEMPLATE_NAV');

export const toggleTemplateNav = (isHidden) =>{

    return{
      type: TOGGLE_TEMPLATE_NAV,
      isHidden
    };
 
}

