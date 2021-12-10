import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

import {Form,Button,Table} from 'react-bootstrap'

function PatientEdit(){
    const {id} = useParams()
    return(
        <>
            <h1 style={{marginTop:30,color:'black'}}>Patient Edit</h1>
            <MyForm id={id} />
        </>
    )
}


function MyForm(props){
    const [patients,setPatients] = useState({})
    const [submitted,setSubmitted] = useState(false)

     useEffect(() => {
         axios
             .get(`http://localhost:4000/patients/${props.id}`)
             .then(response => {
               console.log(response)
                setPatients(response.data)
         })
     },[])

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        setPatients(values => ({...values, [name]:value}))
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(patients)
        axios
            .put(`http://localhost:4000/patients/${props.id}`,patients)
            .then(response => {
                console.log(response)
                alert('User details updated')
            })
    }

    const handleReset = () => {
        console.clear()
        setSubmitted(false)
    }

    return (
        <div>
            <div style={{ 
                    display: 'block', 
                    width: 700, 
                    padding: 30 ,
                    marginLeft : '35%',
                    marginSpecializationp : 50,
                    backgroundColor : '#004b6e'
                  }} > 
                <Form onSubmit={handleSubmit}>
                    {submitted?<div>Success!Patient Updated</div>:null}
                  
                    <Form.Label style={{color:"white"}}>Patient Name</Form.Label>
                   
                    <Form.Group className='mb-3'>
                        <Form.Control
                        className='Form-Control'
                        id= 'PatientName'
                        type= 'text'
                        placeholder='Enter PatientName'
                        name = 'PatientName'
                        value = {patients.PatientName}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                   
                    <Form.Label style={{color:"white"}}>Age</Form.Label>
                  
                    <Form.Group className='mb-3'>
                        <Form.Control
                        className='Form-Control'
                        id= 'PatientAge'
                        type= 'text'
                        placeholder='Enter Patient Age'
                        name = 'Age'
                        value = {patients.Age}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                   
                                          <Form.Label style={{color:"white"}}>Email Id</Form.Label>
                   
                    <Form.Group className='mb-3' >
                        <Form.Control
                        className='Form-Control'
                        id= 'PatientEmail'
                        type= 'email'
                        placeholder='Enter Patient Email'
                        name = 'Email'
                        value = {patients.Email}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                   
                    <Form.Label style={{color:"white"}}>Contact Number</Form.Label>
                    
                    <Form.Group className='mb-3' controlId='formContactNumber'>
                        <Form.Control
                        className='Form-Control'
                        id='ContactNo'
                        type='number'
                        placeholder='Enter Contact No'
                        name = 'ContactNo'
                        value = {patients.ContactNo}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                   
                    <Form.Label style={{color:"white"}}>Blood Group</Form.Label>
                   
                    <Form.Group className='mb-3' controlId='formContactNumber'>
                        <Form.Control
                        className='Form-Control'
                        id= 'PatientBlood'
                        type= 'text'
                        placeholder='Enter Patient Blood'
                        name = 'BloodGroup'
                        value = {patients.BloodGroup}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                   
                    <Form.Label style={{color:"white"}}>Dob</Form.Label>
                   
                    <Form.Group className='mb-3' controlId='formContactNumber'>
                        <Form.Control
                        className='Form-Control'
                        id='DateOfBirth'
                        type='date'
                        placeholder='Enter DateOfBirth'
                        name = 'DateOfBirth'
                        value = {patients.DateOfBirth}
                        onChange = {handleChange}
                        required
                        max = {getDate()}
                    />
                    </Form.Group>
                    
                    <Form.Label style={{color:"white"}}>Patient Address</Form.Label>
                  
                    <Form.Group className='mb-3'>
                        <Form.Control
                        className='Form-Control'
                        id='Address'
                        type='text'
                        placeholder='Enter Address'
                        name = 'Address'
                        value = {patients.Address}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                    
                       
                    <Button type='submit' variant='primary' style={{ backgroundColor: 'white', border: 'none', color: 'black' }}> Register</Button> 
                    <Button type='reset' variant='danger' style={{ backgroundColor: 'white', border: 'none', color: 'black', marginLeft: 20 }} onClick={handleReset} >Cancel</Button>
                   
                </Form>
            </div>        
        </div>
    )
}
function getDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today
}

export default PatientEdit;