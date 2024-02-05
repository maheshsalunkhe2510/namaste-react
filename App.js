import React from "react";
import ReactDOM from "react-dom"

const Title = () => <h1 id="heading">Namaste React title component </h1>
const reactElement = <div>react element </div>


const HeaderComponent = () => {
        return <div>
                <Title />
                {Title()}
                {reactElement}
                <h2> Namaste React component</h2>
        </div>
}
const componentInReactElement = <div>react element <HeaderComponent /></div>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(componentInReactElement);
//root.render(<HeaderComponent />);