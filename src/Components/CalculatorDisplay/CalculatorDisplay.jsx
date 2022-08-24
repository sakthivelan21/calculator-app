import React from 'react';
import './CalculatorDisplay.css'
function CalculatorDisplay(){
    return(
        <div className='calculator-display-container'>
            <div className="calculator-result">
                calculator display
            </div>
            <div className="calculator-current">
                calculator current
            </div>
        </div>
    )
}

export default React.memo(CalculatorDisplay);