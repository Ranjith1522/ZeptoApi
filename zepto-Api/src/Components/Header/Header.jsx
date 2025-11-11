import React from "react";
import "./Header.css";

function Header() {

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
                        <div>
                            <p>Search</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>Cart</div>
                        <div>Login</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header;