import styles from './Header.module.css';
const { Component } = require("react");
class Header extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
          
            <div className={styles.topNav} ></div>
            
        )
    }
}

export default Header;