import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import {Table,Nav,Button} from 'react-bootstrap'

function Patient(props) {

    const navigate = useNavigate()
    console.log(props)
    var linkstyle = {
        padding : 5,
        backgroundColor :'navyblue',
        color : 'white'
    }
    return(
        <div>
        <div style={{
                    marginTop: 30, 
                    width: 600, 
                    marginLeft : '33%',
                  }}>
        <Table striped  hover variant='dark' className='color-table'>
            <tbody style={{opacity:0.8}}>
                <tr>
                    

                    <td >
                        <Nav.Link variant='pills' href={`/patients/${props.details.PatientID}`}><h4 style={{marginTop:'15px',color:'white',padding:1,textAlign:'center',opacity:0.9,fontSize:22}}>{props.details.PatientName}</h4></Nav.Link>
                    </td>
                    <td>
                    <Button type='button' variant='outline-primary' onClick={() => navigate(`/editpatients/${props.details.PatientID}`)} style={{fontSize:20,marginRight:10,marginTop:5}}>Edit</Button>
                    </td>
                    <td>
                    <Button type='button' variant='outline-danger' onClick={()=>DeletePatient(props.details.PatientID)} style={{fontSize:20,marginRight:5,marginTop:5}}>Delete</Button>
                    </td>
                </tr>
            </tbody>
            </Table>
            </div>
        </div>
    )

    function DeletePatient(id){
        console.log('Delete1 promise was fulfilled')
        axios   
            .delete(`http://localhost:4000/patients/${id}`)
            .then(response => {
                console.log('Delete promise was fulfilled')
                console.log(response)
            })
            window.location= '/patients'
    }
}

export default Patient