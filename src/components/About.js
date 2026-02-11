// import React,{useState} from 'react'

export default function About(props) {

    let mystyle = {
      color : props.mode === 'dark' ? 'white' : 'black',
      backgroundColor : props.mode === 'dark' ? '#042743' : 'white'
    }


  return (
    <>
    <div className="container my-3" style={mystyle}>
    <h2>About Us</h2>
    <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" >
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Why TextUtils</strong>
      </button>
    </h2>
    <div id="collapseOne" style={mystyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils is a simple and powerful text utility tool designed to make working with text fast and effortless. Whether you want to analyze, format, or transform text, TextUtils helps you get it done in just a few clicks.It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>What We Do</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body">
        We provide useful text features like word counting, character counting, case conversion, and text cleanup. Our goal is to save your time by offering quick, accurate, and easy-to-use text tools in one place. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>https://shubhamsarate.github.io/TextUtils-React/</code> though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Our Mission</strong>
      </button>
    </h2>
    <div id="collapseThree" style={mystyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Our mission is to create a lightweight, user-friendly platform that helps students, developers, writers, and professionals handle text more efficiently. We focus on simplicity, speed, and a smooth user experience. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>textutils.world</code> though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>
</>
  )
}
