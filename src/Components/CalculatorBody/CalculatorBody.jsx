import React from "react";
import Button from "../Button/Button";
import "./CalculatorBody.css";

const normalButtonList = [
    [
        {
            title: "(",
            buttonClass: "button",
            iconClass: ""
        },
        {
            title: ")",
            buttonClass: "button",
            iconClass: ""
        },
        {
            title: "%",
            buttonClass: "button",
            iconClass: ""
        },
        {
            title: "back",
            buttonClass: "button",
            iconClass: "fa-solid fa-delete-left"
        }
    ],
    [
        {
            title: "7",
            buttonClass: "button number-button",
            iconClass: "fa-solid fa-7"
        },
        {
            title: "8",
            buttonClass: "button number-button",
            iconClass: "fa-solid fa-8"
        },
        {
            title: "9",
            buttonClass: "button number-button",
            iconClass: "fa-solid fa-9"
        },
        {
            title: "/",
            buttonClass: "button",
            iconClass: "fa-solid fa-divide"
        }
    ],

    [
        {
            title: "4",
            buttonClass: "button number-button",
            iconClass: "fa-solid fa-4"
        },
        {
            title: "5",
            buttonClass: "button number-button",
            iconClass: "fa-solid fa-5"
        },
        {
            title: "6",
            buttonClass: "button number-button",
            iconClass: "fa-solid fa-6"
        },
        {
            title: "*",
            buttonClass: "button",
            iconClass: "fa-solid fa-xmark"
        }
    ],

    [
        {
            title: "1",
            buttonClass: "button number-button",
            iconClass: "fa-solid fa-1"
        },
        {
            title: "2",
            buttonClass: "button number-button",
            iconClass: "fa-solid fa-2"
        },
        {
            title: "3",
            buttonClass: "button number-button",
            iconClass: "fa-solid fa-3"
        },
        {
            title: "-",
            buttonClass: "button",
            iconClass: "fa-solid fa-minus"
        }
    ],
    [
        {
            title: "0",
            buttonClass: "button number-button",
            iconClass: "fa-solid fa-0"
        },
        {
            title: ".",
            buttonClass: "button",
            iconClass: ""
        },
        {
            title: "=",
            buttonClass: "button equal-to-button",
            iconClass: "fa-solid fa-equals"
        },
        {
            title: "+",
            buttonClass: "button",
            iconClass: "fa-solid fa-plus"
        }
    ]
]


function CalculatorBody({ handleEvent }) {
    return (
        <div className="calculator-button-holder">
            <div className="normal-calculator">
                {
                    normalButtonList.map((buttonList, index) =>
                        <div className="button-row" key={index}>
                            {
                                buttonList.map((buttonData,index)=>
                                    <Button key={index} {...buttonData} handleEvent={handleEvent} />
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default React.memo(CalculatorBody);