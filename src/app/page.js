'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();

    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("ERRO! EMAIL OU SENHA")
      }
      push('/pages/dashboard');
    } catch {
      refresh();
    }
  }

  return (
    <body>

      <div class="body">
      
      <form onSubmit={handlerLogin}>

      <h1>ENTRAR</h1>

      <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>

        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>

        <button>ENTRAR</button>

      </form>
      <ToastContainer/>
      </div>
    </body>
  );
}
