
import './index.less';
import IconNext from '@/assets/images/icon-next.svg?react';
import IconNextActive from '@/assets/images/icon-next-active.svg?react'
import IconPreActive from '@/assets/images/icon-previous-active.svg?react';
import IconPre from '@/assets/images/icon-previous.svg?react';

import { useState } from 'react';
import Thumbnail from './Thumbnail';
import Button from './Button';
import Lightbox from './Lightbox';

export interface Props {
    pictures: string[],
    productName: string,
}

function Gallery({pictures, productName}:Props) {
    const [activePic, setActivePic] = useState(0);
    const [activeLightbox, setActiveLightbox] = useState(false);

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
    
    const thumbnails = pictures.map((picture, current) => {
        return <Thumbnail currentPath={picture} key={productName + current} name={productName+current} handleCurrent={()=> setActivePic(current)} active={activePic} current={current}/>
    })

    return (<>
        <div className="gallery">
            <div className="gallery__main">
                <div className='gallery__buttons'>
                    <Button 
                    onClick={() => handleActivePic("pre")} 
                    activeIcon={<IconPreActive/>} 
                    primaryIcon={<IconPre/>}
                    label="Previous image"
                    />
                    <Button 
                    onClick={() => handleActivePic("next")} 
                    activeIcon={<IconNextActive/>} 
                    primaryIcon={<IconNext/>}
                    label="Next image"
                    />
                </div>
                <button 
                className="gallery__mainPic"
                onClick={()=>setActiveLightbox(true)}
                aria-label="View product image in lightbox"
                >
                    <img src={pictures[activePic]} alt={productName}/>
                </button>
            </div>
            <div className="gallery__thumbnails">
                {thumbnails}
            </div>
        </div>
        {activeLightbox && 
        <Lightbox 
        pictures={pictures}
        productName={productName}
        startIndex={activePic}
        handleClose={() => setActiveLightbox(false)}
        />}
    </>)
}

export default Gallery;