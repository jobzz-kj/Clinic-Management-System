import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Lab Technician/LabTech.css";
import Appointments from "./Appointments";

function AppointmentDetails() {
  //initializwe ths usestate to empty
  const [appointments, setAppointment] = useState([]);
  const [patient, setPatient] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams(); //passed paras stores here
  // console.log(props);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/appointments/bydoctorid/${id}`)
      .then((response) => {
        console.log("Promise fullfilled");
        console.log(response.data);
        setAppointment(response.data);
        // for (var i of response.data) {
        //  // console.log("helooo" + i.PatientID);
        //   axios
        //     .get(`http://localhost:4000/patients/${i.PatientID}`)
        //     .then((response) => {
        //       console.log("Promise fullfilled");
        //       console.log(response);
        //       setPatient(response.data);
        //     });
        // }
        // axios
        //   .get(`http://localhost:4000/patients/${appointment.PatientID}`)
        //   .then((response) => {
        //     console.log("Promise fullfilled");
        //     console.log(response);
        //     setPatient(response.data);
        //   });

        //console.log(response.data);
        // console.log("hiii" + appointment);
      })
      // .finally((response) => {
      //   console.log(response);
      // });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4000/patients/${appointment.PatientID}`)
  //     .then((response) => {
  //       console.log("Promise fullfilled");
  //       console.log(response);
  //       setPatient(response.data);
  //     });
  // }, []);

  return (
    <>
 <div>
 <h2>Patient List</h2>
 <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
        <ul>
          {appointments.map((appointment) => (
            <li style={{listStyle:'none'}} key={appointments.DoctorID}>     
              <Appointments details={appointment}/> 
            </li>
            
            
          ))}
           <br />
           <br />
        </ul>
        </div>
      
       

        <br />
        <br />
      </div>
    
      {/* <div>
        {console.log('hii'+patient)}
        <h3>Appointment ID: {appointment.AppointmentID}</h3>
        <h3>Patient Name: {patient.PatientName}</h3>
        <button
          type="button"
          className="labtech"
          onClick={() => navigate(`/addnotes/${appointment.PatientID}`)}
        >
          Add to History
        </button>
        <button
          type="button"
          className="labtech"
          onClick={() => navigate(`/labresults/${appointment.PatientID}`)}
        >
          View Lab Results
        </button>
        <button
          type="button"
          className="labtech"
          onClick={() => navigate(`/medicalhistory/${appointment.PatientID}`)}
        >
          View Medical History
        </button>
        <button
          type="button"
          className="labtech"
          onClick={() => navigate(`/patientdtails/${appointment.PatientID}`)}
        >
          View Patient Details
        </button>
        <br />
        <br />
      </div> */}
    </>
  );
}
export default AppointmentDetails;
