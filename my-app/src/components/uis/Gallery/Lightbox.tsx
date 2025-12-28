import IconNext from '@/assets/images/icon-next.svg?react';
import IconNextActive from '@/assets/images/icon-next-active.svg?react'
import IconPreActive from '@/assets/images/icon-previous-active.svg?react';
import IconPre from '@/assets/images/icon-previous.svg?react';
import IconClose from '@/assets/images/icon-close-light.svg?react';
import IconCloseActive from '@/assets/images/icon-close-active.svg?react';
import Button from "./Button";
import Thumbnail from "./Thumbnail";
import { useState } from 'react';



interface Props {
    pictures: string[],
    productName: string,
    startIndex: number,
    handleClose: () => void,
}

const Lightbox = ({pictures, productName, startIndex, handleClose}:Props) => {
    const [activePic, setActivePic] = useState(startIndex);

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
          <div className="lightbox">
              <div className="lightbox__closeBoard">
                <Button onClick={handleClose} activeIcon={<IconCloseActive/>} primaryIcon={<IconClose/>}/>
              </div>
              <div className="lightbox__main">
                  <div className="lightbox__buttons">
                    <Button onClick={() => handleActivePic("pre")} activeIcon={<IconPreActive/>} primaryIcon={<IconPre/>}/>
                    <Button onClick={() => handleActivePic("next")} activeIcon={<IconNextActive/>} primaryIcon={<IconNext/>}/>
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