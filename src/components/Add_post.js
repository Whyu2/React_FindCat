
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Add_post = () => {
const [nama,setNama] = useState ('');
const [idhewan,setIdhewan] = useState ('');
const [daerah,setDaerah] = useState ('');
const [map,setMap] = useState ('');
const [hilang,setHilang] = useState ('');
const [kelamin,setKelamin] = useState ('')
const [jenis,setjenis] = useState ('');
const [informasi,setInformasi] = useState ('');

const history = useNavigate();


const savePost = async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:2000/posts',{
            nama : nama,
            id_hewan : idhewan,
            daerah : daerah,
            lokasimap : map,
            tgl_hilang : hilang,
            jenis : jenis,
            kelamin : kelamin,
            informasi : informasi
        });
        history('/home');
}

  return (
    <div>
        <form onSubmit={savePost}>
        <div className="col-md-8 mt-5 card card2 mx-auto  bg-danger text-white">
            <div className="col p-3">
                <div className="col"><h1>Tambah Postingan</h1></div>
            </div>
        </div>
        <div className="col-md-8 mt-1 p-3 card card2 mx-auto  bg-white text-dark">
        <div className="col"><h3>Deskripsi</h3></div>
        <div className="flex-rev">
                <input type="text" placeholder="Masukkan si kucing, misal yanto, sigundul, paijo dll" value={nama} onChange= {(e) => setNama(e.target.value) }/>
                <label >Nama</label>
        </div>
        <div className="flex-rev">
                <input type="text" placeholder="ID" value={idhewan} onChange= {(e) => setIdhewan(e.target.value) }/>
                <label >id hewan</label>
        </div>
         <div className="flex-rev">
                <input type="text" placeholder="Masukkan dearah hilangnya" value={daerah} onChange= {(e) => setDaerah(e.target.value) }/>
                <label>Daerah</label>
        </div>
        <div className="flex-rev">
                <input type="text" placeholder="Masukkan lokasi map" value={map} onChange= {(e) => setMap(e.target.value) }/>
                <label >Lokasi Map</label>
        </div>
        <div className="flex-rev">
        <input type="date" placeholder="Tanggal hilang" name="hilang" value={hilang} onChange= {(e) => setHilang(e.target.value) }/>
                <label >Tangga Hilang   </label>
        </div>
        <div className="flex-rev">
                 <input type="text" placeholder="Jenis kucing" value={jenis} onChange= {(e) => setjenis(e.target.value) }/>
                <label >Jenis</label>
        </div>
        <div className="flex-rev">
                <input type="text" placeholder="Kelamin kucing"value={kelamin} onChange= {(e) => setKelamin(e.target.value) }/>
                <label >Jenis Kelamin</label>
        </div>
        <div className="flex-rev">
                        <textarea placeholder="Informasi terakhir / ciri - ciri khusus" value={informasi} onChange= {(e) => setInformasi(e.target.value) }/>
                        <label>Informasi</label>
                    </div>
        <div className="col-md-4">
        <button >Post</button>
        </div>

        </div>
        </form>
    </div>
    
  )
}

export default Add_post;