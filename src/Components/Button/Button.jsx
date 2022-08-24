import React from 'react';
import './Button.css'

function Button({title,iconClass,buttonClass,handleEvent}){
    return (
        <button className={buttonClass} onClick={()=>handleEvent(title)}>
            {
                (iconClass==='')?
                    title:
                    <i className={iconClass}/>
            }
        </button>
    )
}

export default React.memo(Button);