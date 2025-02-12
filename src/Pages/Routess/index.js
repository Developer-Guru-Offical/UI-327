import { Routes, Route } from 'react-router-dom';
import '../../Components/Header';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import CoursePage from '../CoursesPage';
import ProductPage from '../ProductPage';
import ServicePage from '../ServicePage';
import PortfolioPage from '../PortfolioPage';
import ReviewPage from '../ReviewPage';
import BlogPage from '../BlogPage';
import ContactPage from '../ContactPage';
import PageNotFound from '../PageNotFound';
import StudentDetails from '../../Components/StudentDetails';
import style from './Routess.module.scss';

const Routess = () => {

    return (<>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Course" element={<CoursePage />} />
            <Route path="/Product" element={<ProductPage />} />
            <Route path="/Services" element={<ServicePage />} />
            <Route path="/Portfolio" element={<PortfolioPage />} />
            <Route path="/Review" element={<ReviewPage />} />
            <Route path="/Blog" element={<BlogPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/StudentDetails" element={<StudentDetails />} />
            <Route path="*" element={<PageNotFound/>}
            />

        </Routes></>)
}

export default Routess;