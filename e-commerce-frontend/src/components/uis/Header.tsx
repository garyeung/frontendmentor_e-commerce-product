import '@/components/uis/Hearder.less';
import Avatar from '@/components/atoms/Avatar';
import Logo from '@/components/atoms/Logo';
import avatarUrl from '@/assets/images/image-avatar.png';
import Nav from '@/components/atoms/Nav';
import Menu from '@/components/uis/Menu';
import Cart from '@/components/uis/Cart';

function Header(){

    return (
        <header className="header">
            <div className='header__item'>
                <Menu />
                <Logo/>
                <Nav />
            </div>
            <div className='header__item header__item--end'>
                <Cart />
               <Avatar avatarUrl={avatarUrl}></Avatar>

            </div>
        </header>
    );
}
export default Header;