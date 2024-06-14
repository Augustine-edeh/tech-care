import PatientDiagnosisInfo from "./PatientDiagnosisInfo";
import PatientProfile from "./PatientProfile";
import PatientsList from "./PatientsList";

const Main = () => {
  return (
    <main className="flex justify-between mt-[18px]">
      <PatientsList />
      <PatientDiagnosisInfo />
      <PatientProfile />
    </main>
  );
};

export default Main;
