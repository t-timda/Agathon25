import { useNavigate } from "react-router-dom";
import Button from "./Button";

const PropertyCard = ({ name, description, deposits, mRent }) => {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/propertydeatil");
  };

  return (
    <>
      <div className="bg-white shadow-lg shadow-neutral-300 min-w-[400px] h-[600px] rounded-[30px] flex flex-col justify-between pb-[10px]">
        <div>
          <div>매물 카드</div>
          <div>{name}</div>
          <div>상세 정보 : {description}</div>
          <div>
            보증금 : {deposits} / 월세 : {mRent}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Button
            text={"자세히 보기"}
            varian="detaillook"
            onClick={() => handleClick()}
          />
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
