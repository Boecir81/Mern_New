import Reaact, { useState } from 'react';



const PetForm = () => {

    let [name, setName] = useState("");
    let [age, setAge] = useState(null);
    let [date, setDate] = useState(null);
    let [species, setSpecies] = useState("");
    let [petImage, setPetImage] = useState("");

    const showPetImageError = () => {
        if (petImage.length === 0) {
            return <p className="text-danger">Image Required</p>
        } else {
            return null
        }
    }

    const showNameError = () => {
        if (name.length < 2) {
            return <p className="text-danger">Must be more then 2 characters long!</p>
        } else {
            return null
        }
    }


    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e) => setName(e.target.value)} />
                    {showNameError()}
                </div>
                <div className="form-group">
                    <label htmlFor="">Age:</label>
                    <input type="number" age="" id="" className="form-control" onChange={(e) => setAge(e.target.value)} />
                    {
                        age < 0 ? <p className="text-danger">Please enter a valid age!</p> : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Appoitment Date:</label>
                    <input type="date" date="" id="" className="form-control" onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Species:</label>
                    <input type="text" species="" id="" className="form-control" onChange={(e) => setSpecies(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Image:</label>
                    <input type="text" image="" id="" className="form-control" onChange={(e) => setPetImage(e.target.value)} />
                    {showPetImageError()}
                </div>
                <input type="submit" value="Make Appointment" className="btn btn-success mt-2" />
            </form>

            <p className="mt-5">Registered Name: {name}</p>
            <p>Age Of Animal: {age}</p>
            <p>Date: {date}</p>
            <p>Secies: {species}</p>
            <p><img src={petImage} alt="" /></p>

        </>


    )

}


















export default PetForm;