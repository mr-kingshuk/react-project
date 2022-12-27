import styles from './Dropdown.module.css';
import Card from '../Card/Card';
import {useState} from 'react';
import AnimateHeight from 'react-animate-height';

function Dropdown(props){
    const [reverse, setReverse] = useState(false);
    const [height, setHeight] = useState(0);

    const dropdownHandler = () =>{
        setReverse((reverseState => !reverseState));
        setHeight(height === 0 ? 'auto' : 0)
    };

    return(<div className = {styles.outer}>
        <div className = {styles.topBar}>
            <div className = {styles.name}>{props.name}</div>
            <button className = {`${styles.arrow} ${reverse ? styles.reverse : null}` } onClick = {dropdownHandler}>^</button>
        </div>
        <AnimateHeight duration = {500} height = {height}>
            <div className = {styles.downBar}>
                {props.members.map(member => <Card name = {member.name} desg ={member.desg}/> )}
            </div>
        </AnimateHeight>
    </div>);
}

export default Dropdown;