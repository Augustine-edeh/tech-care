import PatientDiagnosisInfo from "./PatientDiagnosisInfo";
import PatientProfile from "./PatientProfile";
import PatientsList from "./PatientsList";

const Main = () => {
  return (
    <main className="grid grid-cols-1 xl:grid-cols-12 gap-8  -[1195px]">
      <PatientsList className={"hidden order-1  xl:block xl:col-span-3"} />
      <PatientDiagnosisInfo className={"order-2 xl:order-2 xl:col-span-6"} />
      <PatientProfile className={"order-1 xl:order-3 xl:col-span-3"} />
    </main>
  );
};

export default Main;
