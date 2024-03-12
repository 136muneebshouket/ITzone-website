"use client";
import React, { useState , useEffect } from "react";

const page = () => {

  let todos = JSON.parse(localStorage.getItem('todos'))
  

  const [userval, setUserval] = useState("");
  const [arr, setArr] = useState( () => todos ? todos : [] );
  const [edit_flag, setEdit_flag] = useState(false);

  const [edit_index, setEdit_index] = useState();

  function addtodo(e) {
    e.preventDefault();

    if (userval == "") {
      alert("please add some value");
      return;
    }

    if (arr.includes(userval)) {
      alert("value already exist");
      return;
    }
    setArr([...arr, userval]);
    setUserval("");
    // arr.push(userval)
    // console.log(arr)
  }

  function del(index) {
    let new_arr = arr.filter((v, i) => i !== index);
    setArr(new_arr);
  }
  // console.log(new_arr)

  function update(index) {
    setUserval(arr[index])
    setEdit_flag(true)
    setEdit_index(index)
    // let edit_arr = arr.splice()
  }

  function edit(e) {
    e.preventDefault();
    console.log(edit_index)
    let editted_arr = arr.toSpliced(edit_index , 1 , userval )
    setArr(editted_arr)
    setUserval('')
    setEdit_flag(false)
  }

  useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(arr))
  },[arr])


  return (
    <>
      <h1>Todos</h1>
      <form >
        <input
          value={userval}
          onChange={(e) => {
            setUserval(e.target.value);
          }}
          type="text"
        />
        { edit_flag ?  <button onClick={edit} >Edit</button> : <button onClick={addtodo} >Add Todo</button> }
        
      </form>

      <ul>
        {arr.map((val, index) => {
          return (
            <>
              <li key={index}>
                {val}{" "}
                <button
                  onClick={() => {
                    del(index);
                  }}
                >
                  del
                </button>{" "}
                <button
                  onClick={() => {
                    update(index);
                  }}
                >
                  update
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default page;
