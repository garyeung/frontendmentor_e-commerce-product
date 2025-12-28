
import { ActionType } from '@/service';
import './Gallery.less';
import IconNext from '@/assets/images/icon-next.svg?react';
import IconNextActive from '@/assets/images/icon-next-active.svg?react'
import IconPreActive from '@/assets/images/icon-previous-active.svg?react';
import IconPre from '@/assets/images/icon-previous.svg?react';
import iconClose from '@/assets/images/icon-close-light.svg';
import iconCloseActive from '@/assets/images/icon-close-active.svg';

import { useState } from 'react';
import Thumbnail from './Thumbnail';
import Button from './Button';

export interface GalleryProps {
pictures: string[], active:number, pushActive: (n:number) => void,
productName: string,
}

function Gallery({pictures, active, pushActive, productName}:GalleryProps) {
    const [openLightbox, setOpenLightbox] = useState(false);
    
    const iconCloses = [iconClose, iconCloseActive];

    const [closeUrl, setCloseUrl] = useState(iconCloses[0]);

    const thumbnails = pictures.map((picture, index) => {
        return <Thumbnail currentPath={picture} key={productName + index} name={productName+index} handleCurrent={()=> pushActive(index)} active={active} current={index}/>
    })

    const handleActive = (action: ActionType) =>  {
        if(action === ActionType.add){
            if(active < pictures.length-1){
                pushActive(active+1);
            }
        }
        else if(action === ActionType.reduce){
            if(active > 0){
                pushActive(active-1);
            }
        }
    }

    const handleIconActive = (setActive:React.Dispatch<React.SetStateAction<string>>, arr: string[]) => {
        return {
            onMouseDown: () => {
                setActive(arr[1]);
            },
            onMouseUp: ()=> {
                setActive(arr[0])
            }
        }
    }
    const handleClose = handleIconActive(setCloseUrl, iconCloses)

    const mainImg = pictures[active];
    const lightboxClose =   <div className='lightbox__closeboard'>
                <button className='lightbox__closebutton' onClick={()=> setOpenLightbox(false)} {...handleClose}><img src={closeUrl} alt='close'/></button>
            </div>

    return (
        <div className={"gallery " + (openLightbox? "lightbox": "")}>
            {openLightbox? lightboxClose: <></>}
            <div className="gallery__main">
                <div className='gallery__buttons'>
                    <Button 
                    handlePre={() => handleActive(ActionType.reduce)} 
                    activeIcon={<IconPreActive/>} 
                    primaryIcon={<IconPre/>}
                    />
                    <Button 
                    handlePre={() => handleActive(ActionType.add)} 
                    activeIcon={<IconNextActive/>} primaryIcon={<IconNext/>}/>
                </div>
                <a className="gallery__mainimg"onClick={()=>{setOpenLightbox(true)}}>
                    <img src={mainImg} alt={productName}/>
                </a>
            </div>
            <div className="gallery__thumbnails">
                {thumbnails}
            </div>
        </div>
    )
}

export default Gallery;