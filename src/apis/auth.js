import instance from './axios';

export const login = async (code) => {
  const res = await instance.post('/login/oauth2/code/kakao', { // 추후 url 수정
    code,
  });

  return res.data;
};

export const getCurrentUser = async () => {
  const res = await instance.get('/......'); // 추후 url 수정
  return res.data;
};