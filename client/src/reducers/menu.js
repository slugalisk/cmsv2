const DEFAULT_STATE={
  map: {},
  offset:[],
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case 'openMenu':
      return payload.offset;
    case 'closeMenu':
      return payload.offset;
    default:
      return state;
  }
};
