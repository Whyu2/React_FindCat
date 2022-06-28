import React from 'react'

const Header = () => {
  return (
   <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
        <div className='navbar-brand logo1'>FindCat</div>
        <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse" id="navbarsExampleDefault" data-target="#tes" >
        {/* <a href="/user" className="dropdown-item text-white"><i className="fas fa-user fa-fw"></i> Profile</a>
        <a href="/list_post" className="dropdown-item text-white"><i className="fas fa-clipboard-list"></i> List Post </a>
        <a href="/tambah_post" className="dropdown-item text-white"><i className="fas fa-edit"></i> Tambah Post </a>
        <a href="/inbox" className="dropdown-item text-white"><i className="fas fa-inbox"></i> Inbox</a>
        <a href="/logout" className="dropdown-item text-white"><i className="fas fa-sign-out-alt"></i> Logout</a> */}

        </div>
        <div className="collapse navbar-collapse">
            <div className='nav-item dropdown ms-auto' >
                <a  href="#" data-toggle="dropdown" className='nav-item nav-link dropdown-toggle user-action text-white'><i className='fas fa-user fa-fw'></i></a>
                <div className="dropdown-menu">
                <a href="/user" className="dropdown-item"><i className="fas fa-user fa-fw"></i> Profile</a>
                <a href="/list_post" className="dropdown-item"><i className="fas fa-clipboard-list"></i> List Post </a>
                <a href="/tambah_post" className="dropdown-item"><i className="fas fa-edit"></i> Tambah Post </a>
                <a href="/inbox" className="dropdown-item"><i className="fas fa-inbox"></i> Inbox</a>
                <a href="/logout" className="dropdown-item"><i className="fas fa-sign-out-alt"></i> Logout</a>
            </div>
            </div>
        </div>
   </nav>
  )
}

export default Header