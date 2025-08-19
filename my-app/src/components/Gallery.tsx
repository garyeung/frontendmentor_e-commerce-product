
import { ActionType } from '../service';
import '../styles/Gallery.less';
import iconNext from '../assets/images/icon-next.svg';
import iconNextActive from '../assets/images/icon-next-active.svg'
import iconPreActive from '../assets/images/icon-previous-active.svg';
import iconPre from '../assets/images/icon-previous.svg';
import iconClose from '../assets/images/icon-close-light.svg';
import iconCloseActive from '../assets/images/icon-close-active.svg';

import { useState } from 'react';

export interface GalleryProps {
pictures: string[], active:number, pushActive: (n:number) => void,
productName: string,
}

function Gallery({pictures, active, pushActive, productName}:GalleryProps) {
    const [openLightbox, setOpenLightbox] = useState(false);
    
    const iconNexts = [iconNext, iconNextActive];
    const iconCloses = [iconClose, iconCloseActive];
    const iconPres = [iconPre, iconPreActive];

    const [nextUrl, setnextUrl] = useState(iconNexts[0]);
    const [closeUrl, setCloseUrl] = useState(iconCloses[0]);
    const [preUrl, setPreUrl] = useState(iconPres[0]);

    const thumbnails = pictures.map((picture, index) => {
        return <Thumbnail url={picture} key={index} name={'product'+index} selected={pushActive} id={index} active={active}/>
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
    const handlePre = handleIconActive(setPreUrl, iconPres);
    const handleNext = handleIconActive(setnextUrl, iconNexts);

    const mainImg = pictures[active];
    const lightboxClose =   <div className='lightbox__closeboard'>
                <button className='lightbox__closebutton' onClick={()=> setOpenLightbox(false)} {...handleClose}><img src={closeUrl} alt='close'/></button>
            </div>

    return (
        <div className={"gallery " + (openLightbox? "lightbox": "")}>
            {openLightbox? lightboxClose: <></>}
            <div className="gallery__main">
                <div className='gallery__buttons'>
                    <button className='gallery__pre gallery__button' onClick={()=>handleActive(ActionType.reduce)} {...handlePre}><img alt='previous' src={preUrl}/></button>
                    <button className='garrlery__next gallery__button' onClick={() => handleActive(ActionType.add)}{...handleNext}><img alt='next' src={nextUrl} /></button>
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

function Thumbnail({selected, url, name, id, active}: {selected: (n: number)=> void, url: string, name: string ,id: number, active: number}) {

    return (
        <a className={"thumbnail " +(active === id ? "thumbnail--active": "")} onClick={()=>selected(id)}>
            <img src={url} alt={name}/>
        </a>
    )
}

export default Gallery;