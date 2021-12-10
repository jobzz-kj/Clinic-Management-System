



import { Form,Button } from "react-bootstrap"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import './admin.css'

import axios from 'axios'



function EditDoctor(){
    const {id} = useParams()
    return(
        <>
            <h1 style={{marginTop:30,color:'black'}}>Doctor Edit</h1>
            <MyForm id={id} />
        </>
    )
}







function MyForm(props){
    const [input,setInputs] = useState({})
    const [spec,setSpec]=useState([])
    const [staff,setStaff]=useState([])
    const [submitted,setSubmitted] = useState(false)

  
    
    useEffect(() => {
        axios
            .get(`http://localhost:4000/doctors/${props.id}`)
            .then(response => {
              console.log(response)
               setInputs(response.data)
        })
    },[])



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

    
    function handleSubmit(event){
        event.preventDefault()
      
        axios
            .put(`http://localhost:4000/doctors/${props.id}`,input)
            .then(response => {
                console.log(response)
                alert('User details updated')
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
          <Button variant='outline-primary' type='submit'> Submit </Button>
          <Button variant='outline-danger' type='reset' onClick={handleReset}>Cancel</Button>
      </Form.Group>
    </Form>
  </div>

</>)









}

export default EditDoctor;