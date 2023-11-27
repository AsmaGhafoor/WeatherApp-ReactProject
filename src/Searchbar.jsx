import React, { useState } from 'react'


function Searchbar({onSeacrh}) {
    const[location,setLocation]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSeacrh(location);
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={location} onChange={(e)=> setLocation(e.target.value)} placeholder="Enter Location"/>
        <button type="submit">Search</button>
    </form>
  )
}

export default Searchbar