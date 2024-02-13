import UserClass from "./UserClass";
// import User from "./User";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log('Parent constructor');
        this.state = {
            count: ''
        }
    }



   async componentDidMount(){
        console.log('Parent componentDidMount');
        const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5821195&lng=77.3266991');
        const data = await res.json();
        this.setState({
            count : data.data.statusMessage,
        })
        console.log(data);
    }
    

    render() {
        const { count } = this.state;
        console.log('Parent render');
        return <div>
            {count}
            <button onClick={ () => {
                this.setState({
                    // count : this.state.count + 1,
                })
            }}>button:</button>
                <UserClass name={'child-1'}></UserClass>
                {/* <UserClass name={'child-2'}></UserClass> */}
                <h1>About Page</h1>
            </div>
    }
}

export default About;