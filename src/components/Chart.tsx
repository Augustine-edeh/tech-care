"use client";
import { useEffect, useState } from "react";
import { encode } from "base-64";
// import { encode } from "base-64";

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
        console.log(data);
        const jessicaData = data.find(
          (patient) => patient.name === "Jessica Taylor"
        );
        console.log(jessicaData);

        setPatientData(jessicaData);
      } catch (error) {
        console.error("Failed to fetch patient data:", error);
      }
    };

    fetchData();
  }, [authHeader]);

  return <div className="w-full h-[298px] rounded-xl bg-[#F4F0FE]">Chart</div>;
};

export default Chart;
