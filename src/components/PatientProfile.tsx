import Image from "next/image";
import PatientDOB from "./PatientDOB";
import PatientGender from "./PatientGender";
import PatientContactInfo from "./PatientContactInfo";
import PatientEmergencyContact from "./PatientEmergencyContact";
import PatientInsuranceProvider from "./PatientInsuranceProvider";
import LabResults from "./LabResults";

type classNameType = {
  className: string;
};

const PatientProfile = ({ className }: classNameType) => {
  return (
    <div className={`${className}`}>
      <section className="bg-unnamed-color-ffffff min-w-[367px h-[760px rounded-[16px] p-5">
        <div className="flex flex-col items-center gap-y-6 mt-3 mb-1">
          <Image
            src={`/Layer 2.png`}
            width={200}
            height={200}
            alt={`Jessica Taylor`}
          />

          <h3 className="font-manrope font-extrabold text-3xl leading-[33px] text-unnamed-color-072635">{`Jessica Taylor`}</h3>
        </div>

        <ul className="flex flex-col gap-y-6 my-[29px]">
          <PatientDOB />
          <PatientGender />
          <PatientContactInfo />
          <PatientEmergencyContact />
          <PatientInsuranceProvider />
        </ul>

        <div className=" text-center w-[300px] mx-auto">
          <button className="w-[220px] h-[41px] rounded-[41px] bg-unnamed-activestate-bg-1 font-manrope font-bold text-base leading-[19px] text-unnamed-color-072635 my-[11px]">
            Show All Information
          </button>
        </div>
      </section>

      <LabResults />
    </div>
  );
};

export default PatientProfile;
