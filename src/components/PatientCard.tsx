import Image from "next/image";

const PatientCard = () => {
  return (
    <div className="flex justify-between w-[317px] h-[48px]">
      <section className="flex gap-x-3">
        <Image
          src="/Layer 8.png"
          width={48}
          height={48}
          alt="patient"
          className=" text-unnamed-color-072635"
        />

        <div className="flex flex-col justify-center">
          <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
            {"Emily Williams"}
          </p>
          <p className="font-manrope font-normal text-sm leading-[19px] text-unnamed-color-707070 text-left">
            {"Female 18"}
          </p>
        </div>
      </section>

      <Image
        src="/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
        width={18}
        height={4}
        alt="more info"
      />
    </div>
  );
};

export default PatientCard;
