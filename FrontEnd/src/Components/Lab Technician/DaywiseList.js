
import {Button,Form,Row, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './LabTech.css'
import ShowDayWise from './ShowDayWise'
import React,{useState} from 'react'
import axios from 'axios';



function DaywiseList(){

    const [input,setInputs] = useState({})
    const [tests,setTest]   =useState([])
    
    
    
    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setInputs(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        
        event.preventDefault()
        

            axios   
                 .get(`http://localhost:4000/labreports//bydate/${input.CheckIn}`)
                .then(response => {
                    console.log(response)
                    setTest(response.data)
                   
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
                <Form.Label>Date</Form.Label>
                <Form.Control type='date' name='CheckIn' value={input.CheckIn} onChange={handleChange}></Form.Control>
                <br></br>
            <Button variant='primary' type='submit'>Submit</Button>
            </Form.Group>
            
            </Row>
        </Form>
        </div>
        <div >
            <Table>
        <ul id='daywise-item'>
                {tests.map(test =>
                <li id="day-list"  key={test.LabReportID}>
                    <ShowDayWise details={test}/>
                    
                    
                    </li>
                    )}
            </ul>
            </Table>
    </div>

    </>
)

}

export default DaywiseList;