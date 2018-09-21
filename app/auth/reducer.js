import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from './constants';

export const authorize = (login, password) => ({
  type: AUTH_REQUEST,
  payload: { login, password },
});

const initialState = {
  authenticated: localStorage.getItem('token'),
  error: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SUCCESS: {
      return { ...state, token: payload };
    }
    case AUTH_FAILURE: {
      return { ...state, error: payload };
    }
    default:
      return state;
  }
};
