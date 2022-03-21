import React,{useEffect } from 'react'
import BelowNav from './BelowNav'
import Navbar from './Navbar'
import {useDispatch,useSelector} from 'react-redux'
import {exclusive} from '../Store/Actions/houseActions';
import { Link } from 'react-router-dom';
import Spinner from '../Utilities/Spinner';




const Featured = () => {
  // const [house,setHouse] = useState('')

  const dispatch = useDispatch()
  const hou = useSelector(state => state.house.exclusive)
  const loading = useSelector(state => state.house.loading)
  
  useEffect(()=>{
    
    dispatch(exclusive())
    
    
  },[dispatch])
  // setHouse(hou)

  // console.log(house)
  return (
    <>
    <Navbar />
    <BelowNav />
    <div className='featured pt-3 pb-4'>
        <div className='container text-center'>
            <h1 className='mb-2'>Featured Properties Sale</h1>
            <p className='lead mb-1' id='handi'>Handpicked properties by our team.</p>
            <p className='lead mb-1' id='handi'>Only Cape Town, Somerset West, Houghton Houses Available.</p>
            
     <div className="row ">
    { loading ? <Spinner />: !hou ? '': hou && hou.map(h=>(
  <div className="col-lg-4 pt-3" key={h.id}>
  <div className='shadow-lg rounded'>
    <div className="card">
    <Link to={`property/${h.id}`}>
      <img src={h.coverImage} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body">
        <h5 className="card-title"><i className="fa-solid fa-location-dot p-1"></i>{h.name}</h5>
        <div className='hello'>
        <p className='p-1'>Beds:<span> {h.bedrooms}</span></p>
        <p className='p-1'>Bath:<span> {h.bathrooms}</span></p>
        <p className='p-1'>Garage:<span> {h.noOfCars}</span></p>
            
        <p className='p-1'>Size:<span> {h.size}</span></p>
        </div>
        <p className="card-text">This House is A home T Who ever wishes to own this property.Find the details on another following detail</p>
      </div>
    </div>

  </div>
  </div>

))}



    </div>

        </div>
    </div>

    <div className='Main-place'>
          <div className='container text-center mt-2'>
          <p className='display-3'>Why Choose Us</p>
          <p className='lead'>We provide full service at every single step.</p>
              <div className='row'>
              <div className='col-md-4 pt-5 pt-2 text-center'>
              <img src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=140" className="rounded-circle" alt="Cinque Terre"/>
              <h1 className='display-6 text-primary'>Property Alert</h1>
              <p className='lead'>Sign up for an account and get customised property alerts in your inbox.</p>
              <button className='btn btn-outline-primary text-capitalize text-center'>Sign Up</button>
              </div>

              <div className='col-md-4 pt-5 pt-2 text-center'>
              <img src="https://images.pexels.com/photos/6343/village-hotel-building-countryside-6343.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=140" className="rounded-circle" alt="Cinque Terre"/>
              <h1 className='display-6 text-warning'>Property Alert</h1>
              <p className='lead'>Sign up for an account and get customised property alerts in your inbox.</p>
              <button className='btn btn-outline-primary'>Sign Up</button>
              </div>

              <div className='col-md-4 pt-5 pt-2 text-center'>
              <img src="https://images.pexels.com/photos/816198/pexels-photo-816198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=140" className="rounded-circle" alt="Cinque Terre"/>
              <h1 className='display-6 text-warning'>Property Alert</h1>
              <p className='lead'>Sign up for an account and get customised property alerts in your inbox now.</p>
              <button className='btn btn-outline-primary'>Sign Up</button>
              </div>

              </div>
              
              </div>
      </div>


    </>
  )
}

export default Featured