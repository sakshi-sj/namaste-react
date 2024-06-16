import { useState } from "react";
const User = (props) => {
    const [count] = useState(0);
    return (
        <div className="user-card">
            <h1>{count}</h1>
            <h2>Name: {props.name}</h2>
            <h3> Location: Jaipur</h3>
            <h4> Contact: @sakshijethani</h4>
        </div>
    )
};
export default User;  // exporting the component so that it can be used in other files.