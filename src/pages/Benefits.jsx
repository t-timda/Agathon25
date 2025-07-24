import Button from "../components/Button";

const Benefits = () => {
  return (
    <>
      <div className="flex justify-between ">
        <div className="text-[36px] font-bold"></div>
        <Step step="혜택선택" />
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-[20px]">
        <div className="bg-white rounded-2xl shadow-md">
          1
          <Button text={"버튼 신청하기"} />
        </div>
        <div className="bg-white rounded-2xl shadow-md">
          2
          <Button text={"버튼 신청하기"} />
        </div>
        <div className="bg-white rounded-2xl shadow-md">
          3
          <Button text={"버튼 신청하기"} />
        </div>
        <div className="bg-white rounded-2xl shadow-md">
          4
          <Button text={"버튼 신청하기"} />
        </div>
      </div>
    </>
  );
};

export default Benefits;
