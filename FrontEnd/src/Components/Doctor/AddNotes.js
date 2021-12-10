import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import {Form,Table,Button} from 'react-bootstrap'

function AddNotes() {
  const { id } = useParams();

  return (
    <>
      <MyForm id={id} />
    </>
  );
}

function MyForm(props) {
  //initialize to empty
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log(props);
    axios
      .get(`http://localhost:4000/patientlogs/${props.id}`)
      .then((response) => {
        console.log("Promise fullfilled");
        console.log(response);
        setInputs(response.data);
      });
  }, []);

  function handleChange(event) {
    //saving the name of element and its value
    const name = event.target.name;
    const value = event.target.value;

    //updating the values into the state
    setInputs((values) => ({ ...values, [name]: value }));
  }
  function handleSubmit(event) {
    //to prevent the default html Form submit behaviour
    event.preventDefault();
    //printing the values to console
    console.log(inputs);
    axios
      .put(`http://localhost:4000/patientlogs/${props.id}`, inputs)
      .then((response) => {
        console.log("fullfilled...");
        console.log(response);
        //  toast.success("Enquiry Submitted successfully");
        alert("Details Updated Successfully!!");
      })
      .catch((err) => {
        console.log(err);
      });
    //  window.location('')
  }

  return (
    <>
      <div>
        {/* <button
          style={{ color: "black", border: "3px solid #3867d6" }}
          type="button"
          className="btn btn-success"
          // className="labtech"
          onClick={() => navigate(`/appointmentdetails/${props.id}`)}
        >
          Add to History
        </button> */}
        <Form onSubmit={handleSubmit}>
          <div style={{width:'60%',marginLeft:'25%'}}>
            <h2 className='display-3' style={{marginTop:10,marginBottom:10}}>Add Notes and Prescription</h2>
            <div>
              <Form.Label ><h2>Notes </h2></Form.Label>
              <Form.Control
                as="textarea"
                name="DoctorNotes"
                value={inputs.DoctorNotes || ""}
                onChange={handleChange}
                required
                style={{height:90}}
              />
            </div>
            <div>
              <Form.Label><h2>Prescription </h2> </Form.Label>
              <Form.Control
                as ="textarea"
                name="PreviousMedicineHistory"
                value={inputs.PreviousMedicineHistory || ""}
                onChange={handleChange}
                required
                style={{height:90}}
              />
            </div>
            <div>
              <Button variant='primary' type="submit">Submit</Button>
              {/* <button>Cancel</button> */}
            </div>
          </div>
        </Form>
        {/* <ToastContainer /> */}
      </div>
    </>
  );
}
export default AddNotes;
