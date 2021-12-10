
import {Link} from "react-router-dom"
import './LabTech.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Button, Table } from "react-bootstrap";
function ReportDetails(props){

    const [patient, setPatient] = useState([]);
    const [doctor, setDoctor] = useState([]);
    const[tests,upTests] = useState([])
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

    
    return(<>
    <div className="reportlist">
        <Table responsive>
        <h3>Lab Report ID -------------- <>&nbsp;</>{props.details.LabReportID}</h3>
        <h3>Patient Name:--------------<>&nbsp;</> {patient.PatientName}</h3>
        <h3>Age :------------------------ <>&nbsp;</>{patient.Age}</h3>
        <h3>Test Name:------------------<>&nbsp;</>{tests.MasterLabTestName}</h3>
        <h3>Normal Values:-------------<>&nbsp;</> {tests.NormalRange} </h3>
        <h3>Test Value:------------------ <>&nbsp;</>{props.details.PatientValue}</h3>
        <h3>Doctor Name:-------------- <>&nbsp;</>{doctor.DoctorName}</h3>
        <h3>Date:------------------------ <>&nbsp;</>{props.details.CheckIn}</h3>
        </Table>
        
        {/* <div >
        <Link to={`/viewtestdetails/${props.details.MasterLabTestID}`}><button type='button' id='details'>View Details</button></Link><>&nbsp;</>
         </div> */}

         
    </div>
    <div style={{marginTop:'10px'}}>
        <Button type='button' variant='danger' onClick={()=>DeleteStaff(props.details.LabReportID)}>Delete</Button>
        
    </div>
    </>)
}


function DeleteStaff(id){

    axios
    .delete( `http://localhost:4000/labreports/${id}`)
    .then((response) => {
        console.log("Promise was fullfilles")
        console.log(response)

        
    })
    alert(`${id} Deleted`)
    //  window.location='/testdetails'

}








export default ReportDetails