import React, { useState } from "react";
import Step from "../components/Step";
import blindeImg from "../assets/blinde.png";
import step4Img from "../assets/Step4.png";
import { useNavigate } from 'react-router-dom';

const stepContents = [
  // Step 1: 커스텀 JSX로 대체
  null,
  "Step 2: 서류 제출 안내 내용입니다.",
  "Step 3: 계약서 작성 안내 내용입니다.",
  "Step 4: 서명 및 확인 안내 내용입니다.",
  "Step 5: 완료 및 사후 안내 내용입니다.",
];

export default function ContractGuide() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Benefits'); // 경로는 Route에서 설정한 경로와 일치해야 함
  };
  const [selectedStep, setSelectedStep] = useState(1);

  return (
    <div className="p-8">
      {/* 단계 표시: 우측 정렬 */}
      <div className="flex justify-end items-start">
        <Step step="계약관리" />
      </div>
      {/* step 1~5 원과 선: 동일 간격, 클릭 가능 */}
      <div className="relative w-full mt-12" style={{ minWidth: 500 }}>
        {/* 파란색 선 (원 아래에 깔림) */}
        <div
          className="absolute top-1/2 left-4 right-4 h-1 bg-[#0089E1] z-0"
          style={{ transform: "translateY(-50%)" }}
        />
        {/* 원 5개를 동일 간격으로 배치, 아래에 텍스트 */}
        <div className="flex justify-between items-end relative z-10 px-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="flex flex-col items-center">
              <button
                onClick={() => setSelectedStep(num)}
                className={`w-10 h-10 flex items-center justify-center rounded-full border-4 font-bold text-lg transition
                  ${
                    selectedStep === num
                      ? "bg-[#0089E1] border-[#0089E1] text-white scale-110 shadow-lg"
                      : "bg-white border-[#0089E1] text-[#0089E1]"
                  }`}
                style={{ zIndex: 10 }}
              >
                {num}
              </button>
              <span
                className={`mt-2 text-sm font-semibold transition
                ${selectedStep === num ? "text-[#0089E1]" : "text-gray-500"}`}
              >
                Step {num}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* 선택된 step에 해당하는 내용 */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow text-lg min-h-[80px]">
        {selectedStep === 1 ? (
          <div>
            <div className="text-2xl font-bold text-[#0089E1] mb-2">
              임대인 확인
            </div>
            <div className="text-base text-black mb-6">
              등기부등본 상 소유자가 맞는지 임대인 신분증을 대조하여 일치여부
              확인
            </div>
            <div className="flex gap-6">
              <div className="flex-1 bg-white border border-gray-300 rounded-lg p-4 shadow text-center min-h-48 flex flex-col justify-center">
                <div className="font-semibold text-gray-700 mb-2">
                  임대인 주민등록본
                </div>
                <div className="mx-auto w-3/4 h-24 relative flex items-center justify-center">
                  <img
                    src={blindeImg}
                    alt="블라인드"
                    className="absolute inset-0 w-full h-full object-cover rounded-md opacity-80"
                  />
                  <span className="relative z-10 text-gray-400 text-sm">
                    서류를 확인하려면 클릭하세요.
                  </span>
                </div>
              </div>
              <div className="flex-1 bg-white border border-gray-300 rounded-lg p-4 shadow text-center min-h-48 flex flex-col justify-center">
                <div className="font-semibold text-gray-700 mb-2">
                  임대인 인감증명서
                </div>
                <div className="mx-auto w-3/4 h-24 relative flex items-center justify-center">
                  <img
                    src={blindeImg}
                    alt="블라인드"
                    className="absolute inset-0 w-full h-full object-cover rounded-md opacity-80"
                  />
                  <span className="relative z-10 text-gray-400 text-sm">
                    서류를 확인하려면 클릭하세요
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button className="px-6 py-2 bg-[#0089E1] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-base shadow">
                일치 확인 완료
              </button>
            </div>
          </div>
        ) : selectedStep === 2 ? (
          <div>
            <div className="text-2xl font-bold text-[#0089E1] mb-2">
              공인중개사 확인
            </div>
            <div className="text-base text-black mb-6">
              중개사무소등록증, 공인중개사 자격증, 사업자등록증 확인
            </div>
            <div
              className="flex flex-col gap-4 items-center w-full px-4"
              style={{ minWidth: 500 }}
            >
              <div className="w-full bg-white border border-gray-300 rounded-lg p-4 shadow flex flex-row items-center justify-between">
                <div className="font-semibold text-[#0089E1]">
                  중개사무소 등록증
                </div>
                <button className="px-6 py-2 bg-[#0089E1] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-base shadow">
                  확인 완료
                </button>
              </div>
              <div className="w-full bg-white border border-gray-300 rounded-lg p-4 shadow flex flex-row items-center justify-between">
                <div className="font-semibold text-[#0089E1]">
                  공인중개사 자격증
                </div>
                <button className="px-6 py-2 bg-[#0089E1] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-base shadow">
                  확인 완료
                </button>
              </div>
              <div className="w-full bg-white border border-gray-300 rounded-lg p-4 shadow flex flex-row items-center justify-between">
                <div className="font-semibold text-[#0089E1]">
                  사업자등록증 확인
                </div>
                <button className="px-6 py-2 bg-[#0089E1] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-base shadow">
                  확인 완료
                </button>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button className="px-6 py-2 bg-[#0089E1] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-base shadow">
                일치 확인 완료
              </button>
            </div>
          </div>
        ) : selectedStep === 3 ? (
          <div>
            <div className="text-2xl font-bold text-[#0089E1] mb-2">
              계약서 작성
            </div>
            <div className="text-base text-black mb-6">
              정부 권장 표준계약서 및 상용 계약서 상의 계약 보증금 보호를 위한
              특약사항 등 꼼꼼히 살펴보기
            </div>
            <div className="w-full px-4" style={{ minWidth: 500 }}>
              <div className="w-full bg-white border border-gray-300 rounded-lg p-8 shadow flex flex-col items-center min-h-48">
                <div className="font-semibold text-[#0089E1] mb-4">
                  계약서 확인하기
                </div>
                <div className="mx-auto w-3/4 h-24 relative flex items-center justify-center">
                  <img
                    src={blindeImg}
                    alt="블라인드"
                    className="absolute inset-0 w-full h-full object-cover rounded-md opacity-80"
                  />
                  <span className="relative z-10 text-gray-400 text-sm">
                    서류를 확인하려면 클릭하세요.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button className="px-6 py-2 bg-[#0089E1] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-base shadow">
                계약서 서명 완료
              </button>
            </div>
          </div>
        ) : selectedStep === 4 ? (
          <div>
            <div className="text-2xl font-bold text-[#0089E1] mb-2">
              전월세 계약신고
            </div>
            <div className="text-base text-black mb-6">
              임대차계약 체결일로부터 30일 이내 계약내용을 주택소재 관할
              신고관청에 신고하기
            </div>
            {/* 1,2,3 박스 */}
            <div
              className="flex gap-4 mb-6 w-full px-4"
              style={{ minWidth: 500 }}
            >
              {/* 1번 박스 */}
              <div className="flex-1 bg-gray-50 rounded-lg p-6 flex flex-col items-center min-h-40">
                <div className="text-[#0089E1] font-bold text-xl mb-2">1</div>
                <div className="text-center text-gray-700 text-base font-bold whitespace-pre-line">
                  아래 링크에서
                  <br />
                  주택임대차계약신고 선택
                </div>
              </div>
              {/* 2번 박스 */}
              <div className="flex-1 bg-gray-50 rounded-lg p-6 flex flex-col items-center min-h-40 justify-center">
                <div className="text-[#0089E1] font-bold text-xl mb-2">2</div>
                <img
                  src={step4Img}
                  alt="Step4"
                  className="w-full h-32 object-contain mt-2"
                />
              </div>
              {/* 3번 박스 */}
              <div className="flex-1 bg-gray-50 rounded-lg p-6 flex flex-col items-center min-h-40">
                <div className="text-[#0089E1] font-bold text-xl mb-2">3</div>
                <div className="text-center text-gray-700 text-base font-bold whitespace-pre-line">
                  Step 3에서 자동저장된
                  <br />
                  계약서 업로드하기
                </div>
              </div>
            </div>
            {/* 안내 박스와 이동 버튼 */}
            <div className="w-full px-4" style={{ minWidth: 500 }}>
              <div className="w-full bg-white rounded-lg p-4 shadow flex flex-row items-center justify-between">
                <div className="font-semibold text-gray-700">
                  부동산거래관리시스템으로 이동해 진행하기
                </div>
                <button className="px-6 py-2 bg-[#0089E1] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-base shadow">
                  이동하기
                </button>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button className="px-6 py-2 bg-[#0089E1] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-base shadow">
                계약 신고 완료
              </button>
            </div>
          </div>
        ) : selectedStep === 5 ? (
          <div>
            <div className="text-2xl font-bold text-[#0089E1] mb-2">
              계약 마무리 확인하기
            </div>
            <div className="text-base text-black mb-6">
              임대차계약 체결일로부터 30일 이내 계약내용을 주택소재 관할
              신고관청에 신고하기
            </div>
            <div
              className="flex flex-col gap-4 items-center w-full px-4"
              style={{ minWidth: 500 }}
            >
              <div className="w-full bg-white border border-gray-300 rounded-lg p-4 shadow flex flex-row items-center justify-between">
                <div className="font-semibold text-[#0089E1]">
                  임대차계약신고 접수 완료를 확인하세요
                </div>
                <button className="px-6 py-2 bg-[#0089E1] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-base shadow">
                  확인 완료
                </button>
              </div>
              <div className="w-full bg-white border border-gray-300 rounded-lg p-4 shadow flex flex-row items-center justify-between">
                <div className="font-semibold text-[#0089E1]">
                  계약서에 ‘확정일자' 도장이 있는지 확인하세요
                </div>
                <button className="px-6 py-2 bg-[#0089E1] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-base shadow">
                  확인 완료
                </button>
              </div>
              <div className="w-full bg-white border border-gray-300 rounded-lg p-4 shadow flex flex-row items-center justify-between">
                <div className="font-semibold text-[#0089E1]">
                  전세사기 내용에 해당되는지 확인하세요
                </div>
                <button className="px-6 py-2 bg-[#0089E1] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-base shadow">
                  확인 완료
                </button>
              </div>
            </div>
            <div className="flex justify-end mt-8">
            <button
      className="px-6 py-2 bg-[#0089E1] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-base shadow"
      onClick={handleClick}
    >
      계약 관리 완료
    </button>
            </div>
          </div>
        ) : (
          stepContents[selectedStep - 1]
        )}
      </div>
    </div>
  );
}
