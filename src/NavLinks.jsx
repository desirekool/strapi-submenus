import sublinks from "./data";
import { useGlobalContext } from "./Context";
const NavLinks = () => {
    const {setPageId} = useGlobalContext();
    return (
        <nav>
            <div className='nav-links'>
                {sublinks.map(({pageId, page}) => 
                    <button 
                        key={pageId} 
                        className="nav-link"
                        onMouseEnter={() => setPageId(pageId)}
                    >{page}</button>)
                }            
            </div>
        </nav> 
    );
};

export default NavLinks;