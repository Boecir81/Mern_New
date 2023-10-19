import React, { useState } from "react";


const QuarterbackForm = () => {

    let [name, setName] = useState("");
    let [profilePicUrl, setProfilePicUrl] = useState("");
    let [jerseyNumber, setJerseyNumber] = useState("");
    let [favoriteThrow, setFavoriteThrow] = useState("");
    let [favColor, setFavColor] = useState("");

    //variable for check box to see quarter back is good are bad
    let [quarterbackGoodBad, setQuarterbackGoodBad] = useState(false);

    //State variable to store all the submitted quarterback objects inside and initialize it as an empty list
    let [quarterbackList, setQuaterbackList] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault(); //Prevents form reloading the whole page
        console.log({ name, profilePicUrl, jerseyNumber, favoriteThrow })
        let newQuarterbackObj = { name, profilePicUrl, jerseyNumber, favoriteThrow, favColor, quarterbackGoodBad } //Creates a quarterback object using the info from the form

        // Clear out the state variables which clear form inputs
        setName("");
        setProfilePicUrl("");
        setJerseyNumber("");
        setFavoriteThrow("RPO");
        setFavColor("");

        //Add the quarterback object to the quarterback array
        setQuaterbackList([...quarterbackList, newQuarterbackObj]); //this line sets quarterbackList using setQuarterbacklist to contain a copy of whats already in the list using (...quarterbackList) then adds the new qurterback object


    }

    //delete button function
    const deleteButton = (indexNum) => {
        console.log("deleting at Index ber -->", indexNum); //inde represents the index of the quraterback we clicked to delete

        //Use the filter function to loop through the original array to find and delete by index number
        let filteredQuarterbackList = quarterbackList.filter((quarterback, index) => {
            return index !== indexNum;
        })

        console.log("filtered Quarterback list -->", filteredQuarterbackList)

        //Update our state array quarterback list to be this new filteredQuarterbackList
        setQuaterbackList(filteredQuarterbackList);
    }

    const updateQuarterbackGood = (indexNum) => {
        console.log("this is the checkbox working -->", indexNum)
        console.log("here's the quarterback updated --->", quarterbackList[indexNum].quarterbackGoodBad)

        //make a copy of quarterback list
        let copyOfQuartebackList = [...quarterbackList]

        //update the Quarterback object checkbox
        copyOfQuartebackList[indexNum].quarterbackGoodBad = !copyOfQuartebackList[indexNum].quarterbackGoodBad

        //update the state variable using the modified copy so react knows to update the DOM
        setQuaterbackList(copyOfQuartebackList)
    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(event) => { setName(event.target.value) }} value={name} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Pic:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(event) => { setProfilePicUrl(event.target.value) }} value={profilePicUrl} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Jersey Number:</label>
                    <input type="number" name="" id="" className="form-control" onChange={(event) => { setJerseyNumber(event.target.value) }} value={jerseyNumber} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Color:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(event) => { setFavColor(event.target.value) }} value={favColor} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Throw:</label>
                    <select name="" id="" className="form-select" onChange={(event) => { setFavoriteThrow(event.target.value) }} value={favoriteThrow}>
                        <option value="Hail Mary">Hail Mary</option>
                        <option value="Quick Slant">Quick Slant</option>
                        <option value="RPO">RPO</option>
                    </select>
                </div>
                <input type="submit" value="Add Quarterback" className="btn btn-success mt-3" />
            </form>

            {
                quarterbackList.map((quarterback, indexNum) => {
                    return <div key={indexNum} className="mt-3" style={{ backgroundColor: quarterback.favColor, border: quarterback.quarterbackGoodBad ? "20px solid gold" : "" }}>
                        <p><img src={quarterback.profilePicUrl} alt="" /></p>
                        <h1>Name: {quarterback.name} - IndexNumber: {indexNum}</h1>
                        <h4>Jersey Number: {quarterback.jerseyNumber}</h4>
                        <h5>Favorite Throw: {quarterback.favoriteThrow}</h5>
                        <p>Favorite Color: {quarterback.favColor}</p>
                        <button onClick={() => deleteButton(indexNum)} className="btn btn-danger">Delete {quarterback.name}</button>
                        <label htmlFor="">Quaterback Good</label>
                        <input onClick={() => updateQuarterbackGood(indexNum)} type="checkbox" name="" id="" />
                        <hr />
                    </div>

                })
            }
        </>
    )
}

export default QuarterbackForm;
