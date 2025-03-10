import React from "react"
import { render } from "react-dom"
import  ReactDOM from "react-dom/client"
import HeaderComponent from "./Components/Header/Header"


const AppLayout = () => {
    return(
        <div className="app">
            <HeaderComponent/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout/>)
