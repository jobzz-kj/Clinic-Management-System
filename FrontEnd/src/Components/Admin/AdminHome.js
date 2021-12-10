import {Link } from 'react-router-dom'
import roleController from '../../Helpers/RoleLogin';
import '../Lab Technician/LabTech.css'


function AdminHomePage() {
  return (
    <>
      {roleController.isAdmin() && <Link to='/staffs'>
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
      </Link>}<br></br>
      <Link to='/adddoctor'>
        <button type='button' className='labtech'><h2>Add Doctor</h2></button>
      </Link>
      <Link to='/searchstaff'>
        <button type='button' className='labtech'><h2>Search Staff</h2></button>
      </Link>
      <Link to='/viewdoctor'>
        <button type='button' className='labtech'><h2>View Doctor</h2></button>
      </Link>
    </>
  );
}

export default AdminHomePage;
