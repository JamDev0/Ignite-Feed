import { useEffect, useState } from 'react';

import { ThumbsUp, Trash } from 'phosphor-react';

import Styles from './PostComment.module.css';

export function PostComment({Comment, DeleteComment}){
    const [LikesAmount, setLikesAmount] = useState(3);
    const [IsLikePressed, setIsLikePressed] = useState(false);

    useEffect(()=>{
        setLikesAmount(Comment.LikesAmount);
    }, [])
    
    function HandleDeleteComment() {
        DeleteComment(Comment.Id);
    }
    
    return(
        <div className={Styles.Comment}>
            <img src={Comment.ProfilePic} alt='Imagem de perfil do usuário'></img>
            <div className={Styles.Content}>
                {
                    Comment.IsTheCurrentUser ? 
                        <Trash
                         title='Deletar comentário'
                         tabIndex={0}
                         className={Styles.Trash}
                         onClick={HandleDeleteComment}
                        />
                    : null
                }
                <header>

                    {
                        Comment.IsTheCurrentUser ? 
                            <div>
                                <h2>{Comment.UserName}</h2>
                                <span>(você)</span>
                            </div>
                        : 
                            <h2>
                                {Comment.UserName}
                            </h2>
                    }

                    <time
                     title='Públicado em 31 de maio de 2050'
                     dateTime='2050-05-31 00:00:00'
                    >
                        Cerca de {Comment.PublishTime}h
                    </time>

                </header>
                <p>
                    {Comment.Content}
                </p>
            </div>

            <div
             className={Styles.Reactions}
             onClick={()=> {
                 setIsLikePressed(!IsLikePressed);
                 IsLikePressed ? setLikesAmount(LikesAmount - 1) : setLikesAmount(LikesAmount + 1);
                }}
             notfocus={IsLikePressed ? 'true' : 'false'}
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