import React from 'react'

import "./Header.css"
import logo from '../Image/epiclogo.svg'

// import logo from 'Agit sset/'

function Header() {
  return (
      <>
          <section>
               <div className="container">
              <div className="nav">
                  <div className="logo">
                      <div className="companylogo">
                          <figure>
                              <img src={logo} alt="" />
                          </figure>
                      </div>
                      <div className="header">
                          <div className="list">
                              <ul class="navlinks">
                                  <li>Home</li>
                                  <li>About us</li>
                                  <li>Contact</li>
                                  <li>Login</li>
                                  <li>Registration</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="searchbar">
                      <form action="">
                          <input type="search" />
                      </form>
                  </div>
              </div>
              </div>
               <section>
              <div className="container">
                      <h1 className='text-center'><span>Welcomwe</span> To Epic World</h1>
                      <p className='text-center'>Welcome to EPIC WORLD, We are committed to providing a seamless blend of online and offline education solution that empower learners of all ages to unlock their potential.</p>
                      <div className="text-center">
                          <button class="logInBtn">Login</button>
                          <button class="logInBtn">Register</button>
                      </div>
              </div>
          </section>
          </section>
         
         
    </>
  )
}

export default Header
