import PropertyCard from "../components/PropertyCard";

const SelectProperty = () => {
  return (
    <>
      <div className="relative">
        <div
          id="cardSlider"
          className="flex overflow-x-auto scroll-smooth gap-[30px] px-[30px]"
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
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ←
      </button>

      {/* 오른쪽 버튼 */}
      <button
        onClick={() => {
          document.getElementById("cardSlider").scrollLeft += 300;
        }}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        →
      </button>
    </>
  );
};

export default SelectProperty;
