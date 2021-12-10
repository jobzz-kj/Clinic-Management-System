import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import DoctorDetailsProps from './DoctorDetailsProps'
import {Table,Button} from 'react-bootstrap'
import './admin.css'



function DoctorDetails(){
  





const [doctor,setDoctor] = useState([])
  
    const {id} = useParams()
    const navigate = useNavigate()
    

    useEffect(() => {
        axios   
            .get(`http://localhost:4000/doctors/${id}`)
            .then(response => {
                console.log('Promise was fulfilled')
                setDoctor(response.data)
            })
    }, [])


    


    return (
        <>
        <h4 id='dochead'>DETAILS OF  {doctor.DoctorName} </h4>
        <div id='detailsdiv'>


            <DoctorDetailsProps details={doctor}/>

            <br/><br/>
        <a href='/staffs' style={{color:'white'}} >Back to StaffList</a>
        </div>
        </>
    )
}



export default DoctorDetails
