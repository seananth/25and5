import React, { useState, useEffect } from "react";

function Timer(props) {

    if (props.startClock === true) {
        return (
            <div>
                <h1>starting</h1>
            </div>
            )
    } else {
        return <h1>{props.startingTime}</h1>
    }
  
    return(
    <h1>{props.startingTime}</h1>
    )

}

export default Timer;
