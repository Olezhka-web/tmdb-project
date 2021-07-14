import {Fragment} from "react";
import './userInfo-style.css';
import {userPhoto} from "../../images";

export default function UserInfo(){

    return(
        <Fragment>
            <div className="user__info-image">
                <img src={userPhoto} alt="user_photo" className="user__photo"/>
            </div>
            <div className="user__info-name">
                Welcome John
            </div>
        </Fragment>
    )
}
