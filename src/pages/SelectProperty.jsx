import PropertyCard from "../components/PropertyCard";
import Step from "../components/Step";
import { fetchAllProperties } from "../apis/property";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SelectProperty = ({ user, count }) => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    const getProperty = async () => {
      try {
        const items = await fetchAllProperties();
        setProperty(items.data.listings);
      } catch (err) {
        console.error("불러오기 실패", err);
      }
    };
    getProperty();
  }, []);

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
      <div>
        <div
          id="cardSlider"
          className="flex overflow-x-auto scroll-smooth gap-[30px] px-[50px] scrollbar-hide"
        >
          {property.map((items) => (
            <PropertyCard
              description={items.description}
              deposits={items.deposits}
              mRent={items.monthlyRent}
            />
          ))}
        </div>
      </div>

      {/* 왼쪽 버튼 */}
      <button
        onClick={() => {
          document.getElementById("cardSlider").scrollLeft -= 300;
        }}
        className="absolute top-[60%] left-2 -translate-y-1/2 p-2 w-[50px] h-[50px]"
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
        className="absolute top-[60%] right-2 -translate-y-1/2 p-2  w-[50px] h-[50px]"
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
