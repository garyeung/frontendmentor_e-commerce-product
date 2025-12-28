import { useState } from "react"

interface Props {
    handlePre: () => void
    activeIcon: JSX.Element
    primaryIcon: JSX.Element
}
const Button = (props: Props) => {
    const [active, setActive] = useState(false);

    return (
        <button 
        className="gallery__button"
        onClick={props.handlePre}
        onMouseUp={()=>setActive(false)}
        onMouseDown={()=>setActive(true)}
        >
            {
                active? props.activeIcon: props.primaryIcon
            }            
        </button>
    )
}

export default Button;