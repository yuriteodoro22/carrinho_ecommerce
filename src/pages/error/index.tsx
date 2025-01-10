import { Link } from "react-router-dom"


export function Error(){
    return(
        <div className=" w-full h-screen flex flex-col items-center justify-center gap-5">
            <h1 className="font-bold text-2xl">Ops essa pagina não existe !</h1>

            <Link to={'/'}>
               <button className="bg-zinc-900 text-white p-3 rounded">
                Volte a navegar pelos produtos !
                </button>
            </Link>
        </div>
    )
}