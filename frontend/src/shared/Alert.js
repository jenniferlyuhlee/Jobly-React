import React from "react";

function Alert({type, messages = []}){
    return(
        <div className={`alert alert-${type}`} role="alert">
            <ul className="m-0">
            {messages.map(err => (
                <li className="small" key={err}>
                    {err}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Alert;