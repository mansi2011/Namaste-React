import React from "react"
import  ReactDOM from "react-dom/client"

// separated react code in different file inside App.js

// missing object can take attribute to the tag we are creating as element eg : {id : "heading"}

// const heading = React.createElement('h1',{id : "heading"},'hello world from React') // creating element will be handle by core React hence React.createElement

// // heading is basically a react element equivalent to javascript object which has a property called props which is also a object which has property called children value equal to the 3rd argument, and other property we passed to object in second argument 

// const root = ReactDOM.createRoot(document.getElementById('root')) // creating a root which can render content on browser will be handle by ReactDOM hence ReactDOM.createRoot

// root.render(heading) // rendering content on browser will be done by render method

// render method is taking react element (object) as an argument and creates the h1 element and place it inside root element and show it in the browser


// nested html Node

{/* <div id='parent'>
    <div id='child'>
        <h1>i am h1 tag</h1>
    </div>
</div> */}

// const nestedDOM = React.createElement('div',{id : "parent"},React.createElement('div',{id : "child"},React.createElement('h1',{},'i am h1 tag'))) // creating element will be handle by core React hence React.createElement
// console.log(nestedDOM)

// const root = ReactDOM.createRoot(document.getElementById('root')) // creating a root which can render content on browser will be handle by ReactDOM hence ReactDOM.createRoot

// root.render(nestedDOM) // rendering content on browser will be done by render method

// nested html Node with sibling by using array of React.createElement 

{/* <div id='parent'>
    <div id='child'>
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
    </div>
</div> */}

// const nestedDOM = React.createElement('div',{id : "parent"},React.createElement('div',{id : "child"},[React.createElement('h1',{},'i am h1 tag'),React.createElement('h2',{},'i am h2 tag')])) // creating element will be handle by core React hence React.createElement
// console.log(nestedDOM)

// const root = ReactDOM.createRoot(document.getElementById('root')) // creating a root which can render content on browser will be handle by ReactDOM hence ReactDOM.createRoot

// root.render(nestedDOM) // rendering content on browser will be done by render method



{/* <div id='parent'>
    <div id='child'>
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
    </div>
    <div id='child2'>
        <h1>i am h1 tag1</h1>
        <h2>i am h2 tag1</h2>
    </div>
</div> */}


const siblingChildDiv = React.createElement('div',{id:'parent'},[React.createElement('div',{id:'child'},[React.createElement('h1',{},'Namaste React'),React.createElement('h2',{},'i am h2 tag')]),React.createElement('div',{id:'child2'},[React.createElement('h1',{},'i am h1 tag1'),React.createElement('h2',{},'i am h2 tag1')])])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(siblingChildDiv)

