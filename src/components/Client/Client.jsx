import React, { useEffect } from 'react'

const Client = ({ search, id, client }) => {

    console.log(client[0].name)

    // console.log(date)
    const happy = () => {
        const today = new Date()
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const bd = client[0].birth_date
        if (bd == date) {
            alert("Happy Birthday")
        }

    }
    useEffect(() => {
        happy()
    }, [])

    return (
        <div>
            <h1 >Bienvenue <span> {client[0].name} </span> </h1>
            <img style={{ width: "150px" }} src="https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" alt="user" />
            <p>Info</p>
            <div className="infos">
                <h3> {client[0].tel} </h3>
                <h3> {client[0].email} </h3>
                <h3> {client[0].birth_date} </h3>
                <button onClick={()=> alert("Happy Birthday")} > Click Me </button>
            </div>
        </div>
    )
}

export default Client