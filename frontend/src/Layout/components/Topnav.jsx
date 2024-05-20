import React from 'react'

const Topnav = () => {
  return (
   <div>
      <div className='topnav'>
    <div className="container">
    <div className="icons">
          <div className="circle">
          <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div className="circle">
          <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="circle">
          <i class="fa-brands fa-instagram"></i>
          </div>
          <div className="circle">
          <i class="fa-brands fa-linkedin-in"></i>
          </div>
      </div>
      <div className="abouts">
        <div className="number">
        <i class="fa-solid fa-phone"></i>
        <p>(+1) 234 5678 9101</p>
        </div>
        <div className="mail">
        <i class="fa-solid fa-envelope"></i>
        <p>shop@yourdomain.com</p>
        </div>

      </div>
   

    </div>
   
   </div>
   </div>
  
  )
}

export default Topnav