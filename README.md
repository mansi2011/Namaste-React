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

JSX => (babel (javascript compiler) at the end of the day is converting the JSX code to React.createElement) React.createElement => ReactElement - JS Object => HTMLElement(render)
JSX can prevent injection attack because it sanitizes the expression we provide inside {}
JSX Expression must have only one parent element 
we might use react fragment <React.Fragment> or shortcut <></> provided by React to solve the problem of getting unnecessary div because it act as  empty tag

attribute of tag in JSX takes camelcasing and there is modification from that of HTML Attribute eg class => className

React Component - its simply a normal javascript function which returns some JSX(React Element) just name the component name starting in capital letter

To render a component we follow this syntax - <Component/> eg: root.render(<Component/>)
Inside JSX if we write {} we can run any javascript expression

Component Composition - composing component inside of a component is basically a component composition.
eg:     return(
        <div className="app">
            <Header/>
            {Header()}
            <h1>Hello React</h1>
        </div>
    )


Ep 4 - talk is cheap, show me the code

before coding an app- eg: food delivering app
1. first plan the design of the app includes - header, logo, navbar , content/body placeholder, footer placeholder
2. features it will have like - searching, sorting, filtering, cart
3. build a mock on pen or paper
4. component my app will have and its low level design tree structure
   header
    - logo
    - nav item
   body
    - search 
    - restaurant container
        - restaurat card
            - img
            - cuisine
            - rating
            - delivery time
            - price for two
   footer
    - copyright
    - links
    - address
    - contact

prop to component - is just like arugument to a function or in other words we pass data through props from on component to another.
Config Driven UI - according to data my UI data will defer or driven. this kind of UI is basically term as config driven UI.
We provide unique id to each card component on similar level so that react tracks which is which and re-renders only where it requires.
it improve the performance impactively.
passing index as key is a bad practice written in react documentation


create folder structure as per industry standard
export/imports are of two types : named and default.

export default Component
import Component from "path"

export const Component
import {Component} from "path"

#React Hooks
react hooks are normal javascript utility function.and we will have to import in our component.
mainly used hooks are : useState, useEffect

useState is a react utility function which gives state variable and a function in return which is used to update the state varibale.
state varibale
const [listOfRestraunt,setListOfRestraunt] = useState(initialValue)
normal variable
const listOfRestraunt = []

point to be noted in case of useState:
whenever state variable updates react re-renders the component using reconciliation algorithm or react fibre
Why we use state varible???
because normal Js varibale doesnt take the latest value of the variable and refresh and show it on UI to get that thing we are having state variable. useState - have a variable and a function to update the latest value of the variable and re render it so that we can see it on UI. because with it there is no way to track the varibale and its latest value to use in component.
whenever there is a change in state variable react trigger reconcilliation process or re render

Reconciliation algorithm(React fibre) - 


virtual dom - is the representation of actual dom. basically the react element
actual dom - body component when we do inspect

diff algorithm - it basically find the difference between updated and previous virtual dom and update the UI, which helps in efficient dom manipulation.

Monolith / Microservices Architecture - 

point for microservice                                                point for monolith
single responsibilty principle                                        all the services are in single project
separation of concern                                                 no single responsibilty
all service talk to each other 
every services are written in multiple language 
depends on the use case STACK is decided
All the services are run on their own diff ports as its deployed that way


methods on how react Loads the UI or any website what so ever

Loads ---> render UI ----> API calls ---> re-Rneder UI 

useEffect hooks 
how to use
useEffect(() => {} ,[])
takes two argument - callback function, dependencies array
if you want to do anything after rendering the component write it in useEffect
useEffect is rendered everytime component renders but the behavior changes based on the dependency array
if no dependency array then => useEffect is called every render
if empty dependency array then => useEffect  is only called on initial render(just once)
if we have something in dependency array then =>  useEffect is called only when the "something" dependency changes / updates

CORS policy - browser blocks the api call from one origin to another origin 
optional chaining - means avoiding the undefined or blank UI if the data is not present from response we get from API hence eg: data?.card is way we can write 

better way is to load UI before api gets result is use shimmer UI
Conditional Rendering - rendering of UI based on some condition is called conditional rendering

Lazy Loading - its a method to load different parts on UI only when they are needed is known as code splitting. so what happens is a huge bundle and chunks of JS (which used to load the entire app at once in a minified format) will be shift to your UI as soon as we open website so so reduce the load on those bundle file we use code splitting and lazy load the component.

Const Component = React.lazy(() => import("./path of the component))
to use it we need a suspense component wrapped it so that till the time the part load it should have a fallback UI to display rather than just waiting on a blank screen
In case component failed to load for some reason then it needs to have some error  to show which is called as error boundry

Routing in react
routing in react can be done using createBrowserRouter component from react-router-dom which take array of object that is basically a configuration that takes path and element opens on that specified path
and this configuration is given to the root component using RouterProvider component from react-router-dom

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path: "/about",
        element:<About/>
    }
])

root.render(<RouterProvider router={appRouter}>)

we can also have children routes while creating path configuration and set error in case of random or path which is not matched
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
        children:[{
            path:"/contact",
            element:<ContactUS/>
        }],
        errorElement:<Error/>
    },
    {
        path: "/about",
        element:<About/>
    }
])

and to load children outlet inside the UI we have <outlet/> component from react-router-dom. basically it dynamically replace the outlet with the associated component corresponding to path given.

we should not use <a> tag to define links because it reloads whole page to render it when we navigate.
Instead use link component from react-router-dom which behind the scene uses <a> tag only, but it will be effecient as it wont reload the whole page while navigating it just reload the component where the update happened by keeping the track of it.
this concept is what we call single page application.

<a href="/">Home</a>
<link to="/">Home</link>

There are two type of routing : 
server side routing  --- when while navigating we are getting page from server
client side routing --- when all the component is already loaded inside our app and we navigate and it gets rendered.

Class component in react is generally a normal javascript class which extends from React.Component class and has a render methods which return some jsx
syntax:
class UserClass extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello from class component</h1>
            </div>
        )
    }
}

export default UserClass

To recieve prop in class based component we use constructor unlike argument in functional based component

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <div>
                <h1>Hello from class component {this.props.name}</h1>
            </div>
        )
    }
}

export default UserClass

props basically a object which has key value pair of data we send from one component to another.

creating state in class based component:
component loads in class based component means we created instance of a class and at that time constructor called hence we create state in constructor function.

constructor(props){
    super(props)
    this.state = {
        count:0,
        count1:0
    }
}
in class just like functional based component , we never update state value directly
we use this.setState function which takes object of state variable with the updated value.
this.setState({   
    count:this.state.count + 1
})

lifecycle of parent and child in class based component:
parent constructor
parent render
child constructor
child render
child component did mount
parent component did mount

React LifeCycle in case of multiple children
parent constructor
parent render
first child constructor
first child render
second child constructor
second child render
first child component did mount
second child component did mount 
parent component did mount

Note: react lifecycle has two phase render phase and commit phase
render phase ---- constructor and render called
commit ---- component did mount called
this way react will optimised the process

after the load if we want to do something we use componentDidMount function
async componentDidMount(){
    //Api call   

    const data = await fetch("https://api.github.com/users/Mansi2011")
    const josn = await sdata.json(  )
}


LifeCycle in react explaination:

    Constructor(with dummy data)
    render the same data
    component did mount
    api call happens here
    state variable will get update using this.setState
    update state will get render (with api response data)
    component did update will called 
    component will unmount called 

component will unmount : is used to cleanup or destroy the interval or  something

