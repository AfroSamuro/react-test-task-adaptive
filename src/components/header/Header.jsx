import AdaptiveHeader from "../adaptive/AdaptiveHeader/AdaptiveHeader";
import logo from '../../images/companyLogo.svg'
import profilePhoto from '../../images/profilePhoto.svg'
import searchLogo from '../../images/searchLogo.svg'
import profile from '../../images/Profile-stroke.svg'


export default function Header() {


    return (
        <header className="header">
            <AdaptiveHeader>
                <div className="header__content">

                    <div className='content__logo'>
                        <img className="logo__img" src={logo} alt="logo" />
                    </div>

                    <div className="content__searchBar">
                        <div className='searchBar__search'>
                            <div className="search__glass">
                                <img className="glass__img" src={searchLogo} alt="glass" />
                            </div>
                            <input className='search__line' type="text" placeholder='Найти...' />
                        </div>
                    </div>

                    <div className="content__profile">
                        <p className='profile__name'>Константин</p>
                        <div className='profile__photo'>
                            <img className="photo__person" src={profilePhoto} alt="profile-photo" />
                            <img className="photo__incognito" src={profile} alt="profile" />
                        </div>
                    </div>
                </div>

                

            </AdaptiveHeader>
        </header>
    )
}