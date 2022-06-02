import EditIcon from '../../public/images/EditIcon.svg';

import Styles from './SideBar.module.css'

export function SideBar(){
    return(
        <div className={Styles.SideBar}>
            <div className={Styles.ImgDiv}>

            </div>
            <div className={Styles.ContentDiv}>
                <div className={Styles.UserAvatar}>
                    <img src='https://avatars.githubusercontent.com/u/61752887?v=4'></img>
                </div>
                <h2>Juan Garcia</h2>
                <span>Ui Designer</span>
                <footer>
                    <a href='#'>
                        <img src={EditIcon}></img>
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </div>
    )
}