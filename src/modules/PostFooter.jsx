import { useState } from 'react';
import { PostComment } from './PostComment';

import Styles from './PostFooter.module.css';


export function PostFooter({ Comments }) {
    const [IsCreatingComment, setIsCreatingComment] = useState(false);
    const [CurrentComments, setCurrentComments] = useState(Comments);
    const [TextareaValue, setTextareaValue] = useState('');

    console.log(Comments)

    function HandleCreateNewComment(){
        event.preventDefault();

        if(event.submitter.name === "Cancel") {
            setIsCreatingComment(!IsCreatingComment);
            setTextareaValue('');
        } else if(event.submitter.name === "Publish") {
            setCurrentComments([...CurrentComments, {
                UserName: 'Juan Garcia',
                ProfilePic: 'https://avatars.githubusercontent.com/u/61752887?v=4',
                IsTheCurrentUser: true,
                PublishTime: 0,
                Content: TextareaValue,
                LikesAmount: 0,
                Id: CurrentComments.length + 1,
            }]);

            setTextareaValue('');
        }
    }

    function DeleteComment(CommentId){
        setCurrentComments(CurrentComments.filter(element => element.Id !== CommentId));
    }

    return(
        <footer className={Styles.Footer}>
            <form
             onSubmit={HandleCreateNewComment}
            >
                <h2>Deixe seu feedback</h2>
                <textarea
                 name='Textarea'
                 placeholder='Escreva um comentário...'
                 value={TextareaValue}
                 onChange={(event) => {setTextareaValue(event.target.value)}}
                 onFocus={ () => !IsCreatingComment ? setIsCreatingComment(!IsCreatingComment) : null}
                >

                </textarea>

                {
                    IsCreatingComment
                    ? (
                        <div className={Styles.Buttons}>
                            <button
                            name='Publish'
                            className={Styles.PublishBtn}
                            >
                                Publicar
                            </button>
                            <button
                            name='Cancel'
                            className={Styles.CancelBtn}
                            >
                                Cancelar
                            </button>
                        </div>
                    )
                    : null
                }
            </form>

            {
                CurrentComments.length > 0
                ? CurrentComments.map((element) => {
                    console.log(element)
                    return (<PostComment
                     key={element.Id}
                     Comment={element}
                     DeleteComment={DeleteComment}
                    />)
                })
                : null
            }

        </footer>
    )
}