'use client'
import React from 'react'
import axios from 'axios'

const page = () => {

 async function check_api() {
    
    await axios.post('http://localhost:8000/check_post_req' , {name:'muneeb'})
    .then((result) => {
        console.log(result.data)
    }).catch((err) => {
        console.log(err)
    });
 }
 async function check_get_api() {
    let arr =['honda' , 'toyota']
    await axios.get(`http://localhost:8000/check_get_req?cars=honda&color=red`)
    .then((result) => {
        console.log(result.data)
    }).catch((err) => {
        console.log(err)
    });
 }


 async function check_post_api_next() {
   
    await axios.post(`/api/testing-APIs` ,{name:"muneeb",lastname:'shouket'})
    .then((result) => {
        console.log(result.data)
    }).catch((err) => {
        console.log(err)
    });
 }


 async function check_get_api_next() {
    let obj = { cars: ['honda vr' ,'bmw'] , type: 'auto' }
    // let jsonobj = JSON.stringify(obj)

     await axios.get(`/api/testing-APIs?cars=honda&type=auto`)
    // await axios.get(`/api/testing-APIs` , { params : obj })
   .then((result) => {
        console.log(result.data)
    }).catch((err) => {
        console.log(err)
    });
 }



  return (
   <>

   
   <h1>Testing APIs</h1>
{/* 
   <button onClick={check_api}>Test post api</button>
   <button onClick={check_get_api}>Test get api</button> */}

   <button onClick={check_post_api_next}>Test post api next.js</button>
   <button onClick={check_get_api_next}>Test get api next.js</button>

   
   </>
  )
}

export default page
