import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddFriend = () => {

const [data,setdata]=useState(
    {
    
 "name": "",
 "friendName": "",
 "friendNickName":"",
 "DescribeYourFriend":""

 }

)
const inputhandler=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
    axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("Added successfully")
                
            } else {
                alert("error")
                
            }
        }
    ).catch()
}



  return (
    <div>

<NavBar/>
<br />
<center><h1>ADD NEW FRIEND</h1></center>
<br />

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Name</label>
        <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Friend Name</label>
        <input type="text" className="form-control"value={data.friendName} onChange={inputhandler} name='friendName' />

    </div>
    <center>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <label htmlFor="" className="form-label">Friend Nick Name</label>
        <input type="text" className="form-control"onChange={inputhandler} value={data.friendNickName} name='friendNickName' />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <label htmlFor="" className="form-label">Describe Your Friend</label>
        <input type="text" className="form-control" value={data.DescribeYourFriend} name='DescribeYourFriend' onChange={inputhandler} />

    </div>
   
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <button className="btn btn-danger" onClick={readValue}>Add Friend</button>
    </div>
    </center>
</div>

        </div>
    </div>
</div>



    </div>
  )
}

export default AddFriend