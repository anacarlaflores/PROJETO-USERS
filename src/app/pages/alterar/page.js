'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Telalogin = () => {

    const handlerLogin = async (e) => {
        e.preventDefault();
        toast.success('alterado com sucesso')
      }


};

export default Telalogin;