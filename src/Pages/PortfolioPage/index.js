
import style from './PortfolioPage.module.scss';
import { StudentDetils } from '../../MocData/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentDetails from '../../Components/StudentDetails';


const PortfolioPage = () => {
    let navigate = useNavigate();
    const [studData, setStudData] = useState(StudentDetils);

      const redirectPage=(id,name,email,mobile,gender,dob,course,Address)=>{
        console.log('function calling....!',id,name,email,mobile,gender,dob,course,Address);
        navigate('/StudentDetails');
        localStorage.setItem('StudentData',JSON.stringify(id,name,email,mobile,gender,dob,course,Address));
        localStorage.setItem('isVisible',JSON.stringify(true));
      }
    console.log(studData,'studentDetils@@###');
    return <>
        <div className={`container ${style.MainSection}`}>
            <h3 className='text-center text-primary'> Studen*t Details </h3>
            {studData?.length ? studData.slice(0,4).map((data, index) => {
                return <div class='row p-1 text-dark border border-5 rounded-5' key={index}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className={`col-md-4 ${style.sect1}`}>
                                <label>Stud_Id:</label><br />
                                <label>Name:</label><br />
                                <label>Email:</label><br />
                                <label>Mobile:</label><br />
                                <label>Gender:</label><br />
                                <label>DOB:</label><br />
                                <label>Course:</label><br />
                                <label>Addrss:</label><br />
                            </div>
                            <div className={`col-md-8 ${style.sect1}`}>
                               <label>{data.id}</label><br />
                                <label>{data.name}</label><br />
                                <label>{data.email}</label><br />
                                <label>{data.mob}</label><br />
                                <label>{data.Gender}</label><br />
                                <label>{data.DOB}</label><br />
                                <label>{data.Course}</label><br />
                                <label>{data.Address}</label><br />
                            </div>
                                <label>{data.email}</label><br />
                                <button class='btn btn-danger' onClick={()=>redirectPage([data.id,data.name,data.mob,data.Gender,data.DOB,data.Course,data.Address])}>More Details</button>
                        </div>

                    </div>
                </div>
            }):'No Record Found'}






            {/* <div className={style.rightSection}>
                
            </div> */}
        </div>
    </>
}

export default PortfolioPage;