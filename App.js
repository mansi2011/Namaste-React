import React from "react"
import { render } from "react-dom"
import  ReactDOM from "react-dom/client"

// const heading = React.createElement('h1',{id:"heading"},"Namaste React")
// console.log(heading)

const jsxHeading = (<h1 id="heading">Namaste React using JSX</h1>)
console.log(jsxHeading)
//Both the consoles are one and the same thing


const Title = () => (<h1 id="heading">Namaste React using JSX</h1>)

// this form of putting component inside component is called component composition


const HeadingComponent = () => {
    return (
        <div>
            <Title/>
            <h1>React Functional Component</h1>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(heading) 
// root.render(jsxHeading )

root.render(<HeadingComponent/>)
