import React from 'react'
import axios from 'axios';

async function getdata() {
    let data = await axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  
    return data;
  }

const Ssr =async ({data}) => {
    const todos = await getdata();
    console.log(todos)

  return (
   <>
   <h1>{data}</h1>
  
   </>
  )
}

export default Ssr
