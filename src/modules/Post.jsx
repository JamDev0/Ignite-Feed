import Styles from './Post.module.css';

import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";
import { PostMain } from "./PostMain";

export function Post({ ProfilePic, UserName, UserRole, PublishTime, Content, Comments }){
    return(
        <section className={Styles.Post}>
            <span className={Styles.PublishTime}>Públicado há {PublishTime}h</span>
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