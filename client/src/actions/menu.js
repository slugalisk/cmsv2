export const toggleMenu = (offset) =>{
  if (offset){
    return{
      type: 'toggleMenu',
      offset: '0px',
    };
  }
  else{
    return{
    type: 'toggleMenu',
    offset: '-300px',
    };
  }
}

