import React, { useState } from 'react'


function Searchbar({ onSearch }) {
  const [location, setLocation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3 mx-auto" >
        <input type="text" value={location} style={{ maxWidth: "250px" }} onChange={(e) => setLocation(e.target.value)} className="form-control" placeholder="Enter Location" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
      </div>
      {/* <input type="text" value={location} onChange={(e)=> setLocation(e.target.value)} placeholder="Enter Location"/>
        <button type="submit" classNameName='btn btn-primary'>Search</button> */}
    </form>
  )
}

export default Searchbar