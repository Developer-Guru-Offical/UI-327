import { useEffect,useState } from 'react';
//import './HomePage.css';
import styles from './HomePage.module.scss'
import Header from '../../Components/Header';


const HomePage = () => {
    const [courseValue,setCourseValue]=useState();
    const [open,setopen]=useState(false);

    const hName='Home Page';
    const pages=['Home','About','Profile','Product','Blog','Contact'];
    const student={'name':'ABC','email':'abc@gmail.com'}

    console.log(courseValue,'courseValiue#####');
    
    useEffect(()=>{
      console.log('useEffect Calling....');
       },[courseValue]);

    const setCourseValue1=(value)=>{
        //console.log(value, 'setcourseValue calling....');
        setCourseValue(value);
        setopen(true);
        //setCourseValue('Rect JS');
        if(open)
        {
            console.log('jbehgfhegjgfhjgj');
        }
    }
    return (
        <div>
              {/* <div className={styles.headerSection}>
              <Header/>
              </div> */}
            <div className={styles.bodySection}>
                {/* <h3> THIS IS THE BODY</h3> */}
                {/* <h4 className='bg-primary'>HAVE A NIC DAY</h4> */}
            </div>
            <div className={styles.footerSection}>
                <h3> THIS IS THE FOOTER</h3>
            </div>
        </div>
    )

}

export default HomePage;