import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Table} from 'react-bootstrap'

function PatientDetails(props) {
  //initializwe ths usestate to empty
  const [appointment, setAppointment] = useState([]);
 // const navigate = useNavigate();
  const { id } = useParams(); //passed paras stores here

  useEffect(() => {
    axios.get(`http://localhost:4000/patients/${id}`).then((response) => {
      console.log("Promise fullfilled");
      console.log(response);
      setAppointment(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <h2 className="display-3"><b>Patient Details</b></h2>
        <Table className="table hovered" variant = 'dark' style={{marginTop:40,width:'60%',marginLeft:300,opacity:0.8}}>
          <tbody style={{ paddingRight: 100 ,fontSize:20,opacity:0.8}}>
        <tr></tr>
        <tr>
        <td >Appointment ID </td><td>{appointment.PatientID}</td></tr>
        <tr><td >Patient Name</td> <td>{appointment.PatientName}</td></tr>
        <tr><td >Contact Number</td><td> {appointment.ContactNo}</td></tr>
        <tr><td >Age</td><td> {appointment.Age}</td>
    </tr>
    <tr></tr>
    </tbody>
    </Table>

      </div>
    </>
  );
}
export default PatientDetails;