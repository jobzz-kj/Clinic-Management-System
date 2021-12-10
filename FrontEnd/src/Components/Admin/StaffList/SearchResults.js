
import './../admin.css'
import {Table} from 'react-bootstrap'

function SearchResults(props){

    return(<>
        <Table variant='dark'>
            <br/><br/>
        <tr><td><h2>{props.details.StaffID}</h2></td></tr>
        <tr><td><h2>{props.details.StaffName}</h2></td></tr>
        
        <tr><td><h2>{props.details.DateOfBirth}</h2></td></tr>
        <tr><td><h2>{props.details.Address}</h2></td></tr>
        <tr><td><h2>{props.details.Email}</h2></td></tr>
        </Table>
    </>)

}

export default SearchResults