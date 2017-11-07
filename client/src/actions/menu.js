
export const toggleMenu = (key, offset) =>{
  return{
    type: 'openMenu',
    key,
    offset,
  };
}

export const closeMenu = () =>{
  return{
    type: 'closeMenu',
    offset:"-300px",
  };
}

export const openMenu = () =>{
  return{
    type: 'closeMenu',
    offset:"0px",
  };
}
