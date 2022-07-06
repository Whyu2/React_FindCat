
import { useState,useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const moment = require('moment');

const List_card = () => {

  const [nama,setNama] = useState ('');
  const [token,setToken] = useState ('');
  const [expire, setExpire] = useState ('');
  const [Lists,setList] = useState([]);
  const history = useNavigate();
  useEffect(()=>{
    refreshToken();
  }, []);

  const refreshToken = async ()=>{
    try {
      const responeT = await axios.get('http://localhost:2000/token',{
        withCredentials: true,
      });
      setToken(responeT.data.accessToken);
      const decode = jwt_decode(responeT.data.accessToken);
      setNama(decode.nama);
      setExpire(decode.exp);
    } catch (error) {
      
            history('/login');
    
    }
  }

  useEffect(()=>{
    getLists();
  }, []);

const getLists = async ()=>{
 
  const respone = await axios.get('http://localhost:2000/posts');
  setList(respone.data);

}


  return (
    <div className='row'>
<div className="mb-4 text-white search"><h3>Halooo Selamat Datang Bro {nama} 👋</h3></div> 
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