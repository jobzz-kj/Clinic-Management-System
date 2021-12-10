import {Link } from 'react-router-dom'

import './LabTech.css'
function LabTechHome() {
  return (
    <>
      <Link to='/uploadtest'>
        <button type='button' className='labtech'>
          <h2>Upload Test Results</h2>
        </button>
      </Link><br></br>
      <Link to='/daywiselist'>
        <button type='button' className='labtech'>
          <h2>Day Wise List</h2>
        </button>
      </Link><br></br>
      <Link to='/patientreport'>
        <button type='button' className='labtech'>
          <h2>View Patient Report</h2>
        </button>
      </Link>
      <Link to='/testdetails'>
        <button type='button' className='labtech'>
          <h2>Test Details</h2>
        </button>
      </Link>
      
    </>
  );
}

export default LabTechHome;
