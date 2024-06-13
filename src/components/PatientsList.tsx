import Image from "next/image";
import PatientCard from "./PatientCard";

const PatientsList = () => {
  return (
    <section className="bg-unnamed-color-ffffff w-[367px] min-h-[1054px] mt-[14px] rounded-[16px] p-5">
      <div className="flex justify-between">
        <h3 className="font-manrope font-extrabold text-xl leading-[33px] text-unnamed-color-072635 text-left">
          Patients
        </h3>
        <Image
          src="/search_FILL0_wght300_GRAD0_opsz24.svg"
          width={18}
          height={18}
          alt="search"
        />
      </div>

      <ul className="mt-10">
        <PatientCard />
      </ul>
    </section>
  );
};

export default PatientsList;
