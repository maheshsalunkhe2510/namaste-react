import User from "./User";
import USerClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log('parent constructor called ');
    }
    componentDidMount() {
        console.log('parent component did mount  called ');
    }
    render() {
        console.log('parent render called ');
        return (<div>
            <h1>about us</h1>
            <h1>This is the Namaste  React</h1>
            <USerClass ></USerClass>

        </div>)
    }
}

export default About