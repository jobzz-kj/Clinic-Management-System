import { useState, useEffect } from "react";
import axios from "axios";
import Appointments from "./Appointments";

function StaffList() {
  //initialize ths usestate to empty
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get(
      "http://localhost:5000/staff").then(response => {
        console.log("Promise fullfilled");
        console.log(response);
        setAppointments(response.data);
      })
    
  }, []);

  return (
    <>
    <div>
      <h2 style={{textAlign:"center"}}>Staff List</h2>
        <ul>
          {appointments.map(appointment=>
            <li key={appointment.id}>
                  <Appointments details={Appointments}/>
            </li>
            )}
        </ul>
      </div>
    </>
  );
}
export default StaffList;
