import { API_BASE_URL } from '../config';

export const GUILD_REQUEST = 'GUILD_REQUEST';
export const guildRequest = () => ({
  type: GUILD_REQUEST
});

export const GUILD_SUCCESS = 'GUILD_SUCCESS';
export const guildSuccess = currentUser => ({
  type: GUILD_SUCCESS,
  currentUser
});

export const GUILD_ERROR = 'GUILD_ERROR';
export const guildError = error => ({
  type: GUILD_ERROR,
  error
});