import React from "react";
import "./Header.css";
import { useContext } from "react";
import {LoginContext} from "../contextApi/loginContext";

function Header() {
   const userName =  useContext(LoginContext);
    const { globalName  } = userName;
    console.log(globalName);

    

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            <p>Zepto</p>
                        </div>
                        <div>
                            <p>Grocery</p>
                        </div>
                        <div>
                            <p>Electronics</p>
                        </div>
                        <div className="search-container">
                            <p>Search</p>
                            <input type="text" placeholder="Search for products..." />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>Cart</div>
                        <div>Login</div>
                        <div>{globalName}</div>
                       
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header;