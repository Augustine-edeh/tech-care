"use client";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { encode } from "base-64";
// import dayjs from "dayjs";
import Image from "next/image";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  // Helper function to encode credentials
  const encodeCredentials = (username, password) => {
    return `Basic ${encode(`${username}:${password}`)}`;
  };

  const [patientData, setPatientData] = useState(null);
  const username = "coalition";
  const password = "skills-test";
  const authHeader = encodeCredentials(username, password);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            method: "GET",
            headers: {
              Authorization: authHeader,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data); // Log the complete data structure
        const jessicaData = data.find(
          (patient) => patient.name === "Jessica Taylor"
        );
        console.log("Jessica's Data: ", jessicaData); // Log Jessica's data structure

        setPatientData(jessicaData);
      } catch (error) {
        console.error("Failed to fetch patient data:", error);
      }
    };

    fetchData();
  }, [authHeader]);

  if (!patientData) {
    return (
      // <div className="w-full h-[298px] rounded-xl bg-[#F4F0FE]">Loading...</div>
      <div className="grid grid-cols-12 gap-[39px] p-[16px] min-h-[298px] rounded-xl bg-[#F4F0FE]">
        <section className="col-span-12 md:col-span-8 flex flex-col gap-y-5">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-lg text-[#072635]">Blood Pressure</h1>

            <div className="flex gap-2">
              <p>Last 6 months</p>
              <Image
                src="/expand_more_FILL0_wght300_GRAD0_opsz24.svg"
                width={10}
                height={10}
                alt="month"
              />
            </div>
          </div>
          <div className="grid place-content-center h-full">
            <p>Loading...</p>
          </div>
        </section>
      </div>
    );
  }

  // Extracting blood pressure history from diagnosis_history
  // const currentDate = dayjs();
  // const sixMonthsAgo = currentDate.subtract(6, "month");

  type PatientDataType = {
    name: "Emily Williams";
    gender: "Female";
    age: 18;
    profile_picture: "https://fedskillstest.ct.digital/1.png";
    date_of_birth: "2006-08-19";
    phone_number: "(711) 984-6696";
    emergency_contact: "(680) 653-9512";
    insurance_type: "Premier Auto Corporation";
    diagnosis_history: [
      {
        month: string;
        year: number;
        blood_pressure: {
          systolic: {
            value: number;
            levels: string;
          };
          diastolic: {
            value: number;
            levels: string;
          };
        };
        heart_rate: {
          value: number;
          levels: string;
        };
        respiratory_rate: {
          value: number;
          levels: string;
        };
        temperature: {
          value: number;
          levels: string;
        };
      }
    ];
    diagnostic_list: [
      {
        name: string;
        description: string;
        status: string;
      }
    ];
    lab_results: [string];
  };

  type bloodPressureHistory = {
    diagnosis_history: [
      {
        month: string;
        year: number;
        blood_pressure: {
          systolic: {
            value: number;
            levels: string;
          };
          diastolic: {
            value: number;
            levels: string;
          };
        };
        heart_rate: {
          value: number;
          levels: string;
        };
        respiratory_rate: {
          value: number;
          levels: string;
        };
        temperature: {
          value: number;
          levels: string;
        };
      }
    ];
  };

  const bloodPressureHistory = patientData.diagnosis_history
    // .filter((entry) => {
    //   const entryDate = dayjs(`${entry.year}-${entry.month}`, "YYYY-MMMM");
    //   return entryDate.isAfter(sixMonthsAgo);
    // })
    .map((entry) => ({
      date: `${entry.month.substring(0, 3)}, ${entry.year}`,
      systolic: entry.blood_pressure.systolic.value,
      diastolic: entry.blood_pressure.diastolic.value,
    }))
    .filter((entry, index) => index < 6)
    .reverse();
  console.log("Blood: ", bloodPressureHistory);

  const labels = bloodPressureHistory.map((entry) => entry.date);
  const systolicData = bloodPressureHistory.map((entry) => entry.systolic);
  const diastolicData = bloodPressureHistory.map((entry) => entry.diastolic);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "#E66FD2",
        borderWidth: 2,
        fill: false,
        tension: 0.4, // Increased tension for curved lines
        pointRadius: 5, // Thicker dot points
        pointHoverRadius: 7, // Thicker dot points on hover
        pointBackgroundColor: "#E66FD2", // Color fill for the dot points
      },
      {
        label: "Diastolic",
        data: diastolicData,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "#8C6FE6",
        borderWidth: 2,
        fill: false,
        tension: 0.4, // Increased tension for curved lines
        pointRadius: 5, // Thicker dot points
        pointHoverRadius: 7, // Thicker dot points on hover
        pointBackgroundColor: "#8C6FE6", // Color fill for the dot points
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
      y: {
        beginAtZero: false,
        max: 180,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legends
      },
    },
  };

  return (
    <div className="grid grid-cols-12 gap-[39px] p-[16px] min-h-[298px rounded-xl bg-[#F4F0FE]">
      <section className="col-span-12 md:col-span-8 flex flex-col gap-y-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg text-[#072635]">Blood Pressure</h1>

          <div className="flex gap-2">
            <p>Last 6 months</p>
            <Image
              src="/expand_more_FILL0_wght300_GRAD0_opsz24.svg"
              width={10}
              height={10}
              alt="month"
            />
          </div>
        </div>

        <div className="">
          <Line data={chartData} options={options} />
        </div>
      </section>

      <section className="hidden md:col-span-4 md:flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <p className="h-4 w-4 rounded-full bg-[#E66FD2]" />
            <h1>Systolic</h1>
          </div>

          <p>{`${160}`}</p>

          <div className="flex items-center gap-x-2">
            <Image src="/ArrowUp.svg" width={10} height={10} alt="indicator" />
            <p>{`${"Higher than Average"}`}</p>
          </div>
        </div>
        <hr className="h-[1px] bg-unnamed-color-cbc8d4" />

        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <p className="h-4 w-4 rounded-full bg-[#8C6FE6]" />
            <h1>Diastolic</h1>
          </div>
          <p>{`${78}`}</p>
          <div className="flex items-center gap-x-2">
            <Image
              src="/ArrowDown.svg"
              width={10}
              height={10}
              alt="indicator"
            />
            <p>{`${"Lower than Average"}`}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chart;
