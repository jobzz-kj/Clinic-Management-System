import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router';
import{Button} from 'react-bootstrap';
import axios from 'axios'
import roleController from "../../../Helpers/RoleLogin";





function ViewTestDetails(){
    const[input, setInputs]    =   useState([])
    const{id}= useParams()
    const navigate= useNavigate()

    useEffect(() => {
        axios
        .get( `http://localhost:4000/masterlabtests/${id}`)
        .then((response) => {
            console.log("Promise was fullfilles")
            console.log(response)
            setInputs(response.data)
        })
    },[])

return(<>
 <div id='test-container'>
            
          <div id="test-details"> <h2>{input.MasterLabTestName}<>&nbsp;</></h2>
          
           <h2>{input.Description}</h2>
           <h2>{input.NormalRange}</h2>
           </div>
           <div>
           {roleController.isLabtechnician() && <Button variant='danger' type='button' id="delete" onClick={()=>DeleteStaff(input.MasterLabTestID)}>Delete</Button>}
           <>&nbsp;</>
           {roleController.isLabtechnician() && <Button type='button' variant='success' id="edit" onClick={()=>navigate(`/testedit/${input.MasterLabTestID}`)}>Edit</Button>}
           </div>
           <div>
            <br></br>
          
           
           </div>
           </div>
</>)

}

function DeleteStaff(id){

    axios
    .delete( `http://localhost:4000/masterlabtests/${id}`)
    .then((response) => {
        console.log("Promise was fullfilles")
        console.log(response)

        
    })
    alert(`${id} Deleted`)
    //  window.location='/testdetails'

}













export default ViewTestDetails;