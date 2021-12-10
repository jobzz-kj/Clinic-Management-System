import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import {Table,Button} from 'react-bootstrap'

function ViewPatientsDetails() {

    const [patients,setPatients] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios   
            .get(`http://localhost:4000/patients`)
            .then(response => {
                console.log('Promise was fulfilled')
                setPatients(response.data)
            })
    }, [])
    return (
        <>
        <h5 style={{marginSpecializationp:50,color:'rgb(85, 205, 255)'}}>Details of : <b style={{fontSize:40}}> {patients.PatientName} </b></h5>
        <div style={{
            marginSpecializationp: 40, 
            width: 700, 
            marginLeft : '35%',
          }}>

          <Table striped hover variant='dark'>
              <tbody style={{color:'rgb(85, 205, 255)'}}>
                  <tr>
                      <td >PatientsName</td>
                      <td style={{color:'rgb(238, 215, 188)'}}><h5>{patients.PatientName}</h5></td>
                  </tr>
                  <tr>
                      <td>DateOfBirth</td>
                      <td><h5>{patients.DateOfBirth}</h5></td>
                  </tr>
                  <tr>
                      <td>ContactNo</td>
                      <td style={{color:'rgb(238, 215, 188)'}}><h5>{patients.ContactNo}</h5></td>
                  </tr>
                  <tr>
                      <td>Email</td>
                      <td style={{color:'rgb(238, 215, 188)'}}><h5>{patients.Email}</h5></td>
                  </tr>
                  <tr>
                      <td>Address</td>
                    <td><h5>{patients.Address}</h5></td>
                </tr>
                
                
              </tbody>

            
            <br/><br/>
            </Table>
            <Button type='button' variant='primary' onClick={() => navigate(`/editpatients/${patients.PatientsID}`)} style={{backgroundColor:'white',border:'none',color:'rgb(85, 205, 255)'}} >Edit Patients</Button>
            <Button type='button' variant='primary' style={{marginLeft:20,backgroundColor:'white',border:'none',color:'rgb(85, 205, 255)'}} onClick={()=>DeletePatients(patients.PatientsID)}>Delete</Button>
            <br/><br/>
        <a href='/patients' style={{color:'white'}} >Back to PatientsList</a>
        </div>
        </>
    )
}

function DeletePatients(id){
    console.log('Delete1 promise was fulfilled')
    axios   
        .delete(`http://localhost:4000/patients/${id}`)
        .then(response => {
            console.log('Delete promise was fulfilled')
            console.log(response)
        })
        window.location= '/patients'
}

export default ViewPatientsDetails
