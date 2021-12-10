import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MedicalHistory(props) {
  //initializwe ths usestate to empty
  const [appointment, setAppointment] = useState([]);
 // const navigate = useNavigate();
  const { id } = useParams(); //passed paras stores here

  useEffect(() => {
    axios.get(`http://localhost:4000/patientlogs/${id}`).then((response) => {
      console.log("Promise fullfilled");
      console.log(response);
      setAppointment(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <h2>Medical History</h2>
        <h3>Patient ID: {appointment.PatientID}</h3>
        <h3>Doctor Notes History: {appointment.DoctorNotes}</h3>
        <h3>Medicine History: {appointment.PreviousMedicineHistory}</h3>
      </div>
    </>
  );
}
export default MedicalHistory;