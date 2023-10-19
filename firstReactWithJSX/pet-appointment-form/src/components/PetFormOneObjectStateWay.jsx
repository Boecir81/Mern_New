import React, { useState } from 'react';



const PetFormOneObjectStateWay = () => {

    // let [name, setName] = useState("");
    // let [age, setAge] = useState(null);
    // let [date, setDate] = useState(null);
    // let [species, setSpecies] = useState("");
    // let [petImage, setPetImage] = useState("");

    const [formInfo, setFormInfo] = useState({
        //we can have keys here that will reoresent the form inputs we will collect info for
        name: "",
        age: null,
        date: "",
        species: "",
        petImage: ""
    })

    const showPetImageError = () => {
        if (formInfo.petImage.length === 0) {
            return <p className="text-danger">Image Required</p>
        } else {
            return null
        }
    }

    const showNameError = () => {
        if (formInfo.name.length < 2) {
            return <p className="text-danger">Must be more then 2 characters long!</p>
        } else {
            return null
        }
    }

    const changeHandler = (e) => {
        console.log("this give the name omf inut changed-->", e.target.name)

        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" id="" className="form-control" onChange={changeHandler} />
                    {showNameError()}
                </div>
                <div className="form-group">
                    <label htmlFor="">Age:</label>
                    <input type="number" name="age" id="" className="form-control" onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Appoitment Date:</label>
                    <input type="date" name="date" id="" className="form-control" onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Species:</label>
                    <input type="text" name="species" id="" className="form-control" onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Image:</label>
                    <input type="text" name="petImage" id="" className="form-control" onChange={changeHandler} />
                    {showPetImageError()}
                </div>
                <input type="submit" value="Make Appointment" className="btn btn-success mt-2" />
            </form>

            <p className="mt-5">Registered Name: {formInfo.name}</p>
            <p>Age Of Animal: {formInfo.age}</p>
            <p>Date: {formInfo.date}</p>
            <p>Secies: {formInfo.species}</p>
            <p><img src={formInfo.petImage} alt="" /></p>

        </>


    )

}


















export default PetFormOneObjectStateWay;