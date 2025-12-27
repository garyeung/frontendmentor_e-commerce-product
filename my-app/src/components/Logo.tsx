import './Logo.less';

function Logo({logoUrl}: {logoUrl:string}){
    
    return(
        <img src={logoUrl} alt="logo" className="logo"/>
    );
}

export default Logo;