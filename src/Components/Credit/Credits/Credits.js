import styles from './Credits.module.css';
import Dropdown from "../Dropdown/Dropdown";
import Card from "../Card/Card";

function Credits(props) {
    return (
        <div className={styles.outer}>

            <h1 className={styles.header}>Credits</h1>

            <div className={styles.leads}>
                <Card name="Ketan" desg="Tech Lead" />
                <Card name="Jakkar" desg="Tech Lead" />
            </div>

            <hr className={styles.hr} />

            <div >
                {props.domains.map((domain, index, domains) =>
                    <div>
                        <Dropdown name={domain.team} members={domain.members} />
                        <hr style={{ display: index === domains.length - 1 ? "none" : "block" }} className={styles.hr} />
                    </div>
                )}
            </div>
        </div>)
}

export default Credits;