import './Logo.less';
import LogoIcon from  "@/assets/images/logo.svg?react"

function Logo(){
    
    return(
        <div className='logo-wrapper'>
            <LogoIcon />
        </div>
    );
}

export default Logo;