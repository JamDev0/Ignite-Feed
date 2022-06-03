import Styles from './Feed.module.css';

import { FeedHeader } from './FeedHeader';
import { FeedMain } from './FeedMain';

export function Feed(){
    return(
        <section className={Styles.Feed}>
            <span className={Styles.PublishTime}>Públicado à 1h</span>
            <section className={Styles.Post}>
                <FeedHeader/>
                <FeedMain/>
                <footer>
                    <h2>Deixe seu feedback</h2>
                    <textarea placeholder='Escreva um comentário...'>

                    </textarea>
                    <button>Publicar</button>
                </footer>
            </section>
        </section>
    )    
}