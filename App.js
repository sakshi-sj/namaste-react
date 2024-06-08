import React from "react";
import ReactDOM from "react-dom/client";



// using jsx
const jsxHeading = <h1 id="heading"> this is jsx</h1>

const Title = () => (
        <h1 className="head"> NAMASTE REACT</h1>
);

// React functional component
const HeadingComponent = () => (
        <div id="container">
                <Title />
<h1 className="heading">this is react functional component</h1>
        </div>
       
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)
// root.render(jsxHeading)