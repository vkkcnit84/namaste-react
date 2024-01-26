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

const heading = React.createElement("div", {id:"parent"}, 
    [
     React.createElement("div", {id: 'child1'}, React.createElement("div", {id: 'child2'}, React.createElement('h1',  {}, 'hello he') ))
    ]);
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('root', root)
root.render(heading);