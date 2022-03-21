import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const BelowNav = () => {
  let navigate = useNavigate()
  const [search,setSearch] = useState('')
  const Change =(e)=>{
    e.preventDefault()
    console.log(e.target.value)

    setSearch(e.target.value)
    
  }
  const Click =()=>{
    navigate(`/search/${search}`)


  }
  const Submit=()=>{
    console.log(search)
    navigate(`/search/${search}`)
    
  }
  return (
      <div className='mt-auto' style={{width:'100%',minHeight:'290px',background:'rgba(4, 39, 238, 0.7)'}}>
    <div className='container p-5' >
      <p className='text-black display-3'>Find Property for Sale Only.</p>
      <form onSubmit={Submit}>
      <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Search for a City, Suburb or Web Reference" aria-label="Recipient's username" aria-describedby="button-addon1" onChange={Change} value={search} id='search' />
  <button className="btn btn-danger" type='button' id="button-addon1" onClick={Click} >SEARCH</button>
</div>

      </form>
    </div>
    </div>
  )
}

export default BelowNav