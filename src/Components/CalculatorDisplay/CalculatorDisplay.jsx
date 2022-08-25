import React from 'react';
import './CalculatorDisplay.css'
function CalculatorDisplay({topDisplay,display}){
    return(
        <div className='calculator-display-container'>
            <div className="calculator-result">
                {topDisplay}
            </div>
            <div className="calculator-current">
                {display}
            </div>
        </div>
    )
}

export default React.memo(CalculatorDisplay);