
import './App.css'
import SideNav from './Components/SideNav'
import { useState, useEffect} from "react";
import GraphLayout from './Components/GraphLayout';
import { supabase } from './client';


function App() {

  const [breweryTypeCount, setBreweryTypeCount] = useState([]);
  const [emp, setEmp] = useState({
    fullName: '',
    empId: '',
    dept: '',
    role: '',
    email: ''
});

  useEffect(() => {
    async function fetchEmployeeData() {
      const {data} = await supabase
        .from('Employees')
        .select();
      setEmp(data);
        const typCount = getTypCount(data);
        console.log(typCount);
        setBreweryTypeCount(typCount);
      }
  
    fetchEmployeeData();
  }, []);

  const getTypCount = (filteredData) => {
    const typCounts = {};
    filteredData.forEach((brew) => {
      const type = brew.department;
      typCounts[type] = (typCounts[type] || 0) + 1;
    });
    return Object.entries(typCounts);
  };

  return (
    <>
    <div className="whole-page" style={{ overflow: 'auto', maxHeight: '75vh' }}>
    <h2>TECHsavants Inc: Where Innovation Meets Expertise</h2>
    <h3 >We turn dreams into digital realities. At our core, we are more than just technologists.<br></br>We are dream-weavers, alchemists of the digital realm.</h3>
    </div> 
      <div className='sideNav'>
        <SideNav />
      </div>
      <div className='graphLay'>
            <GraphLayout breweryTypeCounts={breweryTypeCount} />
          </div>
    </>
  )
}

export default App
