import React from "react";
import Button from "../Button/Button";
import "./CalculatorBody.css";

const scientificButtonList=[
    {
        title:"Rad",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"Deg",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"x!",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"Inv",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"sin",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"ln",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"π",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"cos",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"log",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"e",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"tan",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"square-root",
        buttonClass:"button",
        iconClass:"fa-solid fa-square-root-variable"
    },
    {
        title:"Ans",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"EXP",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"^",
        buttonClass:"button",
        iconClass:""
    },
];
const normalButtonList=[
   
    {
        title:"(",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:")",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"%",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"back",
        buttonClass:"button",
        iconClass:"fa-solid fa-delete-left"
    },
    
    {
        title:"7",
        buttonClass:"button number-button",
        iconClass:"fa-solid fa-7"
    },
    {
        title:"8",
        buttonClass:"button number-button",
        iconClass:"fa-solid fa-8"
    },
    {
        title:"9",
        buttonClass:"button number-button",
        iconClass:"fa-solid fa-9"
    },
    {
        title:"/",
        buttonClass:"button",
        iconClass:"fa-solid fa-divide"
    },
    
    
    {
        title:"4",
        buttonClass:"button number-button",
        iconClass:"fa-solid fa-4"
    },
    {
        title:"5",
        buttonClass:"button number-button",
        iconClass:"fa-solid fa-5"
    },
    {
        title:"6",
        buttonClass:"button number-button",
        iconClass:"fa-solid fa-6"
    },
    {
        title:"*",
        buttonClass:"button",
        iconClass:"fa-solid fa-xmark"
    },
    
    
    {
        title:"1",
        buttonClass:"button number-button",
        iconClass:"fa-solid fa-1"
    },
    {
        title:"2",
        buttonClass:"button number-button",
        iconClass:"fa-solid fa-2"
    },
    {
        title:"3",
        buttonClass:"button number-button",
        iconClass:"fa-solid fa-3"
    },
    {
        title:"-",
        buttonClass:"button",
        iconClass:"fa-solid fa-minus"
    },
    
    {
        title:"0",
        buttonClass:"button number-button",
        iconClass:"fa-solid fa-0"
    },
    {
        title:".",
        buttonClass:"button",
        iconClass:""
    },
    {
        title:"=",
        buttonClass:"button equal-to-button",
        iconClass:"fa-solid fa-equals"
    },
    {
        title:"+",
        buttonClass:"button",
        iconClass:"fa-solid fa-plus"
    }
]


function CalculatorBody(){
    const handleEvent=(title)=>{
        console.log(title);
    }
    return(
        <div className="calculator-button-holder">
            <div className="scientific-calculator">
                {
                    scientificButtonList.map((buttonData,index)=>
                    <Button key={index} {...buttonData} handleEvent={handleEvent}/>
                    )
                }
            </div>
            <div className="normal-calculator">
                {
                    normalButtonList.map((buttonData,index)=>
                    <Button key={index} {...buttonData} handleEvent={handleEvent}/>
                    )
                }
            </div>
        </div>
    )
}

export default React.memo(CalculatorBody);