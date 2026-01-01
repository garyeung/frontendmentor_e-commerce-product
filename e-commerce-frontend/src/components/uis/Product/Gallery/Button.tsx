import { useState } from "react"

interface Props {
    onClick: () => void
    activeIcon: JSX.Element
    primaryIcon: JSX.Element
}
const Button = (props: Props) => {
    const [active, setActive] = useState(false);

    return (
        <button 
        className="gallery__button"
        onClick={props.onClick}
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