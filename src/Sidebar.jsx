import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import sublinks from './data';
const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : null}`}>
            <div className='sideebar-container'>
                <button className="close-btn" onClick={closeSidebar}><FaTimes /></button>
                <div className="sidebar-links">
                    {sublinks.map(( {links, page, pageId} ) => {
                        return <article key={pageId}>
                            <h4>{page}</h4>
                            <div className="sidebar-sublinks">
                                {links.map(({ url, icon, label, id }) => <a key={id} href={url}>{icon} {label}</a>)}                                
                            </div>
                        </article>
                    })}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
