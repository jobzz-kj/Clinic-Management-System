import React from 'react'
function DoctorAssign() {
    return(
        <div style={{ 
            display: 'block', 
            width: 700, 
            padding: 30 ,
            marginLeft : '35%',
            marginTop : 50,
            backgroundColor : 'rgb(90, 1, 0)'
          }}>
                <button style={{backgroundColor:'rgb(218, 153, 79)',border:'none',color:'black',width: '100%' ,height: "100%"}}>Doc Availability</button><br /><br />
                <button style={{backgroundColor:'rgb(218, 153, 79)',border:'none',color:'black',width: '100%' ,height: "100%"}}>Duty time</button> <br /><br />
                <button style={{backgroundColor:'rgb(218, 153, 79)',border:'none',color:'black',width: '100%' ,height: "100%"}}>Patient list of a doc</button>  <br />    <br /> 
                <button style={{backgroundColor:'rgb(218, 153, 79)',border:'none',color:'black',width: '100%' ,height: "100%"}}>Previous Appoinment</button><br /><br />
                <button style={{backgroundColor:'rgb(218, 153, 79)',border:'none',color:'black',width: '100%' ,height: "100%"}}>Pre-Booking</button>   
        </div>
    )
}
export default DoctorAssign;