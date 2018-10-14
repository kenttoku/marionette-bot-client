// import { API_BASE_URL } from '../config';
// import { normalizeResponseErrors } from './utils';
// import { clearAuthToken } from '../local-storage';

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
  type: AUTH_ERROR,
  error
});

// export const refreshAuthToken = () => (dispatch, getState) => {
//   dispatch(authRequest());
//   const authToken = getState().auth.authToken;
//   return fetch(`${API_BASE_URL}/auth/refresh`, {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${authToken}`
//     }
//   })
//     .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
//     .catch(err => {
//       dispatch(authError(err));
//       dispatch(clearAuth());
//       clearAuthToken(authToken);
//     });
// };