import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OrderTest() {
  const [test, upTests] = useState([]);
  const [input, setInputs] = useState({});
  //const [doctor, setDoctor] = useState([]);
  // const [patient, setPatient] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:4000/masterlabtests").then((response) => {
      console.log("Promise was fullfilles");
      console.log(response);
      upTests(response.data);
    });
  }, []);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('HI');
    console.log(input);
    axios
      .post("http://localhost:4000/ordertests", input)
      .then((response) => {
        console.log(response);
        window.location = `/doctor`;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2 style={{ textAlign: "center", fontFamily: "monospace" }}>
        UPLOAD TEST RESULT
      </h2>
      <div id="upload-formcontainer">
        <Form id="upload-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Patient Value</Form.Label>
            <Form.Control
              type="number"
              placeholder="Patient Value"
              name="PatientID"
              onClick={handleChange}
              value={id}
            ></Form.Control>
            <Form.Label>Test 1</Form.Label>
            <Form.Select
              id="test-select"
              name="Test1"
              value={input.Test1}
              onChange={handleChange}
            >
              <option>Select Test</option>
              {test.map((tests) => (
                <option
                  value={tests.MasterLabTestID}
                  id="test-list"
                  key={tests.MasterLabTestID}
                >
                  {tests.MasterLabTestName}
                </option>
              ))}
            </Form.Select>
            <Form.Label>Test 2</Form.Label>
            <Form.Select
              id="test-select"
              name="Test2"
              value={input.Test2}
              onChange={handleChange}
            >
              <option>Select Test</option>
              {test.map((tests) => (
                <option
                  value={tests.MasterLabTestID}
                  id="test-list"
                  key={tests.MasterLabTestID}
                >
                  {tests.MasterLabTestName}
                </option>
              ))}
            </Form.Select>
            <Form.Label>Test 3</Form.Label>
            <Form.Select
              id="test-select"
              name="Test3"
              value={input.Test3}
              onChange={handleChange}
            >
              <option>Select Test</option>
              {test.map((tests) => (
                <option
                  value={tests.MasterLabTestID}
                  id="test-list"
                  key={tests.MasterLabTestID}
                >
                  {tests.MasterLabTestName}
                </option>
              ))}
            </Form.Select>
            <Button type="submit" variant="primary">
              Submit
            </Button>{" "}
            <>&nbsp;</>
            <Button type="reset" variant="secondary">
              Clear
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default OrderTest;
