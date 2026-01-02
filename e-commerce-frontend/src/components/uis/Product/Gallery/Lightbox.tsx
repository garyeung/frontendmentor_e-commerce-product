import IconNext from '@/assets/images/icon-next.svg?react';
import IconNextActive from '@/assets/images/icon-next-active.svg?react'
import IconPreActive from '@/assets/images/icon-previous-active.svg?react';
import IconPre from '@/assets/images/icon-previous.svg?react';
import IconClose from '@/assets/images/icon-close-light.svg?react';
import IconCloseActive from '@/assets/images/icon-close-active.svg?react';
import Button from "./Button";
import Thumbnail from "./Thumbnail";
import { useRef, useState } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';



interface Props {
    pictures: string[],
    productName: string,
    startIndex: number,
    handleClose: () => void,
}

const Lightbox = ({pictures, productName, startIndex, handleClose}:Props) => {
    const [activePic, setActivePic] = useState(startIndex);

    const lightboxRef = useRef<HTMLDivElement>(null);

    useClickOutside(lightboxRef, () => {
        handleClose();
    });

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
        return <Thumbnail currentPath={picture} key={productName + current} name={productName+current} handleCurrent={() => setActivePic(current)} active={activePic} current={current}/>
    })

    return (
        <div className="lightbox__wrapper">
          <div className="lightbox" ref={lightboxRef}>
              <div className="lightbox__closeBoard">
                <Button onClick={handleClose} activeIcon={<IconCloseActive/>} primaryIcon={<IconClose/>}
                label='Close lightbox'
                />
              </div>
              <div className="lightbox__main">
                  <div className="lightbox__buttons">
                    <Button onClick={() => handleActivePic("pre")} activeIcon={<IconPreActive/>} primaryIcon={<IconPre/>}
                    label='Previous image'
                    />
                    <Button onClick={() => handleActivePic("next")} activeIcon={<IconNextActive/>} primaryIcon={<IconNext/>}
                    label='Next image'
                    />
                  </div>
                  <div className="lightbox__mainPic">
                      <img src={pictures[activePic]} alt={productName} />
                  </div>
              </div>
              <div className="lightbox__thumbnails">
                {thumbnails}
              </div>
          </div>
        </div>
    )
}

export default Lightbox;