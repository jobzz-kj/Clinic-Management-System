import React from 'react'
function PatientRecords() {
    return(
        <div style={{ 
            display: 'block', 
            width: 700, 
            padding: 30 ,
            marginLeft : '35%',
            marginTop : 50,
            backgroundColor : 'rgb(90, 1, 0)'
          }}>
                <button style={{backgroundColor:'rgb(218, 153, 79)',border:'none',color:'black',width: '100%' ,height: "100%"}}>patient Details</button><br /><br />
                <button style={{backgroundColor:'rgb(218, 153, 79)',border:'none',color:'black',width: '100%' ,height: "100%"}}>Health Records</button> <br /><br />
                <button style={{backgroundColor:'rgb(218, 153, 79)',border:'none',color:'black',width: '100%' ,height: "100%"}}>Recent Prescription/Notes</button>  <br />    <br /> 
                <button style={{backgroundColor:'rgb(218, 153, 79)',border:'none',color:'black',width: '100%' ,height: "100%"}}>Medical History</button><br /><br />
                <button style={{backgroundColor:'rgb(218, 153, 79)',border:'none',color:'black',width: '100%' ,height: "100%"}}>Recent Lab Reports</button>   
        </div>
    )
}
export default PatientRecords;