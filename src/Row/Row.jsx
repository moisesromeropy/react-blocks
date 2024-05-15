import { Component } from "react";
import styles from './Row.module.css'
class Row extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={styles.row}>
                {this.props.children}
            </div>
        )
    }
}

export default Row;