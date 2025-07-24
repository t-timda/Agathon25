import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-8 bg-white shadow">
      {/* 왼쪽: 웹페이지 제목 */}
      <div className="font-bold text-xl text-blue-600">MyPo</div>

      {/* 중간: 네비게이션 메뉴 */}
      <div className="flex space-x-16">
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">서비스 소개</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">공지사항</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">마포 소식</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">마이페이지</a>
      </div>

      {/* 오른쪽: 로그인 버튼 */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold">
        로그인
      </button>
    </nav>
  );
};

export default Navbar;