import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-16 flex justify-between items-center px-10 bg-sky-400 text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <span className="text-2xl font-bold tracking-tight text-white">MyPo</span>
      <span
        onClick={() => navigate("/main")}
        className="hover:text-yellow-300 transition flex items-center space-x-2 cursor-pointer"
      >
        <img alt="관련 이미지" className="w-6 h-6" />
        <span className="text-white">메인페이지</span>
      </span>

      <span onClick={() => navigate("/selectproperty")}>
        <span className="text-white">매물 선택</span>
      </span>
    </nav>
  );
}
