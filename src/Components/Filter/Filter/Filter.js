import styles from './Filter.module.css';
import Card from '../Card/Card';
import { useState } from 'react';

function Filter(props){
    const [tag, setTag] = useState('General');

    return(
    <div className={styles.outer}>
        <h1>Competitions</h1>
        <div className={styles.tags}>
            {props.clubs.map((club) =>{
                return(<button className={`${styles.tag} ${tag === club ?styles.active : null}`} onClick = {()=>setTag(club)}>{club}</button>);
            })}
        </div>
        <div className={styles.cards}>

            {props.events.filter(event => event.club === tag).map((filteredEvent,index) => <Card number = {index%2 === 0 ? true : false} key={filteredEvent.id} name = {filteredEvent.name} club = {filteredEvent.club}/>)}

            {/* {props.events.map((event) =>{
                return(<Card name = {event.name} club = {event.club}/>)
            })} */}
        </div>
    </div>);
}

export default Filter;