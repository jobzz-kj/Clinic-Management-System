import {Link } from 'react-router-dom'
import roleController from '../../Helpers/RoleLogin';
import '../Lab Technician/LabTech.css'


function AdminHomePage() {
  return (
    <> 
    
{/* <!-- Icon Bar (Sidebar - hidden on small screens) -->*/}
<nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center" style={{marginTop:-23,background:'black',opacity:0.8}}>
  {/* <!-- Avatar image in top left corner -->
  <img src="/w3images/avatar_smoke.jpg" style={{width:'100%'}} /> */}
  {roleController.isAdmin() && <Link to='/staffs' className="w3-bar-item w3-button w3-padding-large w3-black">
    <i className="fa fa-home w3-xxlarge"></i>
    <p>HOME</p>
  </Link>}
  {roleController.isAdmin() && <Link to='/staffs' className="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i className="fa fa-user w3-xxlarge"></i>
    <p>STAFFLIST</p>
  </Link>}
  {roleController.isAdmin() && <Link to='/addstaff' className="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i className="fa fa-user w3-xxlarge"></i>
    <p>ADD STAFF</p>
  </Link>}
  {roleController.isAdmin() && <Link to='/userregister' className="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i className="fa fa-user w3-xxlarge"></i>
    <p>ADD USER</p>
  </Link>}
</nav>

{/* <!-- Navbar on small screens (Hidden on medium and large screens) --> */}
<div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="#" className="w3-bar-item w3-button" style={{width:'25%'}}>HOME</a>
    <a href="#about" className="w3-bar-item w3-button" style={{width:'25%'}}>STAFFLIST</a>
    <a href="#photos" className="w3-bar-item w3-button" style={{width:'25%'}}>ADD STAFF</a>
    <a href="#contact" className="w3-bar-item w3-button" style={{width:'25%'}}>ADD USER</a>
  </div>
</div>
    {/* {roleController.isAdmin() && <Link to='/staffs'>
        <button type='button' className='labtech'>
          <h2>StaffList</h2>
        </button>
      </Link>}<br></br>
      {roleController.isAdmin() && <Link to='/addstaff'>
        <button type='button' className='labtech'>
          <h2>AddStaff</h2>
        </button>
      </Link>}<br></br>
      {roleController.isAdmin() && <Link to='/userregister'>
        <button type='button' className='labtech'>
          <h2>Add User</h2>
        </button>
      </Link>}<br></br>  */}
    
    </>
  )
}

export default AdminHomePage;
