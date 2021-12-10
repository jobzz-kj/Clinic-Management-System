import {Button}  from "react-bootstrap"

import {Link} from "react-router-dom"

function TestDetails(props){
    
    return(<>
    <div className="testlist">
        <h4>{props.details.MasterLabTestID} : {props.details.MasterLabTestName}</h4>
       
       
        
        <div >
        <Link to={`/viewtestdetails/${props.details.MasterLabTestID}`}><Button type='button' id='details'>View Details</Button></Link><>&nbsp;</>
         </div>

         
    </div>
    </>)
}

export default TestDetails