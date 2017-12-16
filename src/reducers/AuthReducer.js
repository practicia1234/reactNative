const INITIAL_STATE = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload.value };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload.value };
    case 'FIRST_NAME':
      return { ...state, firstName: action.payload.value };
    case 'LAST_NAME':
      return { ...state, lastName: action.payload.value };
    case 'SEARCH_TEACHER_CHANGED':
      return { ...state, seacrhTeacherText: action.payload.value };
    default:
      return state;
  }
};
