
import axios from 'axios';
import {useState,useEffect} from 'react';
import TestDetails from './masterTable/TestDetails';
import {Link}   from 'react-router-dom';

import ReportDetails from './ReportDetails'

function PatientReport(){



    const[inputs, setInputs]    =   useState([])

    useEffect(() => {
        axios
        .get('http://localhost:4000/labreports')
        .then((response) => {
            console.log("Promise was fullfilles")
            console.log(response)
            setInputs(response.data)
        })
    }, [])


return(<div>
      <h1 style={{textAlign:'center'}}>Test</h1>
            <ul id='test-item'>
                {inputs.map(report =>
                <li id="test-list"  key={report.LabReportID}>
                    <ReportDetails details={report}/>
                    
                    
                    </li>
                    )}
            </ul>
</div>)


}

export default PatientReport