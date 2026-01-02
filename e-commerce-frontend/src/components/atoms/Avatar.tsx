import { useRef, useState } from 'react';
import './Avatar.less';
import { useClickOutside } from '@/hooks/useClickOutside';


function Avatar({avatarUrl}:{avatarUrl: string}){
    const [active, setActive]= useState(false);
    const avatarRef = useRef<HTMLButtonElement>(null)

    useClickOutside(avatarRef, ()=> {
        setActive(false);
    })

    const handleClick = () =>{
        setActive(!active);
    }

    

    return(
        <button 
        ref={avatarRef}
        className={`avatar ${active? 'avatar--active': ""}`}
        onClick={handleClick}
         > 
            <img src={avatarUrl} alt="avatar"/>
        </button>
    )
}

export default Avatar;