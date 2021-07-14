import './header-style.css';
import UserInfo from "../userInfo/UserInfo";
import {logoImage, searchIcon} from "../../images";

export default function Header(){

    return(
        <div>
            <header className="header">
                <div className="wrapper">
                    <div className="header__logo">
                        <img src={logoImage} alt="logo" className="logo"/>
                    </div>
                    <div className="header__burger">
                        <button className="burger__button" type={"button"}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className="header__search">
                        <input type="text" className="header__search-form"/>
                        <button className="search__icon-button"><img className="search-icon" src={searchIcon} alt="search-icon"/></button>
                    </div>
                    <div className="header__user-info">
                        <UserInfo/>
                    </div>
                </div>
            </header>
        </div>
    )
}
