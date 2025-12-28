interface Props {
    currentPath: string,
    active: string,
    current: string,
    name: string,
    handleCurrent: () => void
}

function Thumbnail({currentPath,active, current, name, handleCurrent}: Props) {

    return (
        <div className={"thumbnail " +(active === current ? "thumbnail--active": "")} onClick={handleCurrent}>
            <img src={currentPath} alt={name}/>
        </div>
    )
}

export default Thumbnail;