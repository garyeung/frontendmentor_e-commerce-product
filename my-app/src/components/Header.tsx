import '../styles/Hearder.less';
import Avatar from './atoms/Avatar';
import Logo from './Logo';
import avatarUrl from '../assets/images/image-avatar.png';
import logoUrl from '../assets/images/logo.svg';
import Nav from './Nav';
import Menu from './Menu';
import Cart from './Cart';

function Header(){

    return (
        <header role='header' className="header">
            <div className='header__left header__item'>
                <Menu />
                <Logo logoUrl={logoUrl}/>
                <Nav />
            </div>
            <div className='header__right header__item'>
                <Cart />
               <Avatar avatarUrl={avatarUrl}></Avatar>

            </div>
        </header>
    );
}
export default Header;