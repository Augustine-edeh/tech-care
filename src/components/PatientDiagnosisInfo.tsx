import Chart from "./Chart";
import DiagnosticListTable from "./DiagnosticListTable";
import PatientVitals from "./PatientVitals";

const PatientDiagnosisInfo = () => {
  return (
    <div>
      <section className="bg-unnamed-color-ffffff w-[766px] h-[673px] mt-[14px] rounded-[16px] p-5">
        <h3 className="font-manrope font-extrabold text-xl leading-[33px] text-unnamed-color-072635 text-left mb-10">
          Diagnosis History
        </h3>

        <Chart />
        <PatientVitals />
      </section>

      <section className="bg-unnamed-color-ffffff w-[766px] h-[349px] mt-8 rounded-[16px] p-5">
        <h3 className="font-manrope font-extrabold text-xl leading-[33px] text-unnamed-color-072635 text-left mb-10">
          Diagnostic List
        </h3>

        <DiagnosticListTable />
      </section>
    </div>
  );
};

export default PatientDiagnosisInfo;
