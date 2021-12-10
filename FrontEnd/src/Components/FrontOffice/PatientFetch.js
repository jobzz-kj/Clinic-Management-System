import { useState, useEffect } from "react";
import axios from "axios";
import Patient from "./Patients.js";

function PatientFetch() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    console.log("The use effect hook has been executed");

    axios.get("http://localhost:4000/patients/").then((response) => {
      console.log("promise fulfilled");
      console.log(response);
      setPatients(response.data);
    });
  }, []);

  return (
    <>
       <div style={{ marginTop: "50px" }}>
        <h1 className="display-3" style={{marginTop: '20px'}}><b>Patient List</b></h1>
        <ul>
          {patients.map((patient) => (
            <span key={patient.PatientID}>
              <Patient details={patient} />
            </span>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PatientFetch;
