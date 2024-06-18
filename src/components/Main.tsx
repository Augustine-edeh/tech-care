import PatientDiagnosisInfo from "./PatientDiagnosisInfo";
import PatientProfile from "./PatientProfile";
import PatientsList from "./PatientsList";

const Main = () => {
  return (
    <main className="grid grid-cols-12 gap-8 bg-red-600  -[1195px]">
      <PatientsList className={"col-span-3"} />
      <PatientDiagnosisInfo className={"col-span-6"} />
      <PatientProfile className={"col-span-3"} />
    </main>
  );
};

export default Main;
