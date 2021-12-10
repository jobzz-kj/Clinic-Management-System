
import {Button,Form,Row, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './../admin.css'
import SearchResults from './SearchResults';


function SearchByStaffId(){

    const [input,setInputs] = useState({})
    const [staff,setStaff]   =useState([])
    const [role,setRole]= useState({})
    
    
    
    
    useEffect(() => {
        axios.get(`http://localhost:4000/roles/${staff.RoleID}`).then((response) => {
          console.log("Promise was fullfilles");
          console.log(response);
          setRole(response.data);
        });
      }, []);

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setInputs(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        
        event.preventDefault()
        

            axios   
                 .get(`http://localhost:4000/staffs/${input.StaffID}`)
                .then(response => {
                    console.log(response)
                    setStaff(response.data)
                   
                })
                .catch(error => {
                    console.log(error)
                })
               }









return(
    <>
    <div id='view-test'>
        <Form onSubmit={handleSubmit}>
            <Row>
                
            <Form.Group>
                <Form.Label>Search By ID</Form.Label>
                <Form.Control type='text' name='StaffID' value={input.StaffID} onChange={handleChange} placeholder='Enter StaffID'></Form.Control>
                <br></br>
            <Button variant='primary' type='submit'>Submit</Button>
            </Form.Group>
            
            </Row>
        </Form>

        </div>
        <div>           
             <SearchResults details={staff}/>
        </div>

        

    </>
)

}

export default SearchByStaffId;