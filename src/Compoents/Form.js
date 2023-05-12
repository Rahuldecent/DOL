import React from 'react'
import styled from "styled-components"
const Form = () => {
  return (
     <Div className='container'>
        
        <form>
        <div className="content">
            <div className='input-box'>
                   <label>Full Name</label>
                   <input/>
            </div>
            <div className='input-box'>
                   <label>Last Name</label>
                   <input/>
            </div>
            <div className='input-box'>
                   <label>Email</label>
                   <input/>
            </div>
            <div className='input-box'>
                   <label>Contact Number</label>
                   <input/>
            </div>
            <div className='input-box'>
                   <label>Company</label>
                   <input/>
            </div>
            <div className='input-box'>
                   <label>State</label>
                   <select>
                    <option>M.P</option>
                    <option>U.P</option>
                    <option>Bihar</option>
                    <option>C.G</option>
                   </select>
            </div>
            <div className='input-box'>
                   <label>How would you describe yourself?</label>
                   <select>
                    <option>M.P</option>
                    <option>U.P</option>
                    <option>Bihar</option>
                    <option>C.G</option>
                   </select>
            </div>
            <div className='input-box'>
                   <label>Preferred Distributor</label>
                   <select>
                    <option>M.P</option>
                    <option>U.P</option>
                    <option>Bihar</option>
                    <option>C.G</option>
                   </select>
            </div>
            <div className='input-box' >
                   <label>Addictional Information</label>
                   <input />
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

export default Form


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
`