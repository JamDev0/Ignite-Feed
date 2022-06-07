import Styles from './PostHeader.module.css'

import { ProfileImage } from './ProfileImage';

export function PostHeader({ ProfilePic, UserName, UserRole }){
    return(
        <header className={Styles.Header}>
            <ProfileImage Image={ProfilePic}/>
            <h2>{UserName}</h2>
            <span>{UserRole}</span>
        </header>
    )
}