import React from 'react'

function Modals() {
    return (
        <div>
             <div className="text-4xl text-black text-center py-10 uppercase">
            <h1>Best <span className="text-blue-600 font-black">Modals</span></h1>
            </div>
           <div className="mx-auto px-32">
           <div className="flex flex-wrap h-96">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/6 ">
            <ul className="list-none px-3">
  <li className="border-solid border-l-4 mb-1 bg-white border-blue-600 px-3 py-2 shadow">Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li className="border-solid border-l-4  mb-1  bg-white border-blue-600 px-3 py-2 shadow">Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
  <li className="border-solid border-l-4  mb-1 bg-white border-blue-600 px-3 py-2 shadow">Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
</ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-4/6 shadow">
            <div id="tab01" className="tab-contents" >
            <div className="row tabsCar vehicle-data">
            
                <div className="carImg"><img src={process.env.PUBLIC_URL +'/images/car1.jpeg' } alt="hy"/></div>
              
</div>
          </div>
            </div>
        </div>

           </div>
  
        </div>
        
    )
}

export default Modals
