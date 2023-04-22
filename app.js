import React from 'react';
import ReactDOM from 'react-dom/client';



//React Funtional Component
const Heading = () => { return <h1 className='testclass'>I am react functional Component1 inside another Component</h1> };

// React Element
const reactElement = <span><h1>I am react Element</h1></span>

//React Funtional Component
const HeadingComponent = () => {
    return (
        <div>
            {reactElement}
            <Heading />
            {console.log('hi console')}
            <h1>I am React Funtional Component 2</h1>
        </div>
    )
}

console.log('reactElement:',reactElement);
console.log('HeadingComponent:',HeadingComponent);


const root = ReactDOM.createRoot(document.getElementById('root'));
// const headingWithJSX = <h1 className="jsxclass">I am from JSX</h1>
// console.log(headingWithJSX)
root.render(<HeadingComponent />);