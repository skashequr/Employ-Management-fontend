
import { Outlet } from 'react-router-dom';
import { NavbarComponent } from '../Nav/NavBar';
import Footer from '../Components/Footre/Footer';
import { ToastContainer } from 'react-toastify';


const MainLayout = () => {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <ToastContainer/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;