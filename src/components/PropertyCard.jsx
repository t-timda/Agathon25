const PropertyCard = ({ name, description, price }) => {
  return (
    <>
      <div className="bg-white shadow-lg shadow-neutral-300 min-w-[400px] h-[600px] rounded-[30px]">
        <div>매물 카드</div>
        <div>{name}</div>
      </div>
    </>
  );
};

export default PropertyCard;
