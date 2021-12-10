
import { useState, useEffect } from 'react'
import {Table,Button} from 'react-bootstrap'
import axios from 'axios'

function DoctorDetailsProps(props){

    const [spec,setSpec]= useState([])
    const [staff,setStaff] = useState([])


    
    useEffect(() => {
        axios   
            .get(`http://localhost:4000/staffs/${props.details.DoctorID}`)
            .then(response => {
                console.log('Promise was fulfilled')
                setStaff(response.data)
            })
    }, [])



    useEffect(() => {
        axios   
            .get(`http://localhost:4000/specializations/${props.details.SpecizalizationID}`)
            .then(response => {
               
                console.log('Promise was fulfilled')
                setSpec(response.data)
                console.log(response)
                
            })
    }, [])


    return(<>
    <Table striped hover variant='dark' id='doctable'>
              <tbody style={{color:'rgb(85, 205, 255)'}}>
              <tr>
                      <td >DoctorName</td>
                      <td style={{color:'rgb(238, 215, 188)'}}><h5>{props.details.DoctorName}</h5></td>
                  </tr>
                  <tr>
                      <td >Specialization</td>
                      <td style={{color:'rgb(238, 215, 188)'}}><h5>{spec.SpecializationName}</h5></td>
                  </tr>
                  <tr>
                      <td>Address</td>
                      <td><h5>{staff.Address}</h5></td>
                  </tr>
                  
                  
                
              </tbody>

            
            <br/><br/>
            </Table>
          
    </>)

}

export default DoctorDetailsProps;