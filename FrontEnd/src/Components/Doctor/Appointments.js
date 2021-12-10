import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Appointments(props) {
  // const {id} = useParams();
  const [patient, setPatient] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/patients/${props.details.PatientID}`)
      .then((response) => {
        console.log("Promise fullfilled");
        console.log(response);
        setPatient(response.data);
      });
  }, []);

  // console.log(props);

  return (
    <>
      <br />
      <table className="table table-hover">
        <tr>
          <th style={{ paddingRight: 100 }}> {patient.PatientName}</th>

          <td>
            <button
              style={{ color: "black", border: "3px solid #3867d6" }}
              type="button"
              className="btn btn-success"
              // className="labtech"
              onClick={() => navigate(`/addnotes/${patient.PatientID}`)}
            >
              Notes And Prescription
            </button>
          </td>
          <td>
            <button
              style={{ color: "black", border: "3px solid #3867d6" }}
              type="button"
              className="btn btn-success"
              // className="labtech"
              onClick={() => navigate(`/ordertests/${patient.PatientID}`)}
            >
              Order Tests
            </button>
          </td>
          <td>
            <button
              style={{ color: "black", border: "3px solid #3867d6" }}
              type="button"
              className="btn btn-success"
              //className="labtech"
              onClick={() => navigate(`/labresults/${patient.PatientID}`)}
            >
              View Lab Results
            </button>
          </td>
          <td>
            <button
              style={{ color: "black", border: "3px solid #3867d6" }}
              type="button"
              className="btn btn-success"
              // className="labtech"
              onClick={() => navigate(`/medicalhistory/${patient.PatientID}`)}
            >
              View Medical History
            </button>
          </td>
          <td>
            <button
              style={{ color: "black", border: "3px solid #3867d6" }}
              type="button"
              className="btn btn-success"
              // className="labtech"
              onClick={() => navigate(`/patientdetails/${patient.PatientID}`)}
            >
              View Patient Details
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default Appointments;
