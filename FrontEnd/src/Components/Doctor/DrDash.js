import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AppointmentDetails from "./AppointmentDetails";
import Appointments from "./Appointments";
import Doctor from "./Doctor"
function DrDash() {
  const [doctors, setDoctor] = useState([]); //for storing doctor details
 // const [patient, setPatient] = useState([]); //for storing patient details
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/doctors`).then((response) => {
      console.log("Promise fullfilled");
      console.log(response);
      setDoctor(response.data);
    });
  }, []);

  return (
    <div>
      <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
        <ul>
          {doctors.map((doctor) => (
            <li style={{listStyle:'none'}} key={doctor.DoctorID}>
              <Doctor details={doctor}/>
              
             
            </li>
          ))}
        </ul>
       

        <br />
        <br />
      </div>
    </div>
  );
}

export default DrDash;
