import React from'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef (function(props,ref) {

    return (
        <input ref ={ref} className={classes.myInp} {...props} />
    );
})
export default MyInput;