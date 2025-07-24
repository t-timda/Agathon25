import PropertyCard from "../components/PropertyCard";
import Step from "../components/Step";

const SelectProperty = ({ user, count }) => {
  return (
    <>
      <div className="flex justify-between m-[20px] px-[50px]">
        <div className="text-[36px] font-bold">
          {user}님의 조건에 맞는 {count}건의 매물
        </div>

        <div>
          <Step step="매물선택" />
        </div>
      </div>

      {/*카드 컴포넌트 스크롤 */}
      <div className="relative h-full mb-[50px]">
        <div
          id="cardSlider"
          className="flex overflow-x-auto scroll-smooth gap-[30px] px-[50px] scrollbar-hide"
        >
          <>
            <PropertyCard name="마포" />
            <PropertyCard name="상수" />
            <PropertyCard name="연남" />
            <PropertyCard name="망원" />
          </>
        </div>
      </div>

      {/* 왼쪽 버튼 */}
      <button
        onClick={() => {
          document.getElementById("cardSlider").scrollLeft -= 300;
        }}
        className="absolute top-[40%] left-2 -translate-y-1/2 p-2 w-[50px] h-[50px]"
      >
        <img
          src="../src/assets/angle-left.svg"
          className="object-cover hover:cursor-pointer"
        />
      </button>

      {/* 오른쪽 버튼 */}
      <button
        onClick={() => {
          document.getElementById("cardSlider").scrollLeft += 300;
        }}
        className="absolute top-1/2 right-2 -translate-y-1/2 p-2  w-[50px] h-[50px]"
      >
        <img
          src="../src/assets/angle-right.svg"
          className="object-cover hover:cursor-pointer"
        />
      </button>
    </>
  );
};

export default SelectProperty;
