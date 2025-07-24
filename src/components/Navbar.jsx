import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";
import signinIcon from "../assets/Signin.svg"; // 실제 경로에 맞게 수정

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const navigate = useNavigate();

  // 로그아웃 핸들러 정의
  const handleLogout = () => {
    clearAuth();
    navigate("/");
  };

  return (
    <nav className="w-full h-16 flex items-center justify-between px-8 bg-white shadow">
      {/* 왼쪽: 웹페이지 제목 */}
      <div
        className="font-bold text-xl text-blue-600 cursor-pointer"
        onClick={() => navigate("/main")}
      >
        MyPo
      </div>

      {/* 중간: 네비게이션 메뉴 */}
      <div className="flex space-x-16">
        <button
          onClick={() => navigate("/Introduction")}
          className="bg-transparent text-gray-700 hover:text-blue-600 font-medium"
        >
          서비스 소개
        </button>
        <button
          onClick={() => navigate("/Announcement")}
          className="bg-transparent text-gray-700 hover:text-blue-600 font-medium"
        >
          공지사항
        </button>
        <button
          onClick={() => navigate("/MapoNews")}
          className="bg-transparent text-gray-700 hover:text-blue-600 font-medium"
        >
          마포 소식
        </button>
        <button
          onClick={() => navigate("/MyPage")}
          className="bg-transparent text-gray-700 hover:text-blue-600 font-medium"
        >
          마이페이지
        </button>
      </div>

      {/* 오른쪽: 로그인/로그아웃 버튼 */}
      <div className="space-x-6 text-lg flex items-center">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hover:text-yellow-300 transition flex items-center space-x-2 bg-transparent border-none outline-none cursor-pointer"
          >
            <img src={signinIcon} alt="Sign In" className="w-6 h-6" />
            <span className="text-black">Log out</span>
          </button>
        ) : (
          <span
            onClick={() => navigate("/")}
            className="hover:text-yellow-300 transition flex items-center space-x-2 cursor-pointer"
          >
            <img src={signinIcon} alt="Sign In" className="w-6 h-6" />
            <span className="text-black">Sign In</span>
          </span>
        )}
      </div>
    </nav>
  );
}
