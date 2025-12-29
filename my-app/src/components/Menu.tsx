import { useState } from "react";
import Nav from "./Nav";
import IconClose from '@/assets/images/icon-close.svg?react';
import IconMenu from '@/assets/images/icon-menu.svg?react';
import '../styles/Menu.less';

function Menu(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="menu">
          <button className="menu__button" onClick={() => {setIsOpen(true)}}>
            <IconMenu />
          </button>
          <div className={`menu__boardwrapper ${isOpen? "menu__boardwrapper--open": ""}`}>
            <div className={`menu__board`}>
                <div className="menu__closeboard">
                  <button className="menu__close" onClick={() => setIsOpen(false)}>
                    <IconClose />
                  </button>
                </div>
                <Nav />
            </div>
          </div>
        </div>
    );
}

export default Menu;