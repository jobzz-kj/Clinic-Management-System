import {useState} from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import AdminHomePage from './AdminHome';


function RegisterUser(){
    localStorage.clear();
    return (
        <>
        <MyForm/>
        </>
    );
}

function MyForm(props){
    const [inputs, setInputs] = useState({});

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}))
    };

    function handleSubmit(event){
        event.preventDefault();
        console.log(inputs);

        axios.post('http://localhost:4000/users/register', inputs)
            .then(response => { 
                alert("User registered !")
                window.location = '/admin'        
            })
            .catch(error =>{
                localStorage.clear();
                if(error.response){
                    alert(error.response.data)  //=> response payload
                }
            })
    };

    function goToHome(){
        window.location = '/admin';
    }

    return(
        <>
         {/* <div className="form" style={{
            margin:'auto',
            justifyContent:'center',
            alignItems:'center',
            width : '25%',
            marginTop : '40px'
            }}> */}

<div className='wrapper'>
<center> <h1 className="display-3" style={{marginTop: '30px'}}> Sign Up</h1></center>
        <Form onSubmit = {handleSubmit}>
            <Form.Group className="p-3 mt-3" controlId="formBasicUserName">
                <Form.Label>User Name</Form.Label>
                <div class="form-field d-flex align-items-center"> 
                <Form.Control className="input" type = "text" name = "UserName" placeholder = "Enter UserName"
                        value = {inputs.UserName || ''} onChange = {handleChange} autoComplete='off'
                        required></Form.Control>
                {/* <Form.Text className="text-muted">
                    Do not share your login credentials with anyone other than the login purposes
                </Form.Text> */}
                </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div class="form-field d-flex align-items-center"> 
            <Form.Control className="input" type = "password" name = "Password" placeholder = "Enter Password"
                        value = {inputs.Password || ''} onChange = {handleChange}
                        required></Form.Control>
                        </div>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <div class="form-field d-flex align-items-center"> 
                <Form.Select name = 'RoleID' onChange = {handleChange}>
                    <option>Choose one</option>
                    <option value = "1" onChange = {handleChange}>Admin</option>
                    <option value = '2' onChange = {handleChange}>Doctor</option>
                    <option value = '3' onChange = {handleChange}>Front Office</option>
                    <option value = '4' onChange = {handleChange}>Lab Technician</option>
                </Form.Select>
                </div>
            </Form.Group>

            <center>
            <Button variant="primary" type="submit">Submit</Button>&nbsp;&nbsp;
            <Button variant="danger" onClick = {goToHome} >Cancel</Button>
            </center>

        </Form>
        </div>
        </>
    );

};
export default RegisterUser;