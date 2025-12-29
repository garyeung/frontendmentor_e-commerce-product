import { useState } from "react";
import Nav from "./Nav";
import IconClose from '@/assets/images/icon-close.svg?react';
import IconMenu from '@/assets/images/icon-menu.svg?react';
import '../styles/Menu.less';

function Menu(){
    const [open, setOpen] = useState(false);

    return (
        <div className="menu">
          <button className="menu__button" onClick={() => {setOpen(true)}}>
            <IconMenu />
          </button>
          <div className={`menu__boardwrapper ${open? "menu__boardwrapper--open": ""}`}>
            <div className={`menu__board`}>
                <div className="menu__closeboard">
                  <button className="menu__close" onClick={() => setOpen(false)}>
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