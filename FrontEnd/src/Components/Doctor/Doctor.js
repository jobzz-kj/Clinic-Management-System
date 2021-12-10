// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
//import DeleteStaff from "./DeleteStaff";
import { useNavigate } from "react-router-dom";
import React from "react";
import "bootstrap";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Doctor(props) {
  
    console.log(props);
  //initializwe ths usestate to empty
//   const [doctor, setDoctor] = useState([]);
  const navigate = useNavigate();
//   //const { id } = useParams(); //passed paras stores here

//   useEffect(() => {
//     axios.get(`http://localhost:4000/doctors`).then((response) => {
//       console.log("Promise fullfilled");
//       console.log(response);
//       setDoctor(response.data);
//     });
//   }, []);

  return (
    <>
      <div>
      <h2 className="display-3"><b>Doctor List</b></h2>
        <table className="table table-striped" style={{marginTop:40}}>
          <tr>
        <th style={{ paddingRight: 100 ,fontSize:22}}>
        {props.details.DoctorName}</th>
        <td>
        <button style={{color: "black",fontSize:15}}
        className="btn btn-primary"
          type="button"
          variant="primary"
          onClick={() => navigate(`/appointmentdetails/${props.details.DoctorID}`)}
        >
          Appointments
        </button></td>
        </tr>
        </table>
        <br />
        <br />
      </div>
    </>
  );
}
export default Doctor;
