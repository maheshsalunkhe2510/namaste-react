import React from "react";

class USerClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "dumy",
                location: "test",
                avatar_url: ""
            },
        };
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/maheshsalunkhe2510");
        const userData = await data.json();
        this.setState({
            userInfo: userData
        });
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className='user-card'>
                <img src={avatar_url}></img>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h3>Contact:9890455839</h3>
            </div>
        )
    }
}

export default USerClass;