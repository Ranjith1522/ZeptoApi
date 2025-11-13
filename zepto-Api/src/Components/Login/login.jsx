import React from "react";
import "./login.css";

function Login() {
    return (
        <>
            <div className="login-container">
                <div className="left-side">
                    <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.34.0/tr:w-0.2,ar-0.2-0.2,pr-true,f-auto,q-80//images/logo.svg" alt="Zepto Logo" />
                    <h3>Lowest Prices Everydayin 10 minutes*</h3>
                    <input type="number" placeholder="Enter phone number"></input>
                    <button type="submit">Continue</button>
                </div>
                <div className="right-side">
                    <h4 style={{color:'rgb(81,0,128)'}}>Order faster & easier everytime</h4>
                    <button><img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.34.0/tr:w-180,ar-180-46,pr-true,f-auto,q-80//images/app-stores/download-play-store.svg"></img></button>
                    <button><img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.34.0/tr:w-180,ar-180-46,pr-true,f-auto,q-80//images/app-stores/download-app-store.svg"></img></button>
                </div>

            </div>
        </>
    )
}

export default Login;