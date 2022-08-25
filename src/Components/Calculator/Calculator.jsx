import React, { useCallback, useEffect, useState } from 'react';
import CalculatorBody from '../CalculatorBody/CalculatorBody';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';
import './Calculator.css';




function Calculator(){

    const [topDisplay,setTopDisplay]=useState('');
    const [valueArr,setValueArr]=useState(['0']);
    const [display,setDisplay]=useState('0');
    const getPerfectStr=(str)=>{
        str = str.replace(/%/g, "/100");
        return str;
    }
    const setDisplayState=useCallback((value)=>{
        // console.log(value)
        let lastIndex = valueArr.length-1;
        if("0123456789.".includes(value))
        {

            if(lastIndex===0 && valueArr[lastIndex]==='0')
                valueArr[lastIndex]=value
            else if(isNaN(valueArr[lastIndex])===false)
                valueArr[lastIndex]+=value
            else 
                valueArr.push(value);
           
            
        }
        else if(value==="back")
        {
            if(valueArr[lastIndex]===0 && lastIndex!==0)
                    valueArr.pop()
            else if(typeof valueArr[lastIndex]==='number')
            {
                
                valueArr[lastIndex]=parseInt(valueArr[lastIndex]/10);
            }
            else {
                valueArr.pop();
            }
            if(valueArr.length===0)
            {    valueArr.push(0);
                setTopDisplay('');
            }
        }
        else if("+*/-()%".includes(value))
        {
           if(lastIndex===0 && valueArr[lastIndex]==='0') 
                valueArr[lastIndex]=value 
           else 
                valueArr.push(value);
        }
        
        else if(value==="=")
        { 
            let value;
            try{
                // eslint-disable-next-line
                value = eval(getPerfectStr(valueArr.join(" ")));
                setTopDisplay(valueArr.join(" "));
                valueArr.length=0;
                valueArr.push(value.toString());
            }
            catch(err)
            {

            }
            
        }
        else{
            if(lastIndex===0 && valueArr[lastIndex]==='0')
            valueArr[lastIndex]=value;  
            else 
                valueArr.push(value);
        }
        // console.log(valueArr);
        setValueArr(valueArr);
        setDisplay(valueArr.join(" "));
    },[setValueArr,valueArr]);

    const keyPress=useCallback((event)=>{
        // console.log(event.key);
        if("0123456789/.%+-*=()".includes(event.key))
            setDisplayState(event.key);
        else if(event.key==="Enter")
            setDisplayState("=");
        else if(event.key==="Backspace")
            setDisplayState("back");
        
    },[setDisplayState]);

    useEffect(()=>{
		console.log('useEffect in function called');
		window.addEventListener('keydown',keyPress);
        return () => document.removeEventListener("keydown", keyPress);
	},[keyPress]); // called exactly once 
	

    return(
       
        <div id="Home" className="calculator-container">
            <CalculatorDisplay topDisplay={topDisplay} display={display} />
            <CalculatorBody handleEvent={setDisplayState}/>
        </div>
    )
}

export default React.memo(Calculator);