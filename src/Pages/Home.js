import React from 'react'
//import { styled } from 'styled-components'
import './home.css'
import imageSrc from './images/Group.jpg'
import image2 from './images/ici.jpg'
import image3 from './images/ici-online.jpg'
import image4 from './images/Path 68.jpg'
import Form from '../Compoents/Form'
const Home = () => {
  return (

    <div className='container'>
      <h1>Home</h1>
      <div className='item1'>
        <div className='item1-1'>
          <img />
          <h1>Take your graphics protection</h1>
          <h1>to the level with DOL</h1>
          <h1>Max verlaminates</h1>
          <br></br>
          <p className='pair'>Pair with MPI 1105 wrapping film</p>
          <p className='pair'>for ramped up protection</p>
          <div className='item-img' style={{ display: "flex", width: "50%", margin: "auto" }}>
            <div>
              <img src={'./images/Group.jpg'} />
              <p>Maximum Duration</p>
            </div>
            <div>
              <img src={'./images/Path.jpg'} />
              <p>Enhanced Appearance</p>
            </div>
            <div>
              <img src={'./images/Path.jpg'} />
              <p>High Gloss Finish</p>
            </div>

          </div>
        </div>
        <div className='item1-2'>
          <Form />
        </div>

      </div>
      <div className='item2'>
        <div className='item2-1'>
          <h1>DOL Max Overlaminate Films</h1>
          <p>Printed graphics deserves maximum protection.DOL Max is the solution.</p>
          <br />
          <h3>Feactures & Benefits:</h3>
          <ul className='list'>
            <li>Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.</li>
            <li>The high gloss finish enhances the appearance of graphics and adds a special touch to help your graphics stand out.</li>
            <li>Our digital overlaminates can be used on a variety of substrates, including banners, vehicle graphics, outdoor signage, and more.</li>
          </ul>

          <div className='button-container'>
            <button>Inquire Now</button>
          </div>


        </div>
        <div className='item2-2'></div>
      </div>
      <div style={{ display: "flex" }}>
        <div className='item3'></div>
        <div className='item4'>
          <h1>Why us?</h1>
          <div className='item' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={imageSrc}  alt='abc'/>
            <div className='para'>
              <h3 className='h3'>Quality Products</h3>
              <p className='p'> Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.   </p>
            </div>
          </div>
          <div className='item' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={image2} />
            <div>
              <h3 className='h3'>Multiple Options</h3>
              <p className='p'>Multiple Options We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.</p>
            </div>
          </div>
          <div className='item' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={image3}/>
            <div>
              <h3 className='h3'>Expertise and Support </h3>
              <p className='p'>Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond.</p>
            </div>
          </div>
          <div className='item' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={image4} />
            <div>
              <h3 className='h3'>Durability Assurance</h3>
              <p className='p'> Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.</p>
            </div>
          </div>
          <div className='item' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src=''/>
          </div>
          <div className='button-container'>
            <button>Request a call back →</button>
          </div>

        </div>
      </div>
      <div style={{ height: "200px", width: "100%", backgroundColor: "black" }}>

      </div>

    </div>
  )
}

export default Home


// const Div=styled.div`
//    height:auto;
//    width:100%;
//    border:1px solid red;
//    .item{
//     height:500px;
//     width:100%;
//     border:1px solid blue;
//    }
//    .div1{
//     background-image: url("https://ibb.co/vmMqtn4");
//    }
// `