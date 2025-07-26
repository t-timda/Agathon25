import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';
import { login } from '../api/auth'; // 만들어 둔 login 함수를 import 합니다.

export default function KakaoRedirect() {
  const nav = useNavigate();
  const location = useLocation();
  const { setTokens } = useAuthStore();

  useEffect(() => {
    // 1. URL에서 토큰이 아닌 'code'를 추출합니다.
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    if (!code) {
      console.error('인증 코드를 받지 못했습니다.');
      alert('로그인에 실패했습니다. 다시 시도해 주세요.');
      nav('/'); // 로그인 페이지로 돌려보냅니다.
      return;
    }

    // 2. 받은 'code'로 백엔드에 로그인 요청을 보내는 함수
    const handleLogin = async (authCode) => {
      try {
        // auth.js의 login 함수를 호출하고, 서버로부터 JSON 응답을 받습니다.
        const res = await login(authCode);

        // 3. 응답 받은 JSON에서 accessToken과 refreshToken을 추출합니다.
        const { accessToken, refreshToken } = res; // 응답 데이터 구조에 맞게 조정하세요.

        if (accessToken && refreshToken) {
          // 4. Zustand store에 토큰을 저장합니다.
          setTokens(accessToken, refreshToken);
          // 5. 로그인 성공 후 메인 페이지로 이동합니다.
          nav('/main');
        } else {
          throw new Error('토큰이 응답에 포함되지 않았습니다.');
        }
      } catch (error) {
        console.error('로그인 처리 중 오류 발생:', error);
        alert('로그인에 실패했습니다. 다시 시도해 주세요.');
        nav('/');
      }
    };

    handleLogin(code);
  }, [location, nav, setTokens]); // 의존성 배열에 맞게 추가

  return <>로그인 처리 중...</>;
}