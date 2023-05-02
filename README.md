Namaste React 🚀

Ep 1 - Inception
index.html
<!-- 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Namaste React</title>
</head>
<body>
    <div id="root">
        <!-- <h1>Hello World</h1> -->
        <!-- if above hello world is there then root.render(parent) will replace this content while showing on browser because of 37 line we have written and content written via react will get render on browser-->
    </div>
    <h2>check here </h2>  -->
    <!-- this will be visible as react takes control over the div id root -->

    <!-- <script>
    const heading = document.createElement('h1')
    heading.innerHTML = 'Hello World from javascript'
    const root  = document.getElementById('root')
    root.appendChild(heading)
    </script> -->


    <!-- these CDN links injected the react library in our project -->

    <!-- learn more about CDN and crossorigin attribute of script tag -->

    <!-- first src file is the core file of react
    second src file is the file that can help ReactDOM manipulation -->

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- hello world in react -->

    <!-- React. createElement(arg1,arg2,arg3) => element name , object, content inside element -->

    <script src="App.js">
        // const heading = React.createElement('h1',{},'hello world from React') // creating element will be handle by core React hence React.createElement
        // const root = ReactDOM.createRoot(document.getElementById('root')) // creating a root which can render content on browser will be handle by ReactDOM hence ReactDOM.createRoot
        // root.render(heading) // rendering content on browser will be done by render method
    </script>
    
<!-- </body>
</html> -->

<!-- Note: order of files inside script tag is always intact it should not change its order -->

App.js
// separated react code in different file inside App.js

// missing object can take attribute to the tag we are creating as element eg : {id : "heading"}

// const heading = React.createElement('h1',{id : "heading"},'hello world from React') // creating element will be handle by core React hence React.createElement

// // heading is basically a react element equivalent to javascript object which has a property called props which is also a object which has property called children value equal to the 3rd argument, and other property we passed to object in second argument 

// const root = ReactDOM.createRoot(document.getElementById('root')) // creating a root which can render content on browser will be handle by ReactDOM hence ReactDOM.createRoot

// root.render(heading) // rendering content on browser will be done by render method

// render method is taking react element (object) as an argument and creates the h1 element and place it inside root element and show it in the browser


// nested html Node

<!-- {/* <div id='parent'>
    <div id='child'>
        <h1>i am h1 tag</h1>
    </div>
</div> */} -->

// const nestedDOM = React.createElement('div',{id : "parent"},React.createElement('div',{id : "child"},React.createElement('h1',{},'i am h1 tag'))) // creating element will be handle by core React hence React.createElement
// console.log(nestedDOM)

// const root = ReactDOM.createRoot(document.getElementById('root')) // creating a root which can render content on browser will be handle by ReactDOM hence ReactDOM.createRoot

// root.render(nestedDOM) // rendering content on browser will be done by render method

// nested html Node with sibling by using array of React.createElement 

<!-- {/* <div id='parent'>
    <div id='child'>
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
    </div>
</div> */} -->

// const nestedDOM = React.createElement('div',{id : "parent"},React.createElement('div',{id : "child"},[React.createElement('h1',{},'i am h1 tag'),React.createElement('h2',{},'i am h2 tag')])) // creating element will be handle by core React hence React.createElement
// console.log(nestedDOM)

// const root = ReactDOM.createRoot(document.getElementById('root')) // creating a root which can render content on browser will be handle by ReactDOM hence ReactDOM.createRoot

// root.render(nestedDOM) // rendering content on browser will be done by render method



<!-- {/* <div id='parent'>
    <div id='child'>
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
    </div>
    <div id='child2'>
        <h1>i am h1 tag1</h1>
        <h2>i am h2 tag1</h2>
    </div>
</div> */} -->


const siblingChildDiv = React.createElement('div',{id:'parent'},[React.createElement('div',{id:'child'},[React.createElement('h1',{},'i am h1 tag'),React.createElement('h2',{},'i am h2 tag')]),React.createElement('div',{id:'child2'},[React.createElement('h1',{},'i am h1 tag1'),React.createElement('h2',{},'i am h2 tag1')])])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(siblingChildDiv)

Ep 2 - Igniting your App

NPM - Npm behind the scene works as a node package manager and is responsible for managing the packages/dependencies like version of package and all the details are given in package.json file. NPM is kind of repository which contain all the package, any package you need to install in our project we can do it via npm
package.json - it is the configuration file for NPM
package-lock.json - kind of locks the version of packages we install and keeps the record of it
package-lock.json file responsible for making sure the version we used in our system is in sync with produiuction to avoid discrepency

why do we need package.json file? 
Ans: to store the information of dependencies or keeps the track of what of package is installed in our system in designated file 
Bundler is responsible for bundling our dependencies and cleaning , optimizing , compressing our source file so that our app can be production ready
eg webpack, parcel

two type of dependencies can be installed - dev dependencies and normal dependencies
^(carat) - will automatically upgrade/update to minor version (2.8.3 to 2.8.4)
~(tilde) - will automatically install the major version (2.8.3 to 3.0.0)
carat preferred more than tilde - minor over major version of dependencies/packages 

Node module - kind of database where all our packages/dependencies exists and we can install it using npm install command
transitive dependencies - when one dependency is depend on other dependencies and they are also dependent upon other dependencies so these are transitive dependencies
 
we are not supppose to put the node modules folder to git because of its huge size and volume so we need to put it inside gitignore
if you have package.json file and package-lock.json file in your project repository you can re-create / re-generate all your node modules

npx parcel index.html - will create a server and build the app
npx means executing a package we use npx command
now we can bring react library into our project via npm instead of CDN links because its not preferrable 
why?
fetching react from cdn links takes a costly operation because it will make a network call for the links we are using but in case we install react using npm then we will be having it in our project locally
secondly links have react version which is not dynamic to the latest version we need to manually change and take care of the react version but if it is used by npm then package.json/package-lock.json file will keep the track of the version and no extra manual work is required at our end

commands used - npm install react and npm install react-dom
production build - npx parcel build index.html
# Parcel
-Create Local Server
-Dev Build
-HMR- Hot Module Replacement/Reloading - reflect the changes we do in modules by reading and anaylising the file
-Uses File Watching Algorithm for HMR - written in C++
-Caching things happens which reduce the build time 
-Image optimization 
-Minification of file 
-Bundling of the file
-Compress the file size
-Content Hashing
-Code Splitting
-Differential Bundling - to support in older browser
-Diagnostic
-Error Handling
-Gives the HTTPs,lazy loading feature 
-Tree Shaking - remove unused code for you


Ep 3 - Laying the Foundation

-script are used for making our job easy to do some action via command

React.createElement => Object => HTMLElement(render)

React.createElement => ReactElement - JS Object => HTMLElement(render)
const heading = React.createElement('h1',{id:"heading"},"Namaste React")

JSX - is not HTML in javascript but its HTML-Like or  XML-Like Syntax 
the below code is transpiled by babel package which manages by PARCEL before going to JS Engine and browser understand the code and generate the ouptut
const jsxHeading = (<h1 id="heading">Namaste React using JSX</h1>)

JSX => (babel at the end of the day is converting the JSX code to React.createElement) React.createElement => ReactElement - JS Object => HTMLElement(render)
JSX can prevent injection attack because it sanitizes the expression we provide inside {}
JSX Expression must have only one parent element 
we might use react fragment <React.Fragment> or shortcut <></> provided by React to solve the problem of getting unnecessary div because it act as  empty tag

attribute of tag in JSX takes camelcasing and there is modification from that of HTML Attribute eg class => className

React Component - its simply a normal javascript function which returns some JSX(React Element)

To render a component we follow this syntax - <Component/>
Inside JSX if we write {} we can run any javascript expression