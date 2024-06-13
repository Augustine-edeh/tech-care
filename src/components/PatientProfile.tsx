import Image from "next/image";
import PatientDOB from "./PatientDOB";
import PatientGender from "./PatientGender";
import PatientContactInfo from "./PatientContactInfo";
import PatientEmergencyContact from "./PatientEmergencyContact";
import PatientInsuranceProvider from "./PatientInsuranceProvider";

const PatientProfile = () => {
  return (
    <section className="bg-unnamed-color-ffffff w-[367px] h-[760px] rounded-[16px] px-5 pt-5 pb-5">
      <div className="flex flex-col items-center gap-y-6 my-8">
        <Image
          src={`/Layer 2.png`}
          width={200}
          height={200}
          alt={`Jessica Taylor`}
        />
        <h2 className="font-manrope font-extrabold text-3xl leading-[33px] text-unnamed-color-072635 text-center">{`Jessica Taylor`}</h2>
      </div>

      <ul className="flex flex-col gap-y-6">
        <PatientDOB />
        <PatientGender />
        <PatientContactInfo />
        <PatientEmergencyContact />
        <PatientInsuranceProvider />
      </ul>

      <div className="grid place-items-center h-[63px] mt-[29px]">
        <button className="w-[220px] h-[41px] rounded-[41px] bg-unnamed-activestate-bg-1 font-manrope font-bold text-base leading-[19px] text-unnamed-color-072635 ">
          Show All Information
        </button>
      </div>
    </section>
  );
};

export default PatientProfile;
