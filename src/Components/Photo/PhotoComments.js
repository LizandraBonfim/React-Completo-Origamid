import React, { useEffect } from 'react';
import { UserContext } from '../../UserStorage';
import PhotoCommentsForm from './PhotoCommentsForm'
import styles from './styles.module.css';


function PhotoComments(props) {
    const { login } = React.useContext(UserContext);

    const commentsSection = React.useRef();

    const [comments, setComments] = React.useState(() => props.comments);

    useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments]);

    return (
        <>
            <ul ref={commentsSection}
                className={`${styles.comments} ${props.single ? styles.single : ''}`}
            >
                {comments.map(comment => (
                    <li key={comment.comment_ID}>
                        <b>{comment.comment_author}: </b>
                        <span>{comment.comment_content}</span>
                    </li>
                ))}
            </ul>
            {login && <PhotoCommentsForm id={props.id} single={props.single}
                setComments={setComments} />}
        </>
    )
}

export default PhotoComments
