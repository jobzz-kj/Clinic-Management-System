import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LabTech.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function UploadTest() {
  const [test, upTests] = useState([]);
  const [input, setInputs] = useState({});
  const [doctor, setDoctor] = useState([]);
  const [patient, setPatient] = useState([]);
  const [staff,setStaff]  = useState([])
  const [submitted,setSubmitted] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:4000/patients/").then((response) => {
      console.log("Promise was fullfilles");
      console.log(response);
      setPatient(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4000/masterlabtests/").then((response) => {
      console.log("Promise was fullfilles");
      console.log(response);
      upTests(response.data);
    });
  }, []);

 
  useEffect(() => {
    axios.get(`http://localhost:4000/staffs/byrole/${4}`).then((response) => {
      console.log("Promise was fullfilles");
      console.log(response);
      setStaff(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4000/doctors/").then((response) => {
      console.log("Promise was fullfilles");
      console.log(response);
      setDoctor(response.data);
    });
  }, []);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    

    setInputs((values) => ({ ...values, [name]: value }));
  }

  const handleReset = () => {
    console.clear()
    setSubmitted(false)
}

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/labreports", input)
      .then((response) => {
        console.log(response);
        window.location = "/lab";
      })
      .catch((error) => {
        console.log(error);
      });
  };

 
  return (
    <>
      <h2 style={{ textAlign: "center", fontFamily: "monospace" }}>
        UPLOAD TEST RESULT
      </h2>
      <div id="upload-formcontainer">
        <Form id="upload-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-2" controlId="testupload">
            <Form.Label>Patient</Form.Label>
            {/* <Form.Control type="text" placeholder="Patient Id" value={input.PatientID} name='PatientID' onChange={handleChange}/> */}
            <Form.Select
              id="test-select"
              name="PatientID"
              value={input.PatientID}
              onChange={handleChange}
            >
              <option>Select Patient</option>
              {patient.map((patients) => (
                <option
                  value={patients.PatientID}
                  id="test-list"
                  key={patients.PatientID}
                >
                  {patients.PatientName}
                </option>
              ))}
            </Form.Select>
            <Form.Label>Test</Form.Label>
            <Form.Select
              id="test-select"
              name="LabTestID"
              value={input.LabTestID}
              onChange={handleChange}
            >
              <option>Select Test</option>
              {test.map((tests) => (
                <option
                  value={tests.MasterLabTestID}
                  id="test-list"
                  key={tests.MasterLabTestID}
                >
                  {tests.MasterLabTestName}

                </option>
              ))}
            </Form.Select>
            <Form.Label>Doctor </Form.Label>
            {/* <Form.Control type="text" placeholder="Doctor Id" value={input.DoctorID} name='DoctorID' onChange={handleChange}/> */}
            <Form.Select
              id="test-select"
              name="DoctorID"
              value={input.DoctorID}
              onChange={handleChange}
            >
              <option>Select Doctor</option>
              {doctor.map((doctors) => (
                <option
                  value={doctors.DoctorID}
                  id="test-list"
                  key={doctors.DoctorID}
                >
                  {doctors.DoctorName}
                </option>
              ))}
            </Form.Select>
            <Form.Label>Patient Value</Form.Label>
            <Form.Control
              type="number"
              placeholder="Patient Value"
              name="PatientValue"
              onChange={handleChange}
              value={input.PatientValue}
            ></Form.Control>
            <Form.Label>Lab Technician</Form.Label>
             <Form.Select
        id="test-select"
        name="LabTechnicianID"
        value={input.LabTechnicianID}
        onChange={handleChange}>
        
        <option>Select Name</option>
        {staff.map((staffs) => (
        <option
        value={staffs.StaffID}
        id="test-list"
        key={staffs.StaffID}
        >
        {staffs.StaffName}
        </option>
        ))}
        </Form.Select>
            {/* <Form.Label>Lab Technician ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Lab Technician ID"
              name="LabTechnicianID"
              onChange={handleChange}
              value={input.LabTechnicianID}
            ></Form.Control> */}
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Status"
              name="Comments"
              onChange={handleChange}
              value={input.Comments}
            ></Form.Control>
            <Form.Label>Check In Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Check In"
              name="CheckIn"
              onChange={handleChange}
              max={getDate()}
              value={input.CheckIn}
              required
            ></Form.Control>
            <Form.Label>Check Out Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Check Out"
              name="CheckOut"
              onChange={handleChange}
              value={input.CheckOut}
              min={getDate()}
              required
            ></Form.Control>
            <br></br>
            <Button type="submit" variant="primary">
              Submit
            </Button>{" "}
            <>&nbsp;</>
            <Button type="reset" variant="secondary" onClick={handleReset}>
              Clear
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

function getDate(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  return today
}

export default UploadTest;
