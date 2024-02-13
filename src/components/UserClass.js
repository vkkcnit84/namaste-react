import { Component } from "react";
import UserDetails from "../../utils/userContext";
export default class User extends Component {
    constructor(props) {
        super(props);
        console.log('child constructor1', props);
    }

    componentDidMount(){
        console.log('child componentDidMount');
    }

    render() {
        console.log('child render');

        return (
            <div>
                <UserDetails.Consumer>
                    { ({loggedInUser}) => <h1>User: {loggedInUser}</h1> }
                </UserDetails.Consumer>
                <h1>Hello user class{this.props.name}</h1>
            </div>
        )
    }
}