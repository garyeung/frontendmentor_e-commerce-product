interface Props {
    currentPath: string,
    active: number,
    current: number,
    name: string,
    handleCurrent: () => void
}

function Thumbnail({currentPath,active, current, name, handleCurrent}: Props) {

    return (
        <button className={"thumbnail " +(active === current ? "thumbnail--active": "")} onClick={handleCurrent}>
            <img src={currentPath} alt={name}/>
        </button>
    )
}

export default Thumbnail;