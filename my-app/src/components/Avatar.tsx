import { useState } from 'react';
import './Avatar.less';


function Avatar({avatarUrl}:{avatarUrl: string}){
    const [active, setActive]= useState(false);

    const handleClick = () =>{
        setActive(!active);
    }

    return(
        <div 
        className={`avatar ${active? 'avatar--active': ""}`}
        onClick={handleClick}
         > 
            <img src={avatarUrl} alt="avatar"/>
        </div>
    )
}

export default Avatar;