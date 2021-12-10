import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../Lab Technician/LabTech.css'

function Bill() {

    const [input,setInputs] = useState({})
    const [patient, setPatient] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/patients/").then((response) => {
          console.log("Promise was fullfilles");
          console.log(response);
          setPatient(response.data);
        });
      }, []);
    
    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setInputs(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        // console.log(staffs)
        event.preventDefault()
        //setSubmitted(true)

       

        


            axios   
                .post('http://localhost:4000/bills/',input)
                .then(response => {
                    console.log(response)
                //    window.location='/testdetails'
                })
                .catch(error => {
                    console.log(error)
                })
               }




  return (
    <>
      <div id="addtest">
        <Form onSubmit={handleSubmit}>
          <Form.Group  className="mb-2" controlId="mastertestupload" >
          <Form.Label>Patient ID</Form.Label>
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
              <Form.Label>Appointmnet ID</Form.Label>
              <Form.Control as='textarea'  placeholder='Description...' value={input.AppointmentID || ""} name='AppointmentID' onChange={handleChange}></Form.Control>
              <Form.Label>Bill Amount</Form.Label>
              <Form.Control type='text' placeholder='Normal Range' value={input.BillAmount|| ""} name='BillAmount' onChange={handleChange}></Form.Control>
              <br></br>
              <Button variant='primary' type='submit'> Submit </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default Bill;
