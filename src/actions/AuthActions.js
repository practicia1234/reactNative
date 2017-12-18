import firebase from 'firebase';

export const fieldChange = (payload) => {
  return {
    type: payload.actionType,
    payload
  };
};

export const SignUpAction = (payload) => {
  console.log(payload);
  return (dispatch) => {
    const email = 'subu@gmail.com';
    const password = '123456';
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => signUpSuccess(dispatch, user))
      .catch((error) => {
        signUpFail(dispatch, error);
      });
  };
};

// Signup success function
const signUpSuccess = (dispatch, user) => {
  dispatch({
    type: 'SIGNUP_SUCCESS',
    payload: user
  });
};

// signup fail function
const signUpFail = (dispatch, error) => {
  dispatch({
    type: 'SIGNUP_FAIL',
    payload: error
  });
};
