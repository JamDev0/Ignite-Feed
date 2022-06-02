import Styles from './Feed.module.css';

import { ProfileImage } from './ProfileImage';

export function Feed(){
    return(
        <section className={Styles.Feed}>
            <span className={Styles.PublishTime}>Públicado à 1h</span>
            <section className={Styles.Post}>
                <header>
                    <ProfileImage Image='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50'/>
                    <h2>Higor Penumbra</h2>
                    <span>Dev front-end</span>
                </header>
                <main>
                    <p>
                        Fala galeraa 👋
                    </p>
                    <p>
                        Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                    </p>
                </main>
                <footer>

                </footer>
            </section>
        </section>
    )    
}