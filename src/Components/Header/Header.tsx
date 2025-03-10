import React from "react";
import { render } from "react-dom"
import  ReactDOM from "react-dom/client"


const HeaderComponent = () => {
    return (
    <div>   
    <div className="logo-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iujphOsVMtakrSKi8xXYFwRkWo7XnC0OTA&s" alt='logo'/>
    </div>
    <div className="nav-container">
        <ul>
            <li>Home</li>
            <li>Contact</li>
        </ul>
    </div>
    </div> 
    )

}


export default HeaderComponent;
