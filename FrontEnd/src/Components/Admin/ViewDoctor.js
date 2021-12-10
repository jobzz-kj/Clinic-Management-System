


import { useState, useEffect } from "react";
import axios from "axios";
import Doctor from "./Doctor";



function ViewDoctor() {
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
   

    axios.get("http://localhost:4000/doctors/").then((response) => {
      console.log("promise fulfilled");
      console.log(response);
      setDoctor(response.data);
    });
  }, []);

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <h1 style={{ color: "black" }}>Doctor List</h1>
        <ul>
          {doctor.map((doctors) => (
            <span key={doctors.DoctorID}>
              <Doctor details={doctors} />
            </span>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ViewDoctor;
