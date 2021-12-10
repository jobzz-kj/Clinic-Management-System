import axios from 'axios';
import { useState, useEffect } from 'react';

import { Form, Button, Table } from 'react-bootstrap'


function AddPatient() {
    const [patients, setPatient] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [inputs, setInputs] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:4000/doctors')
            .then((response) => {
                console.log("Promise was fullfilles")
                console.log(response)
                setInputs(response.data)
            })
    }, [])
    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value

        setPatient(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        console.log(patients)
        event.preventDefault()
        setSubmitted(true)

        axios
            .post('http://localhost:4000/patients/', patients)
            .then(response => {
                console.log(response)
                alert(`${patients.PatientName} added successfully`)
            })
            .catch(error => {
                console.log(error)
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
                padding: 30,
                marginLeft: '35%',
                marginSpecializationp: 50,
                backgroundColor: '#004b6e',
                marginTop: 40,
                borderRadius: '25'
            }} >

                <Form onSubmit={handleSubmit}>
                    {submitted ? <div>Success!Patient Added</div> : null}

                    {/* <Form.Group className='mb-3' controlId='formDoctorId'>
                    <select>
            {inputs.map(test =>
                <option value= "test.DoctorID" id="doclist"  key={test.doctors}>
                    {test.DoctorName}
                    </option>
                    )}
            </select> */}
                    {/* </Form.Group> */}
                    {/* <Form.Group className='mb-3' controlId='formAppoinmentId'>
                        <Form.Control
                        className='Form-Control'
                        id= 'AppointmentID'
                        type= 'text'
                        placeholder='Enter Patient AppoinmentId'
                        name = 'AppointmentID'
                        value = {patients.AppointmentID}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group> */}
                   


                                <Form.Label style={{ color: "white" }}>Patient Name</Form.Label>
                           
                                <Form.Group className='mb-3' controlId='formStaffName'>
                                    <Form.Control
                                        className='Form-Control'
                                        id='PatientName'
                                        type='text'
                                        placeholder='Enter Patient Name'
                                        name='PatientName'
                                        value={patients.PatientName}

                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                          

                                <Form.Label style={{ color: "white" }}>Dob</Form.Label>
                          
                                <Form.Group className='mb-3' controlId='formStaffName'>
                                    <Form.Control
                                        className='Form-Control'
                                        id='DateOfBirth'
                                        type='date'
                                        placeholder='Enter Date Of Birth'
                                        name='DateOfBirth'
                                        value={patients.DateOfBirth}
                                        onChange={handleChange}
                                        max={getDate()}
                                        required
                                    />
                                </Form.Group>
                         

                                <Form.Label style={{ color: "white" }}>Age</Form.Label>
                            
                                <Form.Group className='mb-3' controlId='formStaffName'>
                                    <Form.Control
                                        className='Form-Control'
                                        id='Age'
                                        type='text'
                                        placeholder='Enter Your Age'
                                        name='Age'
                                        value={patients.Age}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                         
                                <Form.Label style={{ color: "white" }}>Contact Number</Form.Label>
                            
                                <Form.Group className='mb-3' controlId='formStaffName'>
                                    <Form.Control
                                        className='Form-Control'
                                        id='ContactNo'
                                        type='number'
                                        placeholder='Enter Contact No'
                                        name='ContactNo'
                                        value={patients.ContactNo}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                           
                               
                                    <Form.Label style={{ color: "white" }}>Email Id</Form.Label>
                                    
                                    <Form.Group className='mb-3' controlId='formPatientEmail'>
                                    <Form.Control
                                        className='Form-Control'
                                        id='Email'
                                        type='email'
                                        placeholder='Enter Email'
                                        name='Email'
                                        value={patients.Email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                          
                                <Form.Label style={{ color: "white" }}>Patient Address</Form.Label>
                           
                            <Form.Group className='mb-3' controlId='formPatientAddress'>
                                <Form.Control
                                    className='Form-Control'
                                    id='Address'
                                    type='text'
                                    placeholder='Enter Address'
                                    name='Address'
                                    value={patients.Address}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                      
                           
                            <Form.Label style={{ color: "white" }}>Blood Group</Form.Label>
                       
                        <Form.Group className='mb-3' controlId='formStaffName'>
                            <Form.Control
                                className='Form-Control'
                                id='BloodGroup'
                                type='text'
                                placeholder='Blood group'
                                name='BloodGroup'
                                value={patients.BloodGroup}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>
                   
                       
                    <Button type='submit' variant='primary' style={{ backgroundColor: 'white', border: 'none', color: 'black' }}> Register</Button> 
                    <Button type='reset' variant='danger' style={{ backgroundColor: 'white', border: 'none', color: 'black', marginLeft: 20 }} onClick={handleReset} >Cancel</Button>
                    
            
        </Form>
                         
                        </div >
                    </div >
               
                )

}
function getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today
}

export default AddPatient