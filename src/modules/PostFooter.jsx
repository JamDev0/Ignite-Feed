import { useState } from 'react';
import { PostComment } from './PostComment';

import Styles from './PostFooter.module.css';

export function PostFooter({ Comments }) {
    const [IsCreatingComment, setIsCreatingComment] = useState(false);
    return(
        <footer className={Styles.Footer}>
            <h2>Deixe seu feedback</h2>
            <textarea
             placeholder='Escreva um comentário...'
             onFocus={ () => !IsCreatingComment ? setIsCreatingComment(!IsCreatingComment) : null}
            >

            </textarea>

            {
                IsCreatingComment
                ? (
                    <div className={Styles.Buttons}>
                        <button className={Styles.PublishBtn}>Publicar</button>
                        <button
                         onClick={ () => setIsCreatingComment(!IsCreatingComment)}
                         className={Styles.CancelBtn}
                        >
                            Cancelar
                        </button>
                    </div>
                )
                : null
            }

            {/* {
                Comments.length > 0
                ? <h1>Opa</h1>
                : null
            } */}

            <PostComment
             ProfilePic={'https://avatars.githubusercontent.com/u/61752887?v=4'}
             UserName={'Juan Garcia'}
             IsTheCurrentUser={true}
             PublishTime={3}
             Content={'Muito bom Higor, parabéns!! 👏👏'}
            />

        </footer>
    )
}