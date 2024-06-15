import Image from "next/image";
import PatientCard from "./PatientCard";

const PatientsList = () => {
  const patientsArray = [
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
        // Additional diagnostics
      ],
      lab_results: [
        "Blood Tests",
        "CT Scans",
        // More lab results
      ],
    },
  ];
  return (
    <section className="bg-unnamed-color-ffffff w-[367px] h-[1076px] h-[full mt-[14px] rounded-[16px] p-5 pr-1 pb-20 overflow-hidde">
      <div className="flex justify-between mb-10 mr-5">
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

      <ul className="patient-list flex flex-col gap-y- h-full overflow-y-scroll overflow-x-hidden w-full">
        {patientsArray.map((patient) => (
          <li key={patient.name}>
            <PatientCard
              profile_picture={patient.profile_picture}
              name={patient.name}
              gender={patient.gender}
              age={patient.age}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PatientsList;
