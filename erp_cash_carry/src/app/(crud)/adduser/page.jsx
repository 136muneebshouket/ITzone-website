'use client'
import axios from 'axios'
import React,{useState} from 'react'
import Loader from '../../../../components/Loder/Loader'
const page = () => {
    
    let intialobj ={
        name:'',
        email:''
    }

    const[formdata, setFormdata] = useState(intialobj)
    const[loading, setLoading] = useState(false)


    async function adddata(e) {
        e.preventDefault();
        // console.log(formdata)
        setLoading(true)

        await axios.post('/api/testing-APIs' , formdata)
        .then((result) => {
            setLoading(false)
            setFormdata(intialobj)
            console.log(result.data)
        }).catch((err) => {
            setLoading(false)
            console.log(err.response.data)
        });
    }

  return (
   <>
   <div>
    <form onSubmit={adddata}>
        <div>
            <label htmlFor="">name</label>
            <input type="text" name='name' value={formdata.name} onChange={(e)=>{setFormdata({...formdata , name:e.target.value})}} />
        </div>
        <div>
            <label htmlFor="">email</label>
            <input type="email" name='email' value={formdata.email} onChange={(e)=>{setFormdata({...formdata , email:e.target.value})}} />
        </div>

        <div>
            <button type='submit' disabled={loading ? true : false}>submit</button>
        </div>
    </form>
   </div>


   {loading ? <Loader/> : null}
   </>
  )
}

export default page
