import './header-style.css';
import UserInfo from "../userInfo/UserInfo";
import {logoImage, searchIcon} from "../../images";
import {useEffect, useState} from "react";

export default function Header({ checkSwitcher, switchTheme }){

    const [checkedSwitch, setCheckedSwitch] = useState();

    useEffect(() =>{
        switchTheme === 'Light' ? setCheckedSwitch(false) : setCheckedSwitch(true);
    }, [switchTheme]);

    return(
        <div>
            {
                switchTheme === 'Light' ?
                    (
                        <header className="header__light">
                            <div className="switcher__theme-container">
                                <label className="switcher__theme-block">
                                    <input type="checkbox" className="switcher__theme-checkbox" onChange={checkSwitcher} checked={checkedSwitch || false}/>
                                    <span className="switcher__theme-background"></span>
                                </label>
                            </div>
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
                    )
                    :
                    (
                        <header className="header__dark">
                            <div className="switcher__theme-container">
                                <label className="switcher__theme-block">
                                    <input type="checkbox" className="switcher__theme-checkbox" onChange={checkSwitcher} checked={checkedSwitch || false}/>
                                    <span className="switcher__theme-background"></span>
                                </label>
                            </div>
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
                    )
            }
            <hr/>
        </div>
    )
}
