import React, { useEffect, useState } from 'react'
import client from '../../client'
import Client from '../Client/Client'
import Products from '../Products/Products'

const Login = () => {
    const id = client[0].id
    const [search, setSearch] = useState("")
    const bd = client[0].birth_date
    const date = new window.Date()
    useEffect(() => {
      if (bd === date) { alert("Happy Birthday!!")}
    }, [date])
    

    
  return (
    <div style={{display: "flex", flexDirection: "column" ,justifyContent: "space-evenly", alignItems: "center", paddingBottom:"50px"}}>
        <div style={{display:"flex", flexDirection:"column", padding:"0", margin: "0"}}>
            <h1>Bienvenu Chez GET</h1>
            <p>DRESS TO IMPRESS</p>
        </div>
        <form className='form'>
            <input type="text" placeholder='Enter Your Carte Number' value={search} onChange={(e)=>setSearch(e.target.value)}  />
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