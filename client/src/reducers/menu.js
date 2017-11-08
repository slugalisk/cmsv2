
export default(state={offset:"-300px"}, payload)=>
{
  switch(payload.type){
    //case 'toggleMenu':
    //  return payload.offset;
    case 'toggleMenu':
      state = {...state, offset:payload.offset};
    default:
      return state;
  }
};
