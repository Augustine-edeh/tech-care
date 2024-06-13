import Image from "next/image";

const PatientVitals = () => {
  return (
    <section className="flex justify-between mt-5">
      <div className="w-[228px] h-[242px] p-4 rounded-xl bg-[#E0F3FA]">
        <Image
          src="/respiratory rate.svg"
          width={96}
          height={96}
          alt="respiratory rate"
          className="mb-4"
        />

        <>
          <p className="font-manrope font-medium text-base leading-[22px] text-unnamed-color-072635 text-left capitalize">
            {`Respiratory rate`}
          </p>
          <p className="font-manrope font-extrabold text-[30px] leading-[41px] text-unnamed-color-072635 text-left">
            {`20 bpm`}
          </p>

          <p className="font-manrope font-normal text-sm leading-[19px] text-unnamed-color-072635 text-left mt-[17px]">{`Normal`}</p>
        </>
      </div>

      <div className="w-[228px] h-[242px] p-4 rounded-xl bg-[#FFE6E9]">
        <Image
          src="/temperature.svg"
          width={96}
          height={96}
          alt="temperature"
          className="mb-4"
        />

        <>
          <p className="font-manrope font-medium text-base leading-[22px] text-unnamed-color-072635 text-left capitalize">
            {`Temperature`}
          </p>
          <p className="font-manrope font-extrabold text-[30px] leading-[41px] text-unnamed-color-072635 text-left">
            {`98.6`}&deg; F
          </p>

          <p className="font-manrope font-normal text-sm leading-[19px] text-unnamed-color-072635 text-left mt-[17px]">{`Normal`}</p>
        </>
      </div>

      <div className="w-[228px] h-[242px] p-4 rounded-xl bg-[#FFE6F1]">
        <Image
          src="/HeartBPM.svg"
          width={96}
          height={96}
          alt="heart rate"
          className="mb-4"
        />

        <>
          <p className="font-manrope font-medium text-base leading-[22px] text-unnamed-color-072635 text-left capitalize">
            {`heart rate`}
          </p>
          <p className="font-manrope font-extrabold text-[30px] leading-[41px] text-unnamed-color-072635 text-left">{`78 bpm`}</p>

          <p className="font-manrope font-normal text-sm leading-[19px] text-unnamed-color-072635 text-left mt-[17px]">{`Normal`}</p>
        </>
      </div>
    </section>
  );
};

export default PatientVitals;
