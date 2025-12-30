import { useRef, useState } from "react";
import Nav from "@/components/Nav";
import IconClose from '@/assets/images/icon-close.svg?react';
import IconMenu from '@/assets/images/icon-menu.svg?react';
import '@/components/uis/Menu.less';
import { useClickOutside } from "@/hooks/useClickOutside";

function Menu(){
    const [open, setOpen] = useState(false);
    const menuBoardRef = useRef<HTMLDivElement>(null);

    useClickOutside(menuBoardRef, () => setOpen(false));

    return (
        <div className="menu">
          <button className="menu__button" onClick={() => {setOpen(true)}}>
            <IconMenu />
          </button>
          <div className={`menu__boardwrapper ${open? "menu__boardwrapper--open": ""}`}>
            <div className={`menu__board`} ref={menuBoardRef}>
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