import Step from "../components/Step";
import Button from "../components/Button";

const PropertyDetail = ({ id }) => {
  return (
    <div>
      <div className="flex justify-between m-[20px] px-[50px]">
        <div>선택한 매물 {id}</div>
        <Step step="매물선택" />
      </div>
      <Button text="자세히 보기" variant="deatillook" />
    </div>
  );
};

export default PropertyDetail;
