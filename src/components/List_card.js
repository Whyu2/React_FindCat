
import React from "react";
const List_card = (props) => {

  return (
    <div className='row'>
    <div className='col-xl-3 mb-4 col-md-6'>
      <div className='card card2'>

        <div className='card-body'>
          <p>Nama</p>
 
          <div className='row'>
            <div className='col-7 mt-3'>
            <i className="fas fa-map-marker-alt"></i>Daerah
            </div>
            <div className='col-5 mt-3'>
            <p className='text-secondary'>Tanggal ilang</p>
            </div>
        <button onClick={()=>props.clicked()}  className='btn card2 delete' >tes</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default List_card;