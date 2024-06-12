import React from "react";
import ReactDOM from "react-dom/client";





const title = (
       
        <h1 className="head"> NAMASTE REACT</h1>
);
const number = 1000;
// React functional component
const HeadingComponent = () => (
        <div id="container">
                <h2>{number}</h2>
                
         
<h1 className="heading">this is react functional component</h1>
        </div>
       
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)
// root.render(jsxHeading)