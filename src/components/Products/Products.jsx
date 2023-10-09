import React from 'react'



const Products = ({ client }) => {
    console.log(client.products)
    return (
        <div className='products' style={{display:"flex"}}>
            {client[0].products.map((product, id) => (
                <div key={id} className="card" style={{ display: "flex", justifyContent:"center", alignItems:"center", gap:"20px" }}>
                    <img src={product.image} alt="Avatar" style={{ width: '50%', display: 'flex', justifyContent: "center", alignItems: "center", borderRadius:"15px" }} />
                    <div className="container">
                        <h4><b> {product.name} </b></h4>
                        <p> {product.price} </p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Products