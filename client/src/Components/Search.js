import React,{useEffect,Fragment} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import BelowNav from './BelowNav'
import Navbar from './Navbar'
import {searchHouse} from '../Store/Actions/houseActions'
import { useDispatch,useSelector } from 'react-redux'
import Spinner from '../Utilities/Spinner'

const Search = () => {
  const single = useSelector(state => state.house.houses)
  const loading = useSelector(state => state.house.loading)

  const params = useParams().house
  console.log(params)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(searchHouse(params))


  },[dispatch,params])

  console.log(single)
  
  return (
    <Fragment>
        <Navbar />
        <BelowNav />
        <div className='container'>
        <h1 className='mb-3'>Property for Sale in: {params}</h1>

              <div className='row'>
             
              {loading ? <Spinner />:single && single.number ===0 ? <h1 className='display-1'>No House Found On That Location</h1>: single ? single && single.houses && single.houses.map(i=> (
            <div className='col-md-4 pt-3' key={i.id}>
          <div className="card">
          <div className="card-header">Properties</div>
              <Link to={`/property/${i.id}`}>
          <img src={i.coverImage} className="card-img-top"  alt="house" />
              </Link>
          <div className="card-body">
            <div className="card-text"><h3 className='text-primary'>R {i.price}</h3></div>
            <p className='card-text'> <span className='lead ml-2'>{i.bedrooms} Bedroom house.</span></p>
            <div className="d-flex justify-content-between align-items-center">
            <p className='lead'><i class="fa-solid fa-car fa-2x m-2"></i>{i.noOfCars}</p>
            
            <div className="garden d-flex justify-content-between align-items-center">
            <img src='/images/gardening.png' alt='gardening'/>
            <p className='lead'>Garden</p>

            </div>

            <div className="swim d-flex justify-content-between align-items-center">
            <img src='/images/swimming-pool.png'  alt='gardening'/>
            <p className='lead'>Pool</p>
            </div>

            </div>
            <div className='dipl'>
            <i className="fa-solid fa-bed p-1"></i>{i.bedrooms} bedrooms
            <i className="fa-solid fa-bath p-1"></i>{i.bathrooms} bathrooms
            <i className="fa-solid fa-bed-front p-1" ></i>{i.size} size
            </div>
          </div>
        </div>
          </div>



)) :'' }
             
        </div>
          </div>



    </Fragment>
  )
}

export default Search