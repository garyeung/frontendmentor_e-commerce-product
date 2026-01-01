import { NavLink } from "react-router";
import '@/components/atoms/Nav.less';
import { routes } from "@/routes";

function Nav(){
    const lis = routes.map((item, index) => {
        return (
            <NavLink
                to={item.path}
                className={({ isActive }) =>
                    `nav__link ${isActive ? 'nav__link--active' : ''}`
                }
                key={item.name+index}
            >
                {item.name}
            </NavLink>
        );
    })

    return (
        <nav className="nav">
            {lis}
        </nav>
    );
}

export default Nav;

