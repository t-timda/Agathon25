const PropertyCard = ({ name }) => {
  return (
    <>
      <div className="bg-white border-2 border-black min-w-[400px] h-[600px]">
        <div>매물 카드</div>
        <div>{name}</div>
      </div>
    </>
  );
};

export default PropertyCard;
