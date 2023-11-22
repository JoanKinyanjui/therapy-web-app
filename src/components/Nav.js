import Image from 'next/image'
import React from 'react'

function Nav() {
  return (
    <div className='w-11/12 md:w-10/12 lg:w-[70%] flex justify-between mx-auto py-2 items-center'>
        <div>
            <Image width={80} height={80} alt='logo' src='/assets/logo.png' />
         </div>

        <div className='md:flex text-[14px] md:text-[16px] gap-[20px] items-center hidden'>
            <p>Home</p>
            <p>Schedule</p>
            <p>Favourites</p>
            <p>Peer to Peer Therapy</p>
            <p>  <Image width={40} height={40} alt='logo' src='/assets/accountIcon.png' className='rounded-full md:w-[40px] md:h-[40px] border-2  border-[ #7CB7FD]' /></p>
        </div>

        <div className="navbar bg-base-100 md:hidden flex justify-end">
  <div className="navbar-end">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute right-0">
     <li><p>Home</p></li>
          <li><p>Schedule</p></li>
          <li><p>Favourites</p></li>
          <li><p>Peer to Peer Therapy</p></li>
<li><p>  <Image width={40} height={40} alt='logo' src='/assets/accountIcon.png' className='rounded-full md:w-[50px] md:h-[50px] border-2  border-[ #7CB7FD]' /></p></li>
      </ul>
    </div>
  </div>
</div>

    </div>
  )
}

export default Nav