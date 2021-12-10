import { Form,Button } from "react-bootstrap"
import React, { useState, useEffect } from "react";
import './admin.css'

import axios from 'axios'


function AddDoctor(){
    const [input,setInputs] = useState({})
    const [spec,setSpec]=useState([])
    const [staff,setStaff]=useState([])
    const [submitted,setSubmitted] = useState(false)

  




    useEffect(() => {
        axios.get(`http://localhost:4000/staffs/byrole/${2}`).then((response) => {
          console.log("Promise was fullfilles");
          console.log(response);
          setStaff(response.data);
        });
      }, []);
    
    useEffect(() => {
        axios.get("http://localhost:4000/specializations/").then((response) => {
          console.log("Promise was fullfilles");
          console.log(response);
          setSpec(response.data);
        });
      }, []);



      const handleReset = () => {
        console.clear()
        setSubmitted(false)
    }


    
    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setInputs(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        // console.log(staffs)
        event.preventDefault()
       

            axios   
                .post('http://localhost:4000/doctors/',input)
                .then(response => {
                    console.log(response)
                //    window.location='/'
                })
                .catch(error => {
                    console.log(error)
                })
               }







return(<>

<div id="adddoctor">
    <Form onSubmit={handleSubmit}>
      <Form.Group  className="mb-2" controlId="a" >

      <Form.Label>Doctor Name</Form.Label>

        <Form.Select
        id="test-select"
        name="DoctorName"
        value={input.DoctorName}
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




          <Form.Label>Staff ID</Form.Label>
          <Form.Control type='text' placeholder='ID' value={input.DoctorID || ''} name='DoctorID' onChange={handleChange}></Form.Control>
          


          
          <Form.Label>Specialization</Form.Label>
          <Form.Select
              id="test-select"
              name="SpecializationID"
              value={input.SpecializationID}
              onChange={handleChange}
            >
              <option>Select Doctor Specialization</option>
              {spec.map((specs) => (
                <option
                  value={specs.SpecializationID}
                  id="test-list"
                  key={specs.SpecializationID}
                >
                  {specs.SpecializationName}
                </option>
              ))}
              
              </Form.Select>
              <Form.Label>Doctor Availability</Form.Label>
              <Form.Select name='IsDocAvailable' value={input.IsDocAvailable} onChange={handleChange}>
                  <option>Availability</option>
                  <option value='1'>Yes</option>
                  <option value='2'>No</option>
                  </Form.Select>
                <br></br><br></br>
          <Button variant='primary' type='submit'> Submit </Button>
          <Button variant='danger' type='reset' onClick={handleReset}>Cancel</Button>
      </Form.Group>
    </Form>
  </div>

</>)









}

export default AddDoctor;