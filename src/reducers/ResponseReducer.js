export const initialState = {
  response:[]
};

export const ResponseReducer = (state, action) => {
  switch (action.type) {
    
    case 'setResponse':
      return {...state, response:[...state.response,  action.payload] };
      break;
    
      case 'setResponseRemove':
        console.log(state)
        return {
          ...state,
          response: state.response.splice(action.payload,1)
          // response: state.response.filter(index=>index !== action.payload)
        }
      // return  state.filter((item,index)=>index !== action.payload);
        break;
    default:
      return state;
  }
}