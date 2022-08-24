import React from 'react';
import CalculatorBody from '../CalculatorBody/CalculatorBody';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';
import './Calculator.css';

function Calculator(){
    return(
        <div className="calculator-container">
            <CalculatorDisplay/>
            <CalculatorBody/>
        </div>
    )
}

export default React.memo(Calculator);