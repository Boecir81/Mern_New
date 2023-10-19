import React, { useState } from "react";

const MenuItem = (props) => {
    let [dishLikes, setdishLikes] = useState(props.dishLikes)

    const addOneLike = () => {
        setdishLikes(dishLikes + 1);
    }

    return <>

        <div>
            <h3>{props.dishName}</h3>
            <p>Price: {props.dishPrice}</p>
            <p>Number of likes: {dishLikes}</p>
            <p>Description: {props.dishDescription}</p>
            <button onClick={addOneLike}>Like Item &#10084;</button>
            <hr />
        </div>

    </>


}

export default MenuItem;