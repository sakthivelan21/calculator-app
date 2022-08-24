import React from 'react';
import "./NavButton.css"
function NavButton({title,iconClass,navButtonClassName}){
    return(
        <div className={navButtonClassName}>
            <h3 className="nav-button">
                <i className={ `nav-button-icon ${iconClass}` }></i>
                {title}
            </h3>
        </div>
    )
}

export default React.memo(NavButton);