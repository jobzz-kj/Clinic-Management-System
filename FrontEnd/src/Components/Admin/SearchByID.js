import React,{useState,useEffect} from 'react'
import axios from 'axios'




function StaffDetailsByID(){
    const [staffs,setStaff] = useState({}) //since a single post is coming, rather than getting an array, we r getting a object
    const [id,setId] = useState(1) //usestate for collecting id from the user
    const[idFromButtonClick,setIdFromButtonClick] = useState(1)

    // useEffect ( () => {
    //     axios
    //         .get(`http://localhost:4000/staffs/${idFromButtonClick}`)
    //         .then(respose => {
    //             console.log(respose)
    //             setStaff(respose.data)
    //             //console.log(`${idFromButtonClick}`)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // },[idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    
    return(
        <>
        <h5 style={{marginSpecializationp:50,color:'rgb(85, 205, 255)'}}>Details of : <b style={{fontSize:40}}> {staffs.StaffName} </b></h5>
        <div style={{
            marginSpecializationp: 40, 
            width: 700, 
            marginLeft : '35%',
          }}>

          <Table striped hover variant='dark'>
              <tbody style={{color:'rgb(85, 205, 255)'}}>
                  <tr>
                      <td >StaffName</td>
                      <td style={{color:'rgb(238, 215, 188)'}}><h5>{staffs.StaffName}</h5></td>
                  </tr>
                  <tr>
                      <td>DateOfBirth</td>
                      <td><h5>{staffs.DateOfBirth}</h5></td>
                  </tr>
                  <tr>
                      <td>ContactNo</td>
                      <td style={{color:'rgb(238, 215, 188)'}}><h5>{staffs.ContactNo}</h5></td>
                  </tr>
                  <tr>
                      <td>Email</td>
                      <td style={{color:'rgb(238, 215, 188)'}}><h5>{staffs.Email}</h5></td>
                  </tr>
                  <tr>
                      <td>Address</td>
                    <td><h5>{staffs.Address}</h5></td>
                </tr>

                <tr>
                      <td>Role</td>
                    <td style={{color:'rgb(238, 215, 188)'}}><h5>{staffs.Role}</h5></td>
                </tr>
                <tr>
                      <td>Qualification</td>
                    <td><h5>{staffs.Qualification}</h5></td>
                </tr>
                <tr>
                      <td>Specialization</td>
                    <td style={{color:'rgb(238, 215, 188)'}}><h5>{staffs.Specialization}</h5></td>
                </tr>
                <tr>
                      <td>URL</td>
                    <td style={{color:'rgb(238, 215, 188)'}}><h5>{staffs.URL}</h5></td>
                </tr>
                
                
              </tbody>

            
            <br/><br/>
            </Table>
            <Button type='button' variant='primary' onClick={() => navigate(`/editstaffs/${staffs.StaffID}`)} style={{backgroundColor:'white',border:'none',color:'rgb(85, 205, 255)'}} >Edit Staff</Button>
            <Button type='button' variant='primary' style={{marginLeft:20,backgroundColor:'white',border:'none',color:'rgb(85, 205, 255)'}} onClick={()=>DeleteStaff(staffs.StaffID)}>Delete</Button>
            <br/><br/>
        <a href='/staffs' style={{color:'white'}} >Back to StaffList</a>
        </div>
        </>
    )
}

    function DeleteStaff(idFromButtonClick){
        console.log('Delete1 promise was fulfilled')
        //console.log(`${idFromButtonClick}`)
        axios
            .delete(`http://localhost:4000/staffs/${idFromButtonClick}`)
            .then(response => {
                console.log('Delete promise was fulfilled')
                console.log(response)
                alert(`Staff ${staffs.StaffName} is deleted from the list`)
            })
    }


export default StaffDetailsByID