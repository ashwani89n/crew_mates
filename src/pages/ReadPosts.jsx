import SideNav from "../Components/SideNav";
import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import { supabase } from "../client";


const ReadPosts = () => {

  const [emp, setEmp] = useState([]);
    
    useEffect(() => {
      fetchPosts();
    }, []);
  
    const fetchPosts = async () => {
      const {data} = await supabase
        .from('Employees')
        .select();
      setEmp(data)
    }

  return (
    <div>
    <div className='sideNav'>
        <SideNav />
      </div>
      <div className="ReadPosts" >
            {
                emp && emp.length > 0 ?
                emp.map((emp,index) => 
                   <Card id={emp.id} fullName={emp.name} empId={emp.employee_id} dept={emp.department} role={emp.designation} email={emp.email}/>
                ) : <div className="whole-page"><h2>{'No Employees Yet 😞'}</h2></div>
            }
        </div>  
    </div>
  );
};

export default ReadPosts;