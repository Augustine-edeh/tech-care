import Chart from "./Chart";
import DiagnosticListTable from "./DiagnosticListTable";
import PatientVitals from "./PatientVitals";

type classNameType = {
  className: string;
};

const PatientDiagnosisInfo = ({ className }: classNameType) => {
  return (
    <div className={`${className} mt-[14px]`}>
      {/* Diagnosis History card */}
      <section className="bg-unnamed-color-ffffff w-[766p p-5 h-[673px rounded-[16px]">
        <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635">
          Diagnosis History
        </h3>

        <div className=" mt-10 mb-5">
          <Chart />
        </div>
        <PatientVitals />
      </section>

      {/* Diagnostic List card */}
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
