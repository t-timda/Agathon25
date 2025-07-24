import Step from "../components/Step";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";

const PropertyDetail = ({ id, user }) => {
  const nav = useNavigate();
  const [showAutoCloseModal, setShowAutoCloseModal] = useState(false);
  const handleTourClick = () => {
    setShowAutoCloseModal(true);
  };

  return (
    <div className=" m-[20px] px-[50px]">
      <div className="flex justify-between ">
        <div className="text-[36px] font-bold">선택한 매물 {id}</div>
        <Step step="매물선택" />
      </div>

      <div className="flex justify-center items-center bg-[#0089E1] w-[370px] h-[40px] rounded-full text-white font-bold mt-[20px]">
        가격과 위치 모두 {user}님을 위한 최적의 조건!
      </div>

      <div className="h-[500px] w-full flex justify-between items-center">
        <div>description</div>
        <div className="flex w-[550px] items-center justify-end">
          <img
            src="../src/assets/angle-left.svg"
            className="w-[20px] h-[20px] hover:cursor-pointer"
          />
          <img src="../src/assets/image.png" className="object-cover" />
          <img
            src="../src/assets/angle-right.svg"
            className="w-[20px] h-[20px] flex hover:cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between content-center">
        <div className="flex justify-center gap-[16px]">
          <button className="text-[#0089E1] hover:cursor-pointer">
            마포 주민의 동네 후기
          </button>
          <button className="text-[#0089E1] hover:cursor-pointer">
            집을 둘러 본 사람의 후기
          </button>
        </div>

        <div className=" flex flex-row gap-[16px] ">
          <Button
            text="비대면 룸 투어 하기"
            variant="room"
            onClick={() => {
              alert("등록된 전화번호로 룸투어 일정을 전달했습니다.");
            }}
          />
          <Button text="이 집으로 계약" onClick={() => nav("/ContractGuide")} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
