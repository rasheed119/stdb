import { useState,useEffect } from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import AddStudents from './Components/AddStudents';
import Dashboard from './Components/Dashboard';
import EditStudents from './Components/EditStudents';

function App() {
  const [student , setstudent] = useState([]);
  useEffect(()=>{
    const getstudents = async() => {
      const responce =  await fetch("https://644e27f41b4567f4d580f5c6.mockapi.io/users",{
        method : "GET"
      });
      const data = await responce.json();
      if(data){
        setstudent(data);
      }
    }
    getstudents();
  },[])
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard student={student} setstudent={setstudent} />} />

        <Route path="/addstudents" element={<AddStudents student={student} setstudent={setstudent} />}/>

        <Route path='/editstudents/:id' element={<EditStudents student={student} setstudent={setstudent} />}/>
      </Routes>
    </div>
  );
}

export default App;
