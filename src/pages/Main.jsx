import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sampleImg1 from '../assets/sample.jpg';
import leftArrow from '../assets/leftarrow.png';
import rightArrow from '../assets/rightarrow.png';

const images = [sampleImg1, leftArrow, rightArrow];

export default function Main() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const prevImage = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full gap-y-12">
      {/* 상단: 소개글 + 사진 */}
      <div className="flex items-center justify-center w-full gap-x-24">
        {/* 왼쪽: 소개글 */}
        <div>
          <div className="text-5xl font-extrabold whitespace-pre-line text-left text-blue-600 mb-4">
            {`내 손으로 끝내는\n손쉬운 1인 부동산 거래`}
          </div>
          <div className="text-xl text-black whitespace-pre-line text-left">
            {`매물-계약 준비-정책까지 한 번에 연결하는\n마포를 위한 주거 탐색 솔루션`}
          </div>
        </div>
        {/* 오른쪽: 사진 + 화살표 */}
        <div className="flex items-center gap-x-4">
          <button
            onClick={prevImage}
            className="text-3xl text-gray-400 hover:text-blue-600 transition-colors"
            aria-label="이전 사진"
          >
            &#8592;
          </button>
          <img
            src={images[current]}
            alt={`소개 이미지 ${current + 1}`}
            className="w-80 h-80 object-cover rounded-full cursor-pointer transition-transform hover:scale-105 block flex-shrink-0"
            onClick={() => navigate('/Detail')}
          />
          <button
            onClick={nextImage}
            className="text-3xl text-gray-400 hover:text-blue-600 transition-colors"
            aria-label="다음 사진"
          >
            &#8594;
          </button>
        </div>
      </div>
      {/* 하단: 설정 및 버튼 묶음 */}
      <div className="flex flex-col items-center gap-y-2 bg-white rounded-lg border border-black shadow px-8 py-6">
        {/* 라벨(문구) 한 줄 */}
        <div className="flex w-full justify-between mb-1">
          <span className="font-semibold text-gray-700 w-24 text-center">목적</span>
          <span className="font-semibold text-gray-700 w-24 text-center">동네</span>
          <span className="font-semibold text-gray-700 w-24 text-center">예산</span>
          <span className="font-semibold text-gray-700 w-24 text-center">기간</span>
        </div>
        {/* 입력창+버튼 한 줄 */}
        <div className="flex w-full items-center justify-between gap-x-2">
          <select className="border rounded px-2 py-1 w-24">
            <option>거주</option>
            <option>투자</option>
            <option>임대</option>
          </select>
          <input type="text" placeholder="예: 망원동" className="border rounded px-2 py-1 w-24" />
          <input type="number" placeholder="만원 단위" className="border rounded px-2 py-1 w-24" />
          <input type="text" placeholder="예: 6개월" className="border rounded px-2 py-1 w-24" />
          <button className="ml-4 px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors text-base shadow">
            MyPo 찾기
          </button>
        </div>
      </div>
    </div>
  );
}