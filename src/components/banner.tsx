import React from 'react'

function Banner() {
    const Background= process.env.PUBLIC_URL + "/images/banner.jpeg";
    const divStyle = {
       backgroundImage: `url(${Background})`

      };
    return (
        <div>
        <div className="bg-cover bg-center  h-auto text-white py-48 px-10 object-fill" style={divStyle}>
       <div className="md:w-1/2">
        <p className="font-bold text-sm uppercase">Services</p>
        <p className="text-3xl font-bold">Multimedia products</p>
        <p className="text-2xl mb-10 leading-none">Atractive designs for your brand</p>
        </div>  
    </div>
        </div>
    )
}

export default Banner
