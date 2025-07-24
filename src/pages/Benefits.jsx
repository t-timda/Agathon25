import Button from "../components/Button";
import Step from "../components/Step";

const Benefits = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-[36px] font-bold"></div>
        <Step step="혜택선택" />
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-6 mt-6 max-w-[1000px] mx-auto">
        <div className="bg-white rounded-2xl shadow-md w-[480px] h-[240px] flex flex-col items-center content-center justify-between pb-[20px]">
          1
          <Button text="혜택 신청하기" />
        </div>
        <div className="bg-white rounded-2xl shadow-md w-[480px] h-[240px] flex flex-col items-center content-center justify-between pb-[20px]">
          2
          <Button text="혜택 신청하기" />
        </div>
        <div className="bg-white rounded-2xl shadow-md w-[480px] h-[240px] flex flex-col items-center content-center justify-between pb-[20px]">
          3
          <Button text="혜택 신청하기" />
        </div>
        <div className="bg-white rounded-2xl shadow-md w-[480px] h-[240px] flex flex-col items-center content-center justify-between pb-[20px]">
          4
          <Button text="혜택 신청하기" />
        </div>
      </div>
    </>
  );
};

export default Benefits;
