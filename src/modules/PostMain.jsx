import Styles from './PostMain.module.css';

export function PostMain(){
    return(
        <main className={Styles.Main}>
            <p>
                Fala galeraa 👋
            </p>
            <p>
                Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
            </p>
            <p className={Styles.GreenText}>
                👉 higor.design/doctorcare
            </p>
            <p className={Styles.GreenText}>
                #novoprojeto #nlw #rocketseat
            </p>
        </main>
    )
}