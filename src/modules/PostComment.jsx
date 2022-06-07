import { useState } from 'react';

import { ThumbsUp, Trash } from 'phosphor-react';

import Styles from './PostComment.module.css';

export function PostComment({ProfilePic, UserName, IsTheCurrentUser, PublishTime, Content}){
    const [LikesAmount, setLikesAmount] = useState(3);
    const [IsLikePressed, setIsLikePressed] = useState(false)

    return(
        <div className={Styles.Comment}>
            <img src={ProfilePic}></img>
            <div className={Styles.Content}>
                {
                    IsTheCurrentUser
                    ? <Trash className={Styles.Trash}/>
                    : null
                }
                <header>
                    {
                        IsTheCurrentUser 
                        ? (
                            <div>
                                <h2>{UserName}</h2>
                                <span>(você)</span>
                            </div>
                        )
                        : <h2>{UserName}</h2>
                    }
                    <span>Cerca de {PublishTime}h</span>
                </header>
                <p>
                    {Content}
                </p>
            </div>
            <div
             className={Styles.Reactions}
             onClick={()=> {setIsLikePressed(!IsLikePressed); IsLikePressed ? setLikesAmount(LikesAmount - 1) : setLikesAmount(LikesAmount + 1)}}
             notFocus={IsLikePressed ? 'true' : 'false'}
            >
                    <ThumbsUp
                     weight='bold'
                     style={
                        IsLikePressed ? {
                           color: 'var(--green-500)',
                        } : null
                     } 
                    />
                    <span
                     style={
                        IsLikePressed ? {
                           color: 'var(--green-500)',
                        } : null
                     }
                    >
                        Aplaudir • {LikesAmount}
                    </span>
            </div>
        </div>
    )
}