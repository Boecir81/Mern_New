import React, { useState } from "react";


const TodoListForm = () => {

    let [listItem, setListItem] = useState("");
    let [listDone, setListDone] = useState(false);

    let [addToList, setTodoList] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log({ listItem })
        let newListItemObj = { listItem, listDone }


        setListItem("")

        setTodoList([...addToList, newListItemObj])

    }
    const deleteButton = (indexNum) => {
        console.log("deleting at Index #Num ---> ", indexNum);

        let filteredTodoList = addToList.filter((addto, index) => {
            return index !== indexNum;
        })
        console.log("filtered to do listb -->", filteredTodoList)

        setTodoList(filteredTodoList);

    }

    const lineThruCheckBox = (indexNum) => {
        console.log("check box working cracker --->", indexNum)
        console.log("heres the todo list updated --->", addToList[indexNum].listDone)

        let copyOfAddToList = [...addToList]

        copyOfAddToList[indexNum].listDone = !copyOfAddToList[indexNum].listDone;

        setTodoList(copyOfAddToList);

    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">List Item:</label>
                    <input className="form-control" type="text" name="" id="" onChange={(event) => { setListItem(event.target.value) }} value={listItem} />
                </div>
                <input type="submit" value="Add To List" className="btn btn-primary mt-3" />
            </form>
            {
                addToList.map((list, indexNum) => {
                    return <div key={indexNum} className="mt-3" style={{ textDecoration: list.listDone ? "line-through" : "" }}>
                        <p>List Item: {list.listItem} -- Index: {indexNum}</p>
                        <button onClick={() => deleteButton(indexNum)} className="btn btn-danger">Delete at Index #{indexNum}</button>
                        <input onClick={() => lineThruCheckBox(indexNum)} type="checkbox" name="" id="" />
                    </div>
                })
            }
        </>

    )

}

export default TodoListForm;