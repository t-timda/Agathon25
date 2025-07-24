import PropertyCard from "../components/PropertyCard";

const SelectProperty = () => {
  return (
    <>
      <div className="relative">
        <div
          id="cardSlider"
          className="flex overflow-x-auto scroll-smooth gap-[30px] px-[30px] scrollbar-hide"
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
        className="absolute top-1/2 left-2 -translate-y-1/2 p-2 w-[50px] h-[50px]"
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
