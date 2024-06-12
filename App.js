import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
        return (
                <div className="header">
                        <div className="logo-container">
                              <img className="logo" src="https://cdn.vectorstock.com/i/500p/96/72/burger-isolated-cartoon-design-vector-31809672.jpg" />
                        </div>
                        <div className="nav-items">
                                <ul>
                                        <li>Home </li>
                                        <li>About us </li>
                                        <li>Contatct Us </li>
                                        <li>Cart </li>
                                </ul>

                        </div>

                </div>
        )
}

const RestaurantCard = (props) => {
        return (
                <div className="res-card" style= {{
                        backgroundColor: "#f0f0f0"
                }}>
                        <img className="res-logo" alt = "res-logo" src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg" />
                        <h3> {props.resName} </h3>
                        <h4>{props.cuisine}</h4>
                        <h4>4.5 stars</h4>
                        <h4>38 minutes</h4>

                </div>
        );
};

const Body = () => {
        return (
                <div className="body">
                        <div className="search">Search</div>
                        <div className="res-container">
                <RestaurantCard 
                resName = "Meghna Foods"
                cuisine = "Biryani, North Indian, Asian"
                
                 />
                <RestaurantCard
                resName = "KFC"
                cuisine = "Burger, Fast Food" />
                
                        </div>
                </div>
        )
}

const AppLayout = () => {
        return (
              <div className="app">
                <Header />
                <Body />
              </div>  
        )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
// root.render(jsxHeading)