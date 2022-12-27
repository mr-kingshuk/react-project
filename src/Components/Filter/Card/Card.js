import styles from './Card.module.css';
import { motion, AnimatePresence } from 'framer-motion';

function Card(props) {

    const value = props.number ? "-50%" : "50%";
    return (
        <AnimatePresence>
            <motion.div
                key = {props.key}
                initial={{ x: value, opacity: "0.0" }}
                animate={{ x: "0", opacity: "1" }}
                exit = {{x: value, opacity: "0.0", transition: {duration: 0.5}}}
                transition={{ duration: 0.5, ease: "easeOut" }}


                className={styles.card}>
                <div className={styles.image}>Image</div>
                <div className={styles.content}>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.tag}>
                        <div className={styles.clubTag}>{props.club}</div>
                        <div className={styles.teamTag}>Team- Participation</div>
                    </div>
                    <div className={styles.btn}>
                        <button>Explore</button>
                        <button>Register</button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>);

}

export default Card;