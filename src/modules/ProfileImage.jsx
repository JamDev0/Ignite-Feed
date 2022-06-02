import Styles from './ProfileImage.module.css';

export function ProfileImage({ Image, style }){
    return(
        <div style={style} className={Styles.UserAvatar}>
            <img src={Image}></img>
        </div>
    )
}