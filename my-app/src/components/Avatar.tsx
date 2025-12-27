import { useState } from 'react';
import './Avatar.less';


function Avatar({avatarUrl}:{avatarUrl: string}){
    const [active, setActive]= useState(false);

    return(
        <div className={`avatar ${active? 'avatar--active': ""}`} onMouseDown={()=>setActive(true)} onMouseUp={()=>setActive(false)}> 
            <img src={avatarUrl} alt="avatar"/>
        </div>
    )
}

export default Avatar;