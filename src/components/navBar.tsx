import React from 'react'

function NavBar() {
    return (
        <div>
          <div className="bg-blue-600" id="home">
  
    <div className="grid grid-cols-2">
      <div className="flex">
         
        <div className="flex-1 text-white text-right mx-2 font-extrabold">
          <i className="fa fa-clock-o" aria-hidden="true"></i> 
          Mon - Sun: 8:00am - 6:00pm</div>
       
            <div className="flex-1 text-white font-extrabold">
              <i className="fa fa-phone" aria-hidden="true"></i> 
              <a href="tel:(123)456-7890">(123) 456-7890</a>
        </div>
    
      </div>
      <div>
        <ul className="list-none inline-flex float-right mx-10">
          <li className="text-white mx-3 my-3"> <a href="#" className="external">facebook</a> </li>
          <li className="text-white mx-3 my-3"> <a href="#" className="external">twitter</a> </li>
          <li className="text-white mx-3 my-3"> <a href="#" className="external">linkedin</a> </li>
        </ul>
      </div>
    </div>
  
</div>
  <nav className="shadow-lg h-24 relative select-none bg-white lg:flex lg:items-stretch w-full">
  <div className="flex flex-no-shrink items-stretch h-12">
    <a href="http://localhost:3000/carbookingapp" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark">
      <img   className="h-20 mt-8" src={process.env.PUBLIC_URL +'/images/logo.png'}/>
    </a>
    {/* <button className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
      <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
    </button> */}
  </div>
  <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
    <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
      <a href="http://localhost:3000/carbookingapp" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark">Register</a>
      <a href="http://localhost:3000/carbookingapp" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark">Login</a>
      <a href="http://localhost:3000/carbookingapp" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark">Dashboard</a>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar
