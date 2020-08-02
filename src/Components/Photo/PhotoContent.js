import React from 'react';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import styles from './styles.module.css';
import { UserContext } from '../../UserStorage';
import PhotoDelete from './PhotoDelete';
import Image from '../Partials/Image';


function PhotoContent({ data, single }) {

    const user = React.useContext(UserContext);
    const { photo, comments } = data;

    return (
        <div className={`${styles.photo} ${single ? styles.single : ''}`}>
            <div className={styles.img}>
                <Image src={photo.src} alt={photo.title} />
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>

                        {user.data && user.data.username === photo.author
                            ? <PhotoDelete id={photo.id} />
                            : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
                        }

                        <span className={styles.visualizacoes}>{photo.acessos}</span>
                    </p>

                    <h1 className="title">
                        <Link to={`/foto/${photo.id}`}>@{photo.title}</Link>
                    </h1>
                    <ul className={styles.attributes}>
                        <li>KG: {photo.peso}</li>
                        <li>Idade: {photo.idade}</li>
                    </ul>
                </div>
            </div>
            <PhotoComments id={photo.id} single={single} comments={comments} />

        </div>
    )
}

export default PhotoContent
