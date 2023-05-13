import React, { useState } from 'react'
import styled from "styled-components"

const init={
    name:"",
    lastname:"",
    email:"",
    contact:"",
    company:"",
    state:"",
    desc:"",
    dist:"",
    info:""
}
const Form = () => {
    const [data,setdata]=useState(init)
    const handlechange=(e)=>{
       const {name,value}=e.target;
       setdata((prev)=>{
        return {...prev,[name]:value}
       })
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(data)
        alert('Thank You For Connecting Us')
        setdata(init)
    }
   // console.log(data)
  return (
     <Div className='container'>
        
        <form onSubmit={handlesubmit}>
        <div className="content">
            <div className='input-box'>
                   <label>Full Name</label>
                   <input type='text' name="name" placeholder='name'value={data.name} onChange={handlechange}/>
            </div>
            <div className='input-box'>
                   <label>Last Name</label>
                   <input type='text' name="lastname" placeholder='lastname'value={data.lastname} onChange={handlechange}/>
            </div>
            <div className='input-box'>
                   <label>Email</label>
                   <input type='text' name="email" placeholder='email'value={data.email} onChange={handlechange}/>
            </div>
            <div className='input-box'>
                   <label>Contact Number</label>
                   <input type='text' name="contact" placeholder='contact'value={data.contact} onChange={handlechange}/>
            </div>
            <div className='input-box'>
                   <label>Company</label>
                   <input type='text' name="company" placeholder='company'value={data.company} onChange={handlechange}/>
            </div>
            <div className='input-box'>
                   <label>State</label>
                   <select type='text' name="state" placeholder='state'value={data.state} onChange={handlechange}>
                   <option value="M.P.">M.P</option>
                    <option value="U.P.">U.P</option>
                    <option value="Bihar">Bihar</option>
                    <option value="C.G">C.G</option>
                   </select>
            </div>
            <div className='input-box'>
                   <label>How would you describe yourself?</label>
                   <select type='text' name="desc" placeholder='desc'value={data.desc} onChange={handlechange}>
                   <option value="M.P.">M.P</option>
                    <option value="U.P.">U.P</option>
                    <option value="Bihar">Bihar</option>
                    <option value="C.G">C.G</option>
                   </select>
            </div>
            <div className='input-box'>
                   <label>Preferred Distributor</label>
                   <select type='text' name="dist" placeholder='dist'value={data.dist} onChange={handlechange}>
                    <option value="M.P.">M.P</option>
                    <option value="U.P.">U.P</option>
                    <option value="Bihar">Bihar</option>
                    <option value="C.G">C.G</option>
                   </select>
            </div>
            <div className='input-box' >
                   <label>Addictional Information</label>
                   <input type='text' name="info" placeholder='info'value={data.info} onChange={handlechange} />
            </div>
            <div  >
                  
                   <input type='checkbox'/>
                   <label>I'd like to receive promotions product information and sevice offers from Avery Dennison.</label>
            </div>
            <br/>
            <br/>
            <div className='button-container' >
                <button type='submit'>Submit</button>
            </div>
        </div>
        </form>
    </Div>
    
   
   
  )
}
export default Form;

const Div=styled.div`
background-color: white;
width:500px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
padding: 10px;
margin:auto;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;   
.content{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    padding: 20px 0;
}
.input-box{
    display:flex;
    flex-wrap: wrap;
    width:50%;
    padding-bottom: 15px;
}
.input-box:nth-child(2n){
    justify-content: end;

}
.input-box label{
    width:95%;
    color:#2f4f4f;
    font-weight: bold;
    margin:5px 0;
}
.input-box input{
    height:40px;
    width:93%;
    padding:0 10px;
    border-radius: 5px;
    border:1px solid #ccc;
}
.input-box select{
    height:40px;
    width:95%;
    padding:0 10px;
    border-radius: 5px;
    border:1px solid #ccc;
}
button{
    background-color: #F26621;
}
.button-container{
   
    margin:auto;
    width:100%
}
.button-container button{
    width:80%;
    height:40px;
    border-radius: 5px;
}
.head{
    text-align: left;
font: normal normal 600 34px/41px Aktifo A;
letter-spacing: 0px;
color: #000000;
opacity: 1;
}
.p{
    text-align: left;
font: normal normal normal 20px/24px Aktifo A;
letter-spacing: 0px;
color: #292929;
opacity: 1;
}
`