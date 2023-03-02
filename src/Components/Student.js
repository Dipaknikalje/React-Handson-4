import Nav from './Nav'

const Student =()=>{
    return(
        <>
        <Nav/>
        <div className='Students'>
        <h1>Student Details</h1>
        <button>Add New Student</button>
        </div>
        <table >
         <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
         </tr>
         <tr>
            <td>Dipak</td>
            <td>24</td>
            <td>MERN</td>
            <td>February</td>
            <td>Edit</td>
         </tr>
         <tr>
            <td>Dipak</td>
            <td>24</td>
            <td>MERN</td>
            <td>February</td>
            <td>Edit</td>
         </tr>
         <tr>
            <td>Dipak</td>
            <td>24</td>
            <td>MERN</td>
            <td>February</td>
            <td>Edit</td>
         </tr> <tr>
            <td>Dipak</td>
            <td>24</td>
            <td>MERN</td>
            <td>February</td>
            <td>Edit</td>
         </tr>
         <tr>
            <td>Dipak</td>
            <td>24</td>
            <td>MERN</td>
            <td>February</td>
            <td>Edit</td>
         </tr>
        </table>
        </>
    )
}

export default Student;