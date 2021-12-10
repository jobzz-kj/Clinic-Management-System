import { useState, useEffect } from "react";
import axios from "axios";
import Staff from "./Staffs.js";

function StaffFetch() {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    console.log("The use effect hook has been executed");

    axios.get("http://localhost:4000/staffs/").then((response) => {
      console.log("promise fulfilled");
      console.log(response);
      setStaffs(response.data);
    });
  }, []);

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <h1 className="display-3" style={{marginTop: '20px'}}><b>Staff List</b></h1>
        <ul>
          {staffs.map((staff) => (
            <span key={staff.StaffID}>
              <Staff details={staff} />
            </span>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StaffFetch;
