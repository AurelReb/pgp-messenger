import httpClient from './httpClient';

import { USER_API_URL, GET_TOKEN_URL, REFRESH_TOKEN_URL } from './constants';

const getMyProfile = () => httpClient.get(`${USER_API_URL}me/`);

const getUserToken = (username, password) =>
  httpClient.post(GET_TOKEN_URL, { username, password });

const refreshUserToken = () => {
  const refresh = sessionStorage.refresh_token;
  return httpClient.post(REFRESH_TOKEN_URL, { refresh });
};

const userApi = { getMyProfile, getUserToken, refreshUserToken };

export default userApi;
