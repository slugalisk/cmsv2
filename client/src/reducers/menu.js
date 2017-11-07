const DEFAULT_STATE={
  offset:"-300px",
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case 'toggleMenu':
      return payload.offset;
    default:
      return state;
  }
};
