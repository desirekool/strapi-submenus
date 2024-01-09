import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import NavLinks from './NavLinks';

const Navbar = () => {
    const {openSidebar, setPageId} = useGlobalContext();
    const handleSubmenu = (event) => {
        if (!event.target.classList.contains('nav-link')) {
            setPageId(null);
        }
    };

    return (
        <nav onMouseOver={handleSubmenu}>
            <div className='nav-center'>
                <h3 className='logo'>Strapi</h3>
                <button className='toggle-btn' onClick={openSidebar}><FaBars /></button>
            </div>
            <NavLinks />
        </nav> 
    );
};

export default Navbar;
