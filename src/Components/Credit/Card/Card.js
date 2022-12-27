import styles from './Card.module.css';

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.cardName}>{props.name}</div>
            <div className={styles.cardDesg}>{props.desg}</div>
        </div>
    );
}

export default Card;