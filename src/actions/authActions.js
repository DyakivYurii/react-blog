import { AUTH } from '../constans/typesAction';

export const signIn = (info) => {
  return { type: AUTH.SIGN_IN_REQUEST, info };
};

export const signOut = () => {
  return { type: AUTH.SIGN_OUT_REQUEST };
};

export const signUp = (info) => {
  return { type: AUTH.SIGN_UP_REQUEST, info };
};
