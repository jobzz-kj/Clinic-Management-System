//import axios from 'axios'
import React,{useState} from 'react'

import {Form,Button} from 'react-bootstrap'


function AddPatient() {
    const [patients,setPatient] = useState({})
    const [submitted,setSubmitted] = useState(false)
    
    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setPatient(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        console.log(patients)
        event.preventDefault()
        setSubmitted(true)

            // axios   
            //     .post('http://localhost:4000/staffs/',staffs)
            //     .then(response => {
            //         console.log(response)
            //         alert(`${staffs.StaffName} added successfully`)
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     })
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
                    backgroundColor : 'rgb(85, 205, 255)'
                  }} > 
                <Form onSubmit={handleSubmit}>
                    {submitted?<div>Success!Patient Added</div>:null}
                    <Form.Group className='mb-3' controlId='formStaffName'>
                        <Form.Control
                        className='Form-Control'
                        id= 'PatientName'
                        type= 'text'
                        placeholder='Enter Patient Name'
                        name = 'PatientName'
                        value = {patients.PatientName}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formAuthor'>
                        <Form.Control
                        className='Form-Control'
                        id='DateOfBirth'
                        type='date'
                        placeholder='Enter Date Of Birth'
                        name = 'DateOfBirth'
                        value = {patients.DateOfBirth}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formStaffName'>
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

                    <Form.Group className='mb-3' controlId='formStaffName'>
                        <Form.Control
                        className='Form-Control'
                        id='Email'
                        type='number'
                        placeholder='Enter Email'
                        name = 'Email'
                        value = {patients.Email}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formStaffName'>
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
                    <Form.Group className='mb-3' controlId='formStaffName'>
                        <Form.Control
                        className='Form-Control'
                        id='Blood'
                        type='text'
                        placeholder='Blood group'
                        name = 'Blood'
                        value = {patients.Blood}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                  

                <Button type='submit' variant='primary' style={{backgroundColor:'white',border:'none',color:'rgb(85, 205, 255)'}}>Register</Button>
                <Button type='reset' variant='primary' style={{backgroundColor:'white',border:'none',color:'rgb(85, 205, 255)',marginLeft:20}} onClick={handleReset} >Cancel</Button>
                </Form>
            </div>        
        </div>
    )
}


export default AddPatient