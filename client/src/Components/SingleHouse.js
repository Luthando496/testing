import React, { Fragment,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Navbar from './Navbar'
import {useDispatch,useSelector} from 'react-redux'
import {fetchId} from '../Store/Actions/houseActions';
import Spinner from '../Utilities/Spinner'



const SingleHouse = () => {
  const params = useParams().id
  const dispatch = useDispatch()
  const single = useSelector(state => state.house.single)
  const loading = useSelector(state => state.house.loading)
  
  
  useEffect(()=>{
    dispatch(fetchId(params))
  },[dispatch,params])





  return (
      <Fragment>
      <Navbar />
    
    <div className='container'>
      {loading ? <Spinner />: single ? (
    <div className='row'>
    <div className='col-md-9'>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
      
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={single && single.coverImage} className="d-block w-100" alt="..."/>
    </div>
  {single && single.images.map(i=> (
    <div className="carousel-item" key={i.url}>
      <img src={i.url} className="d-block w-100" alt="..."/>
    </div>
    
  ))}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>


    
    <div className='col-md-3 d-none d-md-block text-center' id='sidebar'>
    <div className='side '>
    <img src='https://d5t4h5a9.rocketcdn.me/wp-content/uploads/2021/04/Website-Photo-18.png' className='profile' alt='home' />
    <h4>James Carter</h4>
    <p className='btn btn-outline-info'><i className="fas fa-phone"></i>Show Phone No.</p>
    <img src='https://prppublicstore.blob.core.windows.net/live-za-images/offices/6742/image/7807a79159fd4be68628f2c1dc7c121b_osm.jpg' alt='phone' className='img-fluid'/>

  
    </div>
    </div>

    </div>):<h1>House does not exist</h1> }

    </div>


    <div className='container'>
    {loading ? <Spinner />: single ? (
    <div className='row'>
    <div className='col-md-9 mt-4'>
    <div className='card'>
    <h3 className='text-primary m-3'>R {single && single.price}</h3>
    <p className='lead m-3'>{single && single.location}</p>
    <p className='ms-3'>{single && single.name}</p>
    <div className='shoe'>
    <div className='iconer'>
    <i className='fas fa-bed'></i><span className='ps-2'>{single && single.bedrooms}</span>
    </div>
    <div className='iconer'>
    <i className='fas fa-bath'></i><span className='ps-2'>{single && single.bathrooms}</span>
    </div>
    
    <div className='iconer'>
    <i className='fas fa-car'></i><span className='ps-2'>{single && single.noOfCars}</span>
    </div>
    <div className='iconer'>
    <i className='fas fa-landmark'></i><span className='ps-2'>{single && single.size}sq</span>
    </div>

    </div>
    </div>

    </div>

    <div className='col-md-3 mt-3 d-none d-md-block text-center' id='sidebar'>
      <div className='card container'>
      <h4 className='card-title'>Contact Agent</h4>
    <p className='btn btn-outline-primary'><i className="fas fa-phone"></i>Show Phone No.</p>
    <div className="input-group mb-3">
  <i className="fas fa-user input-group-text"></i>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div className="input-group mb-3">
      <i className="fas fa-envelope input-group-text"></i>
  <input type='email' className="form-control" placeholder="Email" />
      </div>

      <div className="input-group mb-3">
  <i className="fas fa-phone input-group-text" id="phone"></i>
  <input type='number' className="form-control mb-3" placeholder="Phone" row='3' />
      </div>
      <textarea className="form-control mb-3" id="exampleFormControlTextarea1" placeholder='I am interested in this property, please contact me.'></textarea>
    </div>
    

    </div>
      <div className='col-md-9'>
    <div className='card mt-3'>
      <div className='card-text m-3'><h4>Move To What Moves You</h4></div>
      <div className='card-text m-3'><p>Exclusive Sole Mandate - Nestled in quiet serenity lies this Gem. Centrally located to major routes and all other amenities, this light and spacious 3 bedroom home is designed for luxury living.</p></div>
      <div className='card-text m-2'><p >{single && single.description}</p></div>
    </div>
    </div>


    </div>): ''}




    </div>
      </Fragment>
  )
}

export default SingleHouse