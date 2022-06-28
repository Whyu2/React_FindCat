
import { useState,useEffect } from "react";
import axios from "axios";
const moment = require('moment');
const List_card = () => {

const [Lists,setList] = useState([]);

 
const getLists = async ()=>{
  const respone = await axios.get('http://localhost:2000/posts');
  setList(respone.data);
}

useEffect(()=>{
  getLists();
}, [])






  return (
    <div className='row'>
   { Lists.map((listku, index)=>(
 <div key={listku.id} className='col-xl-3 mb-4 col-md-6'>
 <div className='card card2'>
   <div className='card-body'>
     <p >{listku.nama}</p>

     <div className='row'>
       <div className='col-7 mt-3'>
       <i className="fas fa-map-marker-alt"></i>{

        
       } {listku.daerah}
       </div>
       <div className='col-5 mt-3'>
       <p className='text-secondary'>
        {listku.tgl_hilang}
        </p>
       </div>
   {/* <button className='btn card2 delete' >tes</button> */}
     </div>
   </div>
 </div>
</div>
    )) };
       
    </div>
  )
}

export default List_card;