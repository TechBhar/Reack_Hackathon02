import React from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
    <>
      <h1 className='text-center text-success my-3'>
        Welcome to PayWall
      </h1>
      <h4 className='text-center text-primary my-5'>Use your payment wallet anywhere, anytime!</h4>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div class="card">
              <img src="https://images.pexels.com/photos/2767756/pexels-photo-2767756.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="" height="200px" />
              <div class="card-body">
                <h5 class="card-title">Mall</h5>
                <p class="card-text">Want to know the list of malls in your city that accepts PaymentWallet?</p>
                <a href="#" class="btn btn-primary">Click here</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src="https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." height="200px" />
              <div class="card-body">
                <h5 class="card-title">Pharmacies</h5>
                <p class="card-text">Want to know the list of pharmacies in your city that accepts PaymentWallet?</p>
                <a href="#" class="btn btn-primary">Click here</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." height="200px" />
              <div class="card-body">
                <h5 class="card-title">Restaurants</h5>
                <p class="card-text">Want to know the list of restaurants in your city that accepts PaymentWallet?</p>
                <a href="#" class="btn btn-primary">Click here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 className='mt-3 text-center'>Click here to logout! <span><Link to="/login">Logut</Link></span> </h5>
    </>
  )
}

export default Dashboard