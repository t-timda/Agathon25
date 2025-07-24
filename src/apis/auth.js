import instance from './axios';

export const login = async (code) => {
  const res = await instance.post('/login/oauth2/code/kakao', { code });

  return res.data;
};

export const getCurrentUser = async () => {
  const res = await instance.get('/api/user/me');
  return res.data;
};