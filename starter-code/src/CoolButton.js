import React from "react";

function CoolButton(props) {
    // console.log(props);
    const { children, className, isDanger, isSmall, isSuccess } = props;
    let defineClasses = "button "; 
    
    if (className) {
        defineClasses += className;
    } 

    if (isSmall) {
        defineClasses += " is-small";
    } 

    if (isDanger) {
        defineClasses += " is-danger";
    } 

    if (isSuccess) {
        defineClasses += " is-success";
    } 

    return (
        <button className={defineClasses}>{children}</button>
    );
}

export default CoolButton;
