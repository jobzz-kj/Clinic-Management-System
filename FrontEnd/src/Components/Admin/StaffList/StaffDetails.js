import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import {Table,Button} from 'react-bootstrap'

function StaffDetails() {

    const [staffs,setStaffs] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios   
            .get(`http://localhost:4000/staffs/${id}`)
            .then(response => {
                console.log('Promise was fulfilled')
                setStaffs(response.data)
            })
    }, [])
    return (
        <>
        <h5 className="display-3" style={{marginTop: 30}}><center>Details of : <b style={{fontSize:40}}> {staffs.StaffName} </b></center></h5>
        <div style={{
            marginSpecializationp: 40, 
            width: 700, 
            marginLeft : 400,
            marginTop : 30,
            width:700
          }}>

          <Table striped hover variant='dark'>
              <tbody style={{opacity:0.8}}>
              <tr>
                      <td >UserID</td>
                      <td style={{fontSize:24}}><h5>{staffs.UserID}</h5></td>
                  </tr>
                  <tr>
                      <td >StaffName</td>
                      <td style={{fontSize:24}}><h5>{staffs.StaffName}</h5></td>
                  </tr>
                  <tr>
                      <td >RoleID</td>
                      <td style={{fontSize:24}}><h5>{staffs.RoleID}</h5>
                      </td>
                  </tr>
                  <tr>
                      <td>DateOfBirth</td>
                      <td style={{fontSize:24}}><h5>{staffs.DateOfBirth}</h5></td>
                  </tr>
                  <tr>
                      <td>ContactNo</td>
                      <td style={{fontSize:24}}><h5>{staffs.ContactNo}</h5></td>
                  </tr>
                  <tr>
                      <td>Address</td>
                    <td style={{fontSize:24}}><h5>{staffs.Address}</h5></td>
                </tr>
                  <tr>
                      <td>Email</td>
                      <td style={{fontSize:24}}><h5>{staffs.Email}</h5></td>
                  </tr>
                  

                <tr>
                      <td>Qualification</td>
                    <td><h5>{staffs.Qualification}</h5></td>
                </tr>
                
                
              </tbody>

            
            <br/><br/>
            </Table>
            <Button type='button' variant='outline-primary' onClick={() => navigate(`/editstaffs/${staffs.StaffID}`)}  style={{fontSize:24}}>Edit Staff</Button> 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button type='button' variant='outline-danger'  onClick={()=>DeleteStaff(staffs.StaffID)} style={{fontSize:24}}> Delete</Button>
            <br/><br/>
        
        </div>
        <Button type='button' variant='outline-secondary' href='/staffs' style={{color:'black',marginLeft:-1200,fontSize:18}} >Back to StaffList</Button>
        </>
    )
}

function DeleteStaff(id){
    console.log('Delete1 promise was fulfilled')
    axios   
        .delete(`http://localhost:4000/staffs/${id}`)
        .then(response => {
            console.log('Delete promise was fulfilled')
            console.log(response)
        })
        window.location= '/staffs'
}

export default StaffDetails
