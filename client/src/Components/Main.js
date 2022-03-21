import React from 'react'

const Main = () => {
  return (
      <div className='Main-place'>
          <div className='container text-center'>
          <p className='display-3'>Why Choose Us</p>
          <p className='lead'>We provide full service at every step.</p>
              <div className='row'>
              <div className='col-md-4 pt-5 pt-2 text-center'>
              <img src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=140" className="rounded-circle" alt="Cinque Terre"/>
              <h1 className='display-6 text-primary'>Property Alert</h1>
              <p className='lead'>Sign up for an account and get customised property alerts in your inbox.</p>
              <button className='btn-secondary text-capitalize text-center'>Sign Up</button>
              </div>

              <div className='col-md-4 pt-5 pt-2 text-center'>
              <img src="https://images.pexels.com/photos/6343/village-hotel-building-countryside-6343.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=140" className="rounded-circle" alt="Cinque Terre"/>
              <h1 className='display-6 text-primary'>Property Alert</h1>
              <p className='lead'>Sign up for an account and get customised property alerts in your inbox.</p>
              <button className='btn-outline-secondary'>Sign Up</button>
              </div>

              <div className='col-md-4 pt-5 pt-2 text-center'>
              <img src="https://images.pexels.com/photos/816198/pexels-photo-816198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=140" className="rounded-circle" alt="Cinque Terre"/>
              <h1 className='display-6 text-primary'>Property Alert</h1>
              <p className='lead'>Sign up for an account and get customised property alerts in your inbox.</p>
              <button className='btn-outline-secondary'>Sign Up</button>
              </div>

              </div>
              
              </div>
      </div>
        )


}

export default Main