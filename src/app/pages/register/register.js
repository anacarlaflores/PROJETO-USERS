'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Formulario = () => {

    const handlerLogin = async (e) => {
      e.preventDefault();
      toast.success('registrado com sucesso')
    }