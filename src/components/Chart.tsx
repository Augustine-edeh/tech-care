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
      <div className="w-full h-[298px] rounded-xl bg-[#F4F0FE]">Loading...</div>
    );
  }

  // Extracting blood pressure history from diagnosis_history
  const currentDate = dayjs();
  const sixMonthsAgo = currentDate.subtract(6, "month");

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
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: false,
        tension: 0.4, // Increased tension for curved lines
        pointRadius: 5, // Thicker dot points
        pointHoverRadius: 7, // Thicker dot points on hover
        pointBackgroundColor: "rgba(255, 99, 132, 1)", // Color fill for the dot points
      },
      {
        label: "Diastolic",
        data: diastolicData,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: false,
        tension: 0.4, // Increased tension for curved lines
        pointRadius: 5, // Thicker dot points
        pointHoverRadius: 7, // Thicker dot points on hover
        pointBackgroundColor: "rgba(54, 162, 235, 1)", // Color fill for the dot points
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
    <div className="w-full min-h-[298px] rounded-xl bg-[#F4F0FE]">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
