import React from 'react'
import {Link } from 'react-router-dom'
function FrontOfficeHome() {
    return (
        <div style={{
            display: 'block',
            width: '70%',
            padding: 30,
            marginRight:'15%',
            marginLeft: '15%',
            marginTop: 50,
            color:'white'
        }}>

            <Link to='/addpatient'><button style={{ backgroundColor: '#004b6e',marginTop:'50px',padding:'20px', border: 'none', color: 'black', width: '100%', height: "100%" }}><h2>Patient Registration</h2></button><br /><br /></Link>
            <Link to='/patients'><button style={{ backgroundColor: '#004b6e',marginTop:'50px',padding:'20px', border: 'none', color: 'black', width: '100%', height: "100%" }}><h2>Patient Record</h2></button> <br /><br /></Link>
            <Link to='/patientAppoinment'><button style={{ backgroundColor: '#004b6e',marginTop:'50px',padding:'20px', border: 'none', color: 'black', width: '100%', height: "100%" }}><h2>Patient Appoinment</h2></button>  <br /> <br /></Link>
            <Link to='/daywiselist'><button style={{ backgroundColor: '#004b6e', marginTop:'50px',padding:'20px', border: 'none', color: 'black', width: '100%', height: "100%" }}><h2>Day-Wise Lab Report</h2></button><br /><br /></Link>
            
        </div>
    )
}
export default FrontOfficeHome