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
                      <h3 >Important Links</h3>
                      <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/blog">Blog</a></li>
                      </ul>
                  </div>
                  <div className="col-3">
                      <h3>Quick Links</h3>
                      <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/blog">Blog</a></li>
                      </ul>
                  </div>
                  <div className="col-4">
                      <h3>Address</h3>
                      <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/blog">Blog</a></li>
                      </ul>
                  </div>
            </div>
       </div>
    </div>
  )
}

export default Footer
