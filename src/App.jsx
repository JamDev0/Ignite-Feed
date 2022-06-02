import { Header } from "./modules/Header";
import { SideBar } from "./modules/SideBar";

import Styles from './index.module.css';
import { Feed } from "./modules/Feed";

export function App(){
    return(
        <>
            <Header/>
            <section className={Styles.Body}>
                <SideBar/>
                <Feed/>
            </section>
        </>
    )
}