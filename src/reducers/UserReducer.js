export const initialState = {
  avatar: '',
  session: '',
  userName: ''
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'setAvatar':
      return { ...state, avatar: action.payload.avatar };
      break;
    case 'setSession':
      return { ...state, session: action.payload.session };
      break;
    case 'setUserName':
      return { ...state, userName: action.payload.userName };
      break;
    default:
      return state;
  }
}