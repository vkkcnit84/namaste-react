
/**
 * 
 * <div id="parent">
 * 
 *  <div id="child">
 *    I am child
 * </div>
 * 
 * <div id="child1">
 *  I am child2
 * </div>
 * <h1>Hello</h1>
 * </div>
 * 
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("div", {id: 'parent'}, [React.createElement("div",
{
    id: 'child'
}, "I am child"), 
React.createElement("div",
{
    id: 'child1'
}, "I am child2"),
React.createElement("h1",
{
}, "hello h1")
]);

console.log('heading:', heading)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);