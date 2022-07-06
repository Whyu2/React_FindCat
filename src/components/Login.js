
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [nama,setNama] = useState ('');
  const [email,setEmail] = useState ('');
  const [password,setPassword] = useState ('');
  const [cnfrmpassword,setCnfrmpassword] = useState ('');
  const [msg,setMsg] = useState ('');
  const [done,setDone] = useState ('');
  const history = useNavigate();

  const login = async (e) =>{
    try {
      e.preventDefault();
      await axios.post('http://localhost:2000/users/login',{
        email : email,
        password : password,
    },{
      withCredentials: true,
    });
    history('/home');
    } catch (err) {
      if (err.response){
        setMsg(err.response.data.msg);
      }
    }
}

  return (
    <div>
        <form onSubmit={ login }>
        <div className="col-md-4 mt-5 p-3 card mx-auto  bg-white text-dark">
        <div className="col-12  card2 mx-auto  bg-danger text-white">
            <div className="col p-3 text-center">
                <div className="col"><h1>Login</h1></div>
            </div>
        </div>
        <h3 className="text-center text-danger mt-3">{msg}</h3>
        <div className="flex-rev mt-3">
                <input type="text" placeholder="Masukkan Email" value={email} onChange= {(e) => setEmail(e.target.value) }/>
                <h4 ><strong>Email</strong></h4>
        </div>
        <div className="flex-rev ">
                <input type="text" placeholder="Masukkan Password" value={password} onChange= {(e) => setPassword(e.target.value) }/>
                <h4 ><strong>Password</strong></h4>
        </div>

        <button className="mt-3">  <h4 ><strong>Login</strong></h4></button>
        
        <div className="mt-2"> Belum punya akun ? <a href="/register" >Register</a>
        </div>
        </div>
        </form>
        
    </div>
    
  )
}

export default Login;