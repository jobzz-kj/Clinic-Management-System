

import './App.css';
import roleController from "./Helpers/RoleLogin";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import NoMatch from "./Components/NoMatch";

import AdminHomePage from './Components/Admin/AdminHome'
import AddStaff from './Components/Admin/StaffList/AddStaff'
import StaffFetch from './Components/Admin/StaffList/StaffFetch'
import StaffDetails from './Components/Admin/StaffList/StaffDetails';
import StaffEdit from './Components/Admin/StaffList/StaffEdit'
import RegisterUser from './Components/Admin/RegisterUser';
import AddDoctor from './Components/Admin/AddDoctor';
import SearchByStaffId from './Components/Admin/StaffList/SearchByStaffId';
import ViewDoctor from './Components/Admin/ViewDoctor';

import EditDoctor from './Components/Admin/EditDoctor';
import DoctorDetails from './Components/Admin/DoctorDetails';


import FrontOfficeHome from './Components/FrontOffice/Home';
import AddPatient from './Components/FrontOffice/AddPatient';
import PatientEdit from './Components/FrontOffice/PatientEdit';
import PatientAppoinment from './Components/FrontOffice/PatientAppoinment';
import Patients from "./Components/FrontOffice/PatientFetch";
import DoctorAssign from './Components/Doctor/DoctorAssign';
import Bill from './Components/FrontOffice/Bill';

import DrDash from "./Components/Doctor/DrDash";
import Appointments from "./Components/Doctor/Appointments";
import AppointmentDetails from "./Components/Doctor/AppointmentDetails";
import AddNotes from "./Components/Doctor/AddNotes";
import LabResults from "./Components/Doctor/LabResults";
import MedicalHistory from "./Components/Doctor/MedicalHistory";
import PatientDetails from "./Components/Doctor/PatientDetails";
import OrderTest from './Components/Doctor/OrderTest'



import LabTechHome from './Components/Lab Technician/LabTechHome';
import UploadTest from './Components/Lab Technician/UploadTest';
import DaywiseList from './Components/Lab Technician/DaywiseList';
import TestList from './Components/Lab Technician/masterTable/TestList';
import ViewTestDetails from './Components/Lab Technician/masterTable/ViewTestDetails';
import AddTest from './Components/Lab Technician/masterTable/AddTest';
import EditTest from './Components/Lab Technician/masterTable/EditTest';
import PatientReport from './Components/Lab Technician/PatientReport';
import ReportDetails from './Components/Lab Technician/ReportDetails';
import Footer from './Footer';
import Health360 from './Components/Health360';




function App() {
  return (
    <div className="App">


      <MyRouter />
    </div>

  );
}

function MyRouter() {

  return (
    <>
      <Router>

        <Navbar bg='dark' variant='dark' className='navbar navbar-default navbar-fixed-top' id='navbar' >
          <Container >



            {/* AdminDashBoard*/}

            {roleController.isAdmin() && <Nav.Link className="link" href="/admin" style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>AdminDashBoard</Nav.Link>}

            {roleController.isAdmin() && !localStorage.getItem('myToken') && <Nav.Link className="link" href="/userregister" style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Register User</Nav.Link>}
            {roleController.isAdmin() && <Nav.Link className="link" href="/addstaff" style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Register Staff</Nav.Link>}
            {roleController.isAdmin() && <Nav.Link className="link" href="/staffs" style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Staff List</Nav.Link>}
            {roleController.isAdmin() && <Nav.Link className="link" href="/userregister" style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Register User</Nav.Link>}

            {/* Doctor DashBoard*/}
            {roleController.isDoctor() && <Nav.Link className="link" href="/doctor" style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Doctor DashBoard</Nav.Link>}
            {roleController.isDoctor() && <Nav.Link className="link" href="/testdetails" element={<TestList />} style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Test Details</Nav.Link>}

            {/* FrontOffice DashBoard*/}
            {roleController.isFrontoffice() && <Nav.Link className="link" href="/frontoffice" style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Front Office DashBoard</Nav.Link>}
            {roleController.isFrontoffice() && <Nav.Link className="link" href='/bills' style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Bills</Nav.Link>}


            {/* LabTechnician DashBoard*/}
            {roleController.isLabtechnician() && <Nav.Link className="link" href="/lab" style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Lab Technician DashBoard</Nav.Link>}
            {roleController.isLabtechnician() && <Nav.Link className="link" href="/uploadtest" element={<UploadTest />} style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Upload Test </Nav.Link>}
            {roleController.isLabtechnician() && <Nav.Link className="link" href="/daywiselist" element={<DaywiseList />} style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Daywise List </Nav.Link>}
            {roleController.isLabtechnician() && <Nav.Link className="link" href="/testdetails" element={<TestList />} style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Test Details</Nav.Link>}

            {/* LogOut*/}
            {localStorage.getItem('myToken') && <div><Nav.Link className="link" onClick={() => window.location = '/login'} href="/login" style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Logout</Nav.Link></div>}

            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end">

              {/* Home,About,Login */}
              <Navbar.Brand href='/' style={{ fontSize: 17, marginTop: 20 }}>🅷🅴🅰🅻🆃🅷 360</Navbar.Brand>
              <Nav.Link href='/home' style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Home</Nav.Link>
              <Nav.Link href='/about' style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>About Us</Nav.Link>
              {!localStorage.getItem('myToken') && <Nav.Link href="/login" style={{ textDecoration: 'none', color: 'white', fontSize: 17 }}>Log In</Nav.Link>}


            </Navbar.Collapse>

          </Container>
        </Navbar>

        <Routes>

          {/* Home,About,Login Routing */}
          <Route path='/' element={<Health360 />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />


          {/* AdminDashBoard Routing */}
          <Route path='/admin' element={<AdminHomePage />} />
          <Route path='/addstaff' element={<AddStaff />} />
          <Route path='/staffs' element={<StaffFetch />} />
          <Route path='/staffs/:id' element={<StaffDetails />} />
          <Route path='/editstaffs/:id' element={<StaffEdit />} />
          <Route path='/userregister' element={<RegisterUser />} />


          <Route path='/searchstaff' element={<SearchByStaffId />} />
          <Route path='/viewdoctor' element={<ViewDoctor />} />
          <Route path='/editdoctor/:id' element={<EditDoctor />} />
          <Route path='/doctors/:id' element={<DoctorDetails />} />
          <Route path='/adddoctor' element={<AddDoctor />} />



          {/* Doctor DashBoard Routing */}
          <Route path="/doctor" element={<DrDash />} />
          <Route path="/appointmentdetails/:id" element={<AppointmentDetails />} />
          <Route path="/appointment/:id" element={<Appointments />} />
          <Route path="/addnotes/:id" element={<AddNotes />} />
          <Route path="/labresults/:id" element={<LabResults />} />
          <Route path="/medicalhistory/:id" element={<MedicalHistory />} />
          <Route path="/patientdetails/:id" element={<PatientDetails />} />
          <Route path='/ordertests/:id' element={<OrderTest />} />



          {/* FrontOffice DashBoard Routing */}
          <Route path='/frontoffice' element={<FrontOfficeHome />} />
          <Route path='/addpatient' element={<AddPatient />} />
          <Route path='/patientAppoinment' element={<PatientAppoinment />} />
          <Route path='/doctorassign' element={<DoctorAssign />} />
          <Route path='/patients' element={<Patients />} />
          <Route path='/editpatients/:id' element={<PatientEdit />} />
          <Route path='/bills' element={<Bill />} />




          {/* LabTechnician DashBoard Routing */}
          <Route path="/lab" element={<LabTechHome />} />
          <Route path="/uploadtest" element={<UploadTest />} />
          <Route path="/daywiselist" element={<DaywiseList />} />
          <Route path="/testdetails" element={<TestList />} />
          <Route path='/viewtestdetails/:id' element={<ViewTestDetails />} />
          <Route path='/addtest' element={<AddTest />} />
          <Route path='/testedit/:id' element={<EditTest />} />
          {/* <Route path="/labresults/:id" element={<LabResults />} />  */}
          <Route path='/patientreport' element={<PatientReport />} />
          <Route path='/reportdetails' element={<ReportDetails />} />













        </Routes>
        <br /><br /><br />
      </Router>


{/* Footer */}
      {/* <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid style={{bottom:0}}>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://copyright.gov.in/Documents/CopyrightRules1957.pdf"> Health360ltd.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
 */}

    </>
  );
}

export default App;
