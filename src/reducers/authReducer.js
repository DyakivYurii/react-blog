import { AUTH } from '../constans/typesAction';

const initialState = {
  userId: null,
  email: '',
  firstName: '',
  secondName: '',
  errorMessage: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.SIGN_IN_REQUEST: {
      return { ...state, errorMessage: null };
    }
    case AUTH.SIGN_IN_SUCCESS: {
      return { ...state, ...action.info };
    }
    case AUTH.SIGN_IN_FAILURE: {
      return { ...state, errorMessage: action.info.errorMessage };
    }

    case AUTH.SIGN_OUT_REQUEST: {
      return { ...state, errorMessage: null };
    }
    case AUTH.SIGN_OUT_SUCCESS: {
      return { ...state, ...initialState };
    }
    case AUTH.SIGN_OUT_FAILURE: {
      return { ...state, errorMessage: action.info.errorMessage };
    }

    case AUTH.SIGN_UP_REQUEST: {
      return { ...state, errorMessage: null };
    }
    case AUTH.SIGN_UP_SUCCESS: {
      return state;
    }
    case AUTH.SIGN_UP_FAILURE: {
      return { ...state, errorMessage: action.info.errorMessage };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
