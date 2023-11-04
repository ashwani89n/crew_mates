import SideNav from "../Components/SideNav";
import './EditPost.css'
import { supabase } from "../client";
import { useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

const EditPosts = ({data}) => {
    
  const {id} = useParams();
    const [emp, setEmp] = useState({
        fullName: '',
        empId: '',
        dept: '',
        role: '',
        email: ''
    });
    const [updateSuccess, setUpdateSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

    useEffect(() => {
      async function fetchEmployeeData() {
        const { data, error } = await supabase.from('Employees').select().eq('id', id);
  
        if (error) {
          console.error('Error fetching employee data:', error);
        } else if (data && data.length > 0) {
          const employeeData = data[0];
          setEmp({
            fullName: employeeData.name,
            empId: employeeData.employee_id,
            dept: employeeData.department,
            role: employeeData.designation,
            email: employeeData.email,
          });
        }
      }
  
      fetchEmployeeData();
    }, [id]);
  
    const updatePost = async (event) => {
      event.preventDefault();
    
      await supabase
      .from('Employees')
      .update({name: emp.fullName, employee_id: emp.empId, department: emp.dept, designation: emp.role, email:emp.email })
      .eq('id', id);

      setEmp({
        fullName: '',
        empId: '',
        dept: '',
        role: '',
        email: ''
    });
    setUpdateSuccess(true);

    setTimeout(() => {
      setUpdateSuccess(false);
    }, 100000);

      window.location = "/explore";
  }
  const deletePost = async (event) => {
    event.preventDefault();
  
    await supabase
      .from('Employees')
      .delete()
      .eq('id', id); 

      setDeleteSuccess(true);

    setTimeout(() => {
      setDeleteSuccess(false); 
    }, 100000);

  
    window.location = "/explore";
  }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmp({ ...emp, [name]: value });
    }

  return (
    <div>
    <div className='sideNav'>
        <SideNav />
      </div>
      <div className="updatePost">
      {updateSuccess && (
          <div className="alert success">
            Update operation successful! This message will disappear in a few seconds.
          </div>
        )}
        {deleteSuccess && (
          <div className="alert success">
            Delete operation successful! This message will disappear in a few seconds.
          </div>
        )}
            <form onSubmit={updatePost}>
                <table align="center">
                    <tbody >
                        <tr>
                            <td width="50%" align="left"><label htmlFor="fullName">Full Name </label></td>
                            <td  align="left"><input type="text" id="fullName" name="fullName"  value={emp.fullName} onChange={handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td align="left"><label htmlFor="empId">Employee ID </label></td>
                            <td align="left"><input type="text" id="empId" name="empId"  value={emp.empId} onChange={handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td align="left">
                            <label htmlFor="dept">Department</label>
                            </td>
                            <td align="left">
                            <select id="dept" name="dept"  value={emp.dept} onChange={handleInputChange}>
                            <option value="">Select</option>
                                <option value="Engineering and Development">Engineering and Development</option>
                                <option value="Product">Product Management</option>		
                                <option value="Research and Development(R&D)">Research and Development(R&D)</option>
                                <option value="Quality">Quality Assurance</option>
                                <option value="IT Operations">IT Operations</option>
                                <option value="Security">Information Security</option>
                                <option value="Data Analytics">Data Analytics</option>
                                <option value="Sales and Business Development">Sales and Business Development</option>
                                <option value="Marketing">Marketing</option>
                                <option value="HR">Human Resources(HR)</option>
                                <option value="Finance">Finance and Accounting</option>
                                <option value="Customer Support and Success">Customer Support and Success</option>
                                <option value="Design and User Experience (UX/UI)">Design and User Experience (UX/UI)</option>
                                <option value="Project Mgmnt">Project Management</option>
                                <option value="Planning">Strategic Planning</option>
                                <option value="Content and Documentation">Content and Documentation</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                            <label htmlFor="role">Designation</label>
                            </td>
                            <td align="left">
                            <select id="role" name="role"  value={emp.role} onChange={handleInputChange}>
                                <option value="">Select</option>
                                <option value="Supervisor">Supervisor</option>
                                <option value="Team Lead">Team Lead</option>
                                <option value="Team Member">Team Member</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td align="left"><label htmlFor="email">Email ID </label></td>
                            <td align="left"><input type="text" id="email" name="email"  value={emp.email} onChange={handleInputChange} /></td>
                        </tr>
                    </tbody>
                </table>
             <br></br>
                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    </div>
  );
};

export default EditPosts;