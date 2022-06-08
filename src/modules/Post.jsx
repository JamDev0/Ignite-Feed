import Styles from './Post.module.css';

import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";
import { PostMain } from "./PostMain";

export function Post({ ProfilePic, UserName, UserRole, PublishTime, Content, Comments }){
    return(
        <section className={Styles.Post}>
            <time title='Públicado em 31 de maio de 2050' dateTime='2050-05-31 00:00:00' className={Styles.PublishTime}>Públicado há {PublishTime}h</time>
            <PostHeader
             ProfilePic={ProfilePic}
             UserName={UserName}
             UserRole={UserRole}
            />
            <PostMain
             Content={Content}
            //  Resolver isso aqui, como identificar o momento de pular linha e quando saber que é preciso deixar o texto verde, ver a video aula
            />
            
            <PostFooter
             Comments={Comments}
            />
        </section>
    )
}