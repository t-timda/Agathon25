const Step = ({ step }) => {
  const steps = [
    { id: 1, label: "매물선택" },
    { id: 2, label: "계약관리" },
    { id: 3, label: "혜택선택" },
  ];

  return (
    <div className="flex gap-4">
      {steps.map(({ id, label }) => {
        const isActive = step === label;
        return (
          <div
            key={id}
            className={`w-[160px] h-[40px] rounded-[50px] flex items-center justify-center font-bold border-3
              ${
                isActive
                  ? "text-[#0089E1] border-[#0089E1]"
                  : "text-[#D4D4D4] border-[#D4D4D4]"
              }
            `}
          >
            Step {id}. {label}
          </div>
        );
      })}
    </div>
  );
};

export default Step;
