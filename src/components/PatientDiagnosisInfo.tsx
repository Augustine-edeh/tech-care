import Chart from "./Chart";

const PatientDiagnosisInfo = () => {
  return (
    <section className="bg-unnamed-color-ffffff w-[766px] min-h-[673px] mt-[14px] rounded-[16px] p-5">
      <h3 className="font-manrope font-extrabold text-xl leading-[33px] text-unnamed-color-072635 text-left mb-10">
        Diagnosis History
      </h3>

      <Chart />
    </section>
  );
};

export default PatientDiagnosisInfo;
