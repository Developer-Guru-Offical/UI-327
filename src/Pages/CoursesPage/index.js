
import style from './CoursesPage.module.scss';
import { CourseDetaisl } from '../../MocData/';
import { useEffect, useState } from 'react';
import CourseDetails from '../../Components/CourseDetails';
import {axiosGetStudentDetails} from '../../Services/Api';
//import axios from "axios";


const CoursesPage = () => {
  const [courseDetails, setCourseDetails] = useState();
  const [studentDetails, setStudentDetails] = useState();
  const [orgId, setOrgId] = useState();
  console.log(courseDetails);
  //console.log(studentDetails);

  useEffect(() => {
    const orgId = localStorage.getItem('OrgId');
    setOrgId(orgId);
  }, [])

  useEffect(() => {
    getStudentDetails();
  }, [])


  const getStudentDetails = async () => {
    // console.log('function calling......!');
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(data => setCourseDetails(data))
    
    /*************** API Intigration using Axios Library ********************* */
    try {
      //const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const response = await axiosGetStudentDetails();
      if(response.status===200){
        setCourseDetails(response.data);
      }
      else{
        setCourseDetails([]);
        console.log('Error weritting from API Side');
      }
    
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

    /*************** API Intigration using FETCH Methods ********************* */
    //   try {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    //     if (response.ok) {
    //         const data = await response.json(); 
    //         console.log(data);
    //         setCourseDetails(data)
    //     } else {
    //         throw new Error('Failed to fetch data');
    //     }
    // } catch (error) {
    //     console.error('Error:', error); 
    // }

 return (<>
  <h1> THISIS THE COURSE PAGE </h1>
    <div><CourseDetails courseDetails={courseDetails} /></div>
  </>)
}

export default CoursesPage;