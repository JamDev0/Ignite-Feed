import Styles from './Feed.module.css';
import { Post } from './Post';


export function Feed(){
    return(
        <section className={Styles.Feed}>
            <Post
             PublishTime={1}
             ProfilePic={'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50'}
             UserName={'Higor Penumbra'}
             UserRole={'Dev Front-End'}
             Comments={[]}
            />

            <Post
             PublishTime={2}
             ProfilePic={'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=60'}
             UserName={'Leonard Maverik'}
             UserRole={'Dev Back-End'}
             Comments={[]}
            />
        </section>
    )    
}