
import './Gallery.less';
import IconNext from '@/assets/images/icon-next.svg?react';
import IconNextActive from '@/assets/images/icon-next-active.svg?react'
import IconPreActive from '@/assets/images/icon-previous-active.svg?react';
import IconPre from '@/assets/images/icon-previous.svg?react';

import { useState } from 'react';
import Thumbnail from './Thumbnail';
import Button from './Button';

export interface Props {
    pictures: string[],
    productName: string,
}

function Gallery({pictures, productName}:Props) {
    const [activePic, setActivePic] = useState(0);

    
    const thumbnails = pictures.map((picture, index) => {
        return <Thumbnail currentPath={picture} key={productName + index} name={productName+index} handleCurrent={()=> setActivePic(index)} active={activePic} current={index}/>
    })

    const handleActivePic = (action: "pre" | "next") =>  {
        if(action === "next"){
            if(activePic < pictures.length-1){
                setActivePic(activePic+1);
            }
        }
        else {
            if(activePic > 0){
                setActivePic(activePic-1);
            }
        }
    }



    return (<>
        <div className="gallery">
            <div className="gallery__main">
                <div className='gallery__buttons'>
                    <Button 
                    handlePre={() => handleActivePic("pre")} 
                    activeIcon={<IconPreActive/>} 
                    primaryIcon={<IconPre/>}
                    />
                    <Button 
                    handlePre={() => handleActivePic("next")} 
                    activeIcon={<IconNextActive/>} primaryIcon={<IconNext/>}/>
                </div>
                <div className="gallery__mainPic"onClick={()=>{}}>
                    <img src={pictures[activePic]} alt={productName}/>
                </div>
            </div>
            <div className="gallery__thumbnails">
                {thumbnails}
            </div>
        </div>
    </>)
}

export default Gallery;