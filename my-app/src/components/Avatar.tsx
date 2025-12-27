import { useState } from 'react';
import './Avatar.less';


function Avatar({avatarUrl}:{avatarUrl: string}){
    const [cliking, setClicking]= useState(false);

    return(
        <a href="#" className={`avatar ${cliking? 'avatar--active': ""}`} onMouseDown={()=>setClicking(true)} onMouseUp={()=>setClicking(false)}> 
            <img src={avatarUrl} alt="avatar"/>
        </a>
    )
}

export default Avatar;