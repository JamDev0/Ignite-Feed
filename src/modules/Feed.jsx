import { useEffect, useState } from 'react';
import Styles from './Feed.module.css';
import { Post } from './Post';


export function Feed(){
    const [Comments, setComments] = useState();
    const [Posts, setPosts] = useState();

    async function GetComments(URL) {
        return fetch(URL).then(response => response.json()).then(data => {return data});
    }

    async function GetPosts(URL) {
        return fetch(URL).then(response => response.json()).then(data => {return data});
    }

    useEffect(()=>{
        GetComments('../Jsons/Comments.json').then(data => setComments(data));
        GetPosts('../Jsons/Posts.json').then(data => setPosts(data));
    }, [])

    console.log(Posts)

    return(
        <section className={Styles.Feed}>
            {
                Posts?.map(({ Id, Content }) => (
                    <Post
                     key={Id}
                     PublishTime={Content.PublishTime}
                     ProfilePic={Content.ProfilePic}
                     UserName={Content.UserName}
                     UserRole={Content.UserRole}
                     Comments={Comments?.find(element => element.Id == Content.CommentId)?.Content.length > 0 ? Comments.find(element => element.Id == Content.CommentId)?.Content : []}
                     Content={Content.Content}
                    />
                ))
            }
        </section>
    )    
}