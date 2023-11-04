import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideNav from "./SideNav";
import { supabase } from "../client";
import './CrewDetail.css'



const CrewDetail = ({data}) => {
    let params = useParams();
    const {id} = useParams();
    const [emp, setEmp] = useState({
        fullName: '',
        empId: '',
        dept: '',
        role: '',
        email: ''
    });
  
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
      return (
      <>
      <table align="center" className="whole-page">
                    <tbody >
                        <tr>
                            <td width="5%" align="left"><label htmlFor="fullName">Full Name</label>
                            </td><td width="35%" align="left" className="values">{": "}{emp.fullName} </td>
                            </tr>
                        <tr>
                            <td align="left"><label htmlFor="empId">Employee ID</label> </td><td className="values" align="left">{": "}{emp.empId}</td>
                            </tr>
                        <tr>
                            <td align="left">
                            <label htmlFor="dept">Department</label> </td><td className="values" align="left">{": "} {emp.dept}
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                            <label htmlFor="role">Designation</label> </td><td className="values" align="left">{": "}{emp.role}
                            </td>
                        </tr>
                        <tr>
                            <td align="left"><label htmlFor="email">Email ID</label> </td><td className="values" align="left">{": "}{emp.email}</td>
                        </tr>
                    </tbody>
                </table>
  
      <div className='sideNav'>
          <SideNav />
        </div></>
      );
    };
    
    export default CrewDetail;