import React, { useState } from 'react'
import client from '../../client'
import Client from '../Client/Client'
import Products from '../Products/Products'

const Login = () => {
    const id = client[0].id
    const [search, setSearch] = useState("")
    
  return (
    <div style={{display: "flex", flexDirection: "column" ,justifyContent: "space-evenly", alignItems: "center", paddingBottom:"50px"}}>
        <div style={{display:"flex", flexDirection:"column", padding:"0", margin: "0"}}>
            <h1>Bienvenu Chez GET</h1>
            <p>DRESS TO IMPRESS</p>
        </div>
        <form className='form'>
            <input className='inp' type="text" placeholder='Enter Your Carte Number' value={search} onChange={(e)=>setSearch(e.target.value)}  />
        </form>

        {
            search === id ? <Client search={search} id={id} client={client} /> : ""
        } 
        {
            search === id ? <Products client= {client}/> : ""
        } 
    </div>
  )
}

export default Login