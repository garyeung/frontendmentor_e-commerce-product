import { useState } from "react";
import '../styles/Nav.less';

export interface Navlink {
    name: string,
    url: string
}

function Nav(){
    const navdata: Navlink[] = [
        {
            name: 'collections',
            url: '#' 
        },
        {
            name: 'men',
            url: '#'
        },
        {
            name: 'women',
            url: '#'
        },
        {
            name: 'about',
            url: '#'
        },
        {
            name: 'contact',
            url: '#'
        },
    ];

    const lis = navdata.map((item, index) => {
        return <NavLink url={item.url} name={item.name} key={item.name+index}/>;
    })

    return (
        <nav role="nav" className="nav">
            {lis}
        </nav>
    );
}

function NavLink({name, url}: {name: string, url: string}){
    const [cliking, setClicking]= useState(false);
    return (
        <a className={`nav__link ${cliking? 'nav__link--active': ""}`}  href={url} onMouseDown={() => setClicking(true)} onMouseUp={() => setClicking(false)}>{name}</a>
    )
}

export default Nav;

