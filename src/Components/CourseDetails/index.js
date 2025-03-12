

const CourseDetails=({courseDetails})=>{
 // console.log(courseDetails,'Data Inside Child Components...!');
  return <>
    <div>{courseDetails?.map((item,index)=>{
      return <>
       <p>User Id: {item.id}</p>
       <p>User Title: {item.title}</p>
      </>

   })}</div>
  </>

}

export default CourseDetails;
