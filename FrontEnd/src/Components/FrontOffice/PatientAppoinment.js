import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'; 


function PatientAppointment() {
    localStorage.clear();
    return (
        <>
            <center><h1>Patient Appointment</h1></center>
            <MyForm />
        </>
    );
}

function MyForm(props) {
    const [inputs, setInputs] = useState({});
    const [submitted,setSubmitted] = useState(false)
    const [doctor, setDoctor] = useState([]);
    const [patient, setPatient] = useState([]);
    
  
    useEffect(() => {
      axios.get("http://localhost:4000/patients/").then((response) => {
        console.log("Promise was fullfilles");
        console.log(response);
        setPatient(response.data);
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
        setInputs(values => ({ ...values, [name]: value }))
    };
    const handleReset = () => {
        console.clear()
        setSubmitted(false)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs);

        axios.post(`http://localhost:4000/appointments`, inputs)
            .then(response => {
       
               setInputs(response.data);
               alert('Appointment confirmed');
              
            })
         
    };

    function goToHome() {
        window.location = '/';
    }




    return (
        <>
        <div className="form">
        <div style={{ 
                    display: 'block', 
                    width: 700, 
                    padding: 30 ,
                    marginLeft : '35%',
                    marginSpecializationp : 50,
                    backgroundColor : '#004b6e',
                    marginTop : 40
                  }} > 
        <Form onSubmit = {handleSubmit}>

       
            
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{color: "white"}}>Patient Name:</Form.Label>
                <Form.Select
              id="test-select"
              name="PatientID"
              value={inputs.PatientID}
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
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{color: "white"}} >Doctor Name:-</Form.Label>
                                <Form.Select
              id="test-select"
              name="DoctorID"
              value={inputs.DoctorID}
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
            </Form.Group>
                
            <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label style={{color: "white"}}>Appointment Date:-</Form.Label>
            <Form.Control className="input" type="date" name="AppointmentDate" placeholder="Enter amount"
                            value={inputs.AppointmentDate || ''} onChange={handleChange}
                            required></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTime">
            <Form.Label style={{color: "white"}}>Appointment Time:-</Form.Label>
            <Form.Control className="input" type="time" name="AppointmentTime" min="09:00" max="18.00"
                            value={inputs.AppointmentTime || ''} onChange={handleChange}
                            required></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Label style={{color: "white"}}>Contact Number:-</Form.Label>
            <Form.Control className="input" type="text" name="ContactNo" placeholder="Enter Contact Number"
                            value={inputs.ContactNo || ''} onChange={handleChange}
                            required></Form.Control>
            </Form.Group>
            <center>
            <Button type='submit' variant='primary' >Register</Button>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Button type='reset' variant='danger' onClick={handleReset} >Cancel</Button>
            </center>

        </Form>

            </div>
            </div>
        </>
    );

};
export default PatientAppointment;