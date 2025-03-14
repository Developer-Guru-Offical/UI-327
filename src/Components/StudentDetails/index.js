
import { useEffect, useState,useContext } from "react";
import { UserContex } from "../../Context/UserContex";
import style from "./StudentDetails.module.scss";

const StudentDetails = () => {

  const userName=useContext(UserContex);

  const [studentData, setStudentData] = useState();
  const [falgValue, setFalgValue] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState(true);

  console.log(falgValue,'falgValue@@###');
  console.log(deleteMsg,'deleteMsg@@###');


  useEffect(() => {
    const studData = localStorage.getItem('StudentData');
    const flagValue = localStorage.getItem('isVisible');
    setFalgValue(flagValue);
    setStudentData(JSON.parse(studData));
  }, []);

  const deleteRecord=()=>{
    setFalgValue(false);
    setDeleteMsg(false);
  }

  console.log(studentData, 'getStudent Data@@#####');

  return <>

    <h2>{userName}{falgValue || deleteMsg ? studentData ? studentData: 'No Record Found':'Record Has Been Deleted..!' }  
      {deleteMsg && <button className="btn btn-danger" onClick={()=>deleteRecord()}> Delete </button>}</h2>
  </>
}

export default StudentDetails;