import { Component } from "react";

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
                <h1>Hello user class{this.props.name}</h1>
            </div>
        )
    }
}