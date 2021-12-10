import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

import {Form,Button} from 'react-bootstrap'

function StaffEdit(){
    const {id} = useParams()
    return(
        <>
            <h1 style={{marginTop:30,color:'black'}}>Staff Edit</h1>
            <MyForm id={id} />
        </>
    )
}


function MyForm(props){
    const [staffs,setStaffs] = useState({})
    const [submitted,setSubmitted] = useState(false)

     useEffect(() => {
         axios
             .get(`http://localhost:4000/staffs/${props.id}`)
             .then(response => {
               console.log(response)
                setStaffs(response.data)
         })
     },[])

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        setStaffs(values => ({...values, [name]:value}))
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(staffs)
        axios
            .put(`http://localhost:4000/staffs/${props.id}`,staffs)
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
                    backgroundColor : '#004b6e',
                    marginTop: 40,
                    
                  }} > 

                <Form onSubmit={handleSubmit} style={{opacity:0.8,color:'white'}}>
                    {/* {submitted?<div>Success!Staff Added</div>:null} */}
                  <Form.Label>User ID</Form.Label>
                    <Form.Group className='mb-3'>
                        <Form.Control
                        className='Form-Control'
                        id= 'UserID'
                        type= 'integer'
                        placeholder='Enter UserID'
                        name = 'UserID'
                        value = {staffs.UserID}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Label>Staff Name</Form.Label>
                    <Form.Group className='mb-3'>
                        <Form.Control
                        className='Form-Control'
                        id= 'StaffName'
                        type= 'text'
                        placeholder='Enter StaffName'
                        name = 'StaffName'
                        value = {staffs.StaffName}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    
                    <Form.Label>Role ID</Form.Label>
                    <Form.Group className='mb-3' >
                        <Form.Control
                        className='Form-Control'
                        id='RoleID'
                        type='number'
                        placeholder='Enter RoleID'
                        name = 'RoleID'
                        value = {staffs.RoleID}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                  <Form.Label>Date OF Birth</Form.Label>
                    <Form.Group className='mb-3'>
                        <Form.Control
                        className='Form-Control'
                        id='DateOfBirth'
                        type='date'
                        placeholder='Enter DateOfBirth'
                        name = 'DateOfBirth'
                        value = {staffs.DateOfBirth}
                        onChange = {handleChange}
                        max = {getDate()}
                        required
                    />
                    </Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Group className='mb-3' >
                        <Form.Control
                        className='Form-Control'
                        id='Address'
                        type='text'
                        placeholder='Enter Address'
                        name = 'Address'
                        value = {staffs.Address}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Group className='mb-3' >
                        <Form.Control
                        className='Form-Control'
                        id='ContactNo'
                        type='text'
                        placeholder='Enter ContactNo'
                        name = 'ContactNo'
                        value = {staffs.ContactNo}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Group className='mb-3' >
                        <Form.Control
                        className='Form-Control'
                        id='Email'
                        type='email'
                        placeholder='Enter Email'
                        name = 'Email'
                        value = {staffs.Email}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                    <Form.Label>Qualification</Form.Label>
                    <Form.Group className='mb-3'>
                        <Form.Control
                        className='Form-Control'
                        id='Qualification'
                        type='text'
                        placeholder='Enter Qualification'
                        name = 'Qualification'
                        value = {staffs.Qualification}
                        onChange = {handleChange}
                        
                    />
                    </Form.Group>
                    <Form.Label>Date OF Join</Form.Label>
                    <Form.Group className='mb-3' >
                        <Form.Control
                        className='Form-Control'
                        id='DateOfJoining'
                        type='date'
                        placeholder='Enter DateofJoining'
                        name = 'DateOfJoining'
                        value = {staffs.dateOfJoining}
                        onChange = {handleChange}
                        max = {getDate()}
                        required
                    />
                </Form.Group>


                  <Form.Label>Date Of Resignation</Form.Label>
                    <Form.Group className='mb-3' >
                        <Form.Control
                        className='Form-Control'
                        id='DateOfResignation'
                        type='date'
                        placeholder='Enter DateOfResignation'
                        name = 'DateOfResignation'
                        value = {staffs.DateOfResignation}
                        onChange = {handleChange}
                        min = {getDate()}
                    />
                    </Form.Group>
                    
                    <Form.Label>Remarks</Form.Label>
                    <Form.Group className='mb-3'>
                        <Form.Control
                        className='Form-Control'
                        id='Remarks'
                        type='text'
                        placeholder='Enter Remarks'
                        name = 'Remarks'
                        value = {staffs.Remarks}
                        onChange = {handleChange}
                        
                    />
                    </Form.Group>

                <Button type='submit' variant='primary' style={{fontSize:17}}>Update</Button>
                <Button type='reset' variant='danger' style={{fontSize:17,marginLeft:20}} onClick={handleReset} >Cancel</Button>
                </Form>
            </div>        
        </div>
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


export default StaffEdit