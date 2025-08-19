import { useState } from "react";
import Nav from "./Nav";
import closeUrl from '../assets/images/icon-close.svg';
import menuUrl from '../assets/images/icon-menu.svg';
import '../styles/Menu.less';

function Menu(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <button className="menu__button" onClick={() => {setIsOpen(true)}}>
            <img src={menuUrl} alt="menu" />
        </button>
        <div className={`menu__board ${isOpen? "menu__board--open": ""}`}>
            <div className="menu__closeboard">
            <button className="menu__close" onClick={() => setIsOpen(false)}>
                <img src={closeUrl} alt="close"/>
            </button>
            </div>
            <Nav />
            <div className="menu__grayboard"></div>
        </div>
        </>
    );
}

export default Menu;