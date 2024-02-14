import User from "./User";
import USerClass from "./UserClass";
import { Component, use } from "react";
import UserContext from "../utils/UserContext";

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
            <div>
                Logg
                <UserContext.Consumer>
                    {
                        ({ loggedInUser }) => <h1 className="font-bold text-lg">{loggedInUser}</h1>
                    }
                </UserContext.Consumer>
            </div>
            <h1>This is the Namaste  React</h1>
            <USerClass ></USerClass>

        </div>)
    }
}

export default About