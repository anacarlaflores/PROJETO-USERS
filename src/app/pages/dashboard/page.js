import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import Listar from "@/app/componentes/listar";

export default async function Dashboard() {
   
    const users = await getUsers();
    
    return (
        <div>
           
           <Suspense fallback={<p>processando</p>}>
                <Listar users={users}/>

                <button>
                    
                    <a href="/pages/alterar">Alterar</a>
                    
                </button>

                <button>
                    
                    <a href="/pages/registrar">Registrar</a>
                    
                </button>
                
           </Suspense>
            
        </div>
    );
};