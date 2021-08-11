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
        }
        break;
      case 'setPhoto':    
      return{
        ...state,
          response: state.response.map(res=> res.id== action.payload.id ? {...res, photo: action.payload.photo}: {...res})
         }
        break;
      case 'setNote':    
      return{
        ...state,
          response: state.response.map(res=> res.id== action.payload.id ? {...res, note: action.payload.note}: {...res})
         }
        break;  
    default:
      return state;
  }
}