import React from 'react'

function Footer() {
  return (
    <div>
          <div className="conatainer">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                  <div className="col-1">
                      <h4>ESHOP</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, praesentium deserunt.</p>
                      <b>Made With Love By <span>Khaled Elfahl</span> </b>
                  </div>
                  <div className="col-2">
                      <h3>Important Links</h3>
                      <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                      </ul>
                  </div>
            </div>
       </div>
    </div>
  )
}

export default Footer
