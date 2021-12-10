import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LabResults(props) {
  //initializwe ths usestate to empty
  const [appointment, setAppointment] = useState([]);
 // const navigate = useNavigate();
  const { id } = useParams(); //passed paras stores here

  useEffect(() => {
    axios.get(`http://localhost:4000/labreports/${id}`).then((response) => {
      console.log("Promise fullfilled");
      console.log(response);
      setAppointment(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <h2>Test Result</h2>
        <h3>Appointment ID: {appointment.LabReportID}</h3>
        <h3>Result: {appointment.PatientValue}</h3>
        <h3>CheckIn: {appointment.CheckIn}</h3>
        <h3>CheckOut: {appointment.CheckOut}</h3>
      </div>
    </>
  );
}
export default LabResults;
