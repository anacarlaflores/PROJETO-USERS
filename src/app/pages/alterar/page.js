'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Telalogin = () => {

    const handlerLogin = async (e) => {
        e.preventDefault();
        toast.success('alterado com sucesso')
      }

      return (

        <div>

        <h1>LOGIN</h1>

        <form onSubmit={handlerLogin}>

        <input
          placeholder='Nome'
          type="nome" >
        </input>

        <input
          placeholder='E-mail'
          type="email">
        </input>

        <input
          placeholder='Senha'
          type='password'
        >
        </input>

        <button>

            ENTRAR
        
        </button>

        <button>
            
            <a href="/pages/dashboard">VOLTAR</a>
            
        </button>

       </form>

       <ToastContainer/>

        </div>

      )



};

export default Telalogin;