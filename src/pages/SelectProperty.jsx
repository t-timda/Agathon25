import PropertyCard from "../components/PropertyCard";

const SelectProperty = () => {
  return (
    <>
      <div>매물 선택 페이지입니다.</div>
      {PropertyCard("마포")}
      {PropertyCard("상수")}
    </>
  );
};

export default SelectProperty;
