

import {Link} from "react-router-dom"
import './LabTech.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Button, Table } from "react-bootstrap";

function ShowDayWise(props){

    const [patient, setPatient] = useState([]);
    const [doctor, setDoctor] = useState([]);
    const [test, upTests] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:4000/patients/${props.details.PatientID}`).then((response) => {
          console.log("Promise was fullfilles");
          console.log(response);
          setPatient(response.data);
        });
      }, []);

      useEffect(() => {
        axios.get(`http://localhost:4000/masterlabtests/${props.details.LabTestID}`).then((response) => {
          console.log("Promise was fullfilles");
          console.log(response);
          upTests(response.data);
        });
      }, []);

      useEffect(() => {
        axios.get(`http://localhost:4000/doctors/${props.details.DoctorID}`).then((response) => {
          console.log("Promise was fullfilles");
          console.log(response);
          setDoctor(response.data);
        });
      }, []);


return(
    <div id='daywise-div'>
        <h4>Lab Report ID --------{props.details.LabReportID}</h4>
        <h4>Result Value ----------{props.details.PatientValue}</h4>
        <h4>Date-------------------{props.details.CheckIn}</h4>
        <h4>Name------------------{patient.PatientName}</h4>
        <h4>Test--------------------{test.MasterLabTestName}</h4>
        <h4>Doctor Name---------{doctor.DoctorName}</h4>
    </div>
)

    
}
export default ShowDayWise 