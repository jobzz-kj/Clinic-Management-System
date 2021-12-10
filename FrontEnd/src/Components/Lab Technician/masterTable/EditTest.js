import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './LabTech.css'
import { useParams } from "react-router";

function EditTest() {

    const [input,setInputs] = useState({})
    const{id}=useParams()
    useEffect(()=>  {
        axios
        .get(`http://localhost:4000/masterlabtests/${id}`)
        .then(response => {
          console.log('Fullfilled Promise')
          console.log(response)
          setInputs(response.data)
        })
      },[])



   
    
    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setInputs(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        // console.log(staffs)
        event.preventDefault()
        

            axios   
                .put(`http://localhost:4000/masterlabtests/${id}`,input)
                .then(response => {
                    console.log(response)
                  window.location='/testdetails'
                })
                .catch(error => {
                    console.log(error)
                })
               }




  return (
    <>
      <div id="addtest">
          <h1>Edit Test Details</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group  className="mb-2" controlId="mastertestupdate" >
              <Form.Label>Test Name</Form.Label>
              <Form.Control type='text' placeholder='Test Name..' value={input.MasterLabTestName || ""} name='MasterLabTestName' onChange={handleChange}></Form.Control>
              <Form.Label>Description</Form.Label>
              <Form.Control as='textarea'  placeholder='Description...' value={input.Description || ""} name='Description' onChange={handleChange}></Form.Control>
              <Form.Label>Normal Range</Form.Label>
              <Form.Control type='text' placeholder='Normal Range' value={input.NormalRange || ""} name='NormalRange' onChange={handleChange}></Form.Control>
              <br></br>
              <Button variant='primary' type='submit'> Submit </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default EditTest;
