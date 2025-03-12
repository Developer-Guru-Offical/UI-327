//import APIcall from '../Services/commonService';
import axios from "axios";

export const axiosGetStudentDetails=async ()=>{
  try{
     const res= await axios({
          url: "https://jsonplaceholder.typicode.com/posts",
          method: "GET",
        })
   return res;
  }
  catch(e)
  {
    console.log(e);
  }
}