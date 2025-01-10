import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { BsCartPlus } from "react-icons/bs"
import { Link, useParams } from "react-router-dom"
import { ProductProps } from "../home"
import { api } from "../../services/api"
import toast from "react-hot-toast"







export function Description() {
    const { addItemCart } = useContext(CartContext)
    const {id} = useParams();
    const [products, setProducts] = useState<ProductProps>()

    useEffect(() => {
        async function getProducts() {
            const response = await api.get(`/products/${id}`)
            setProducts(response.data)
            console.log(response.data)
        }
    
        getProducts();
    },[])

    function handleAddCartItem(product : ProductProps){
        toast.success("Produto adicionado no carrinho" , {
            style:{
                borderRadius: 10,
                backgroundColor: "#121212",
                color: "#FFF"
            }
        })
        addItemCart(product)
    }

    return (
        <div>
           {products ? (
             <div className="w-full max-w-7xl flex flex-col lg:flex-row mx-auto gap-5 items-center justify-between ">
                    <section className="flex-1 max-w-lg" key={products.id}>
                        <img
                            src={products.cover}
                            alt={products.title}
                        />
                    </section>

                    <section className="flex-1 max-w-lg">
                        <strong>{products.title}</strong>
                        <p className="mt-5">{products.description}</p>
                        <div className="flex mt-3 gap-2">
                            <p className="font-medium">{products.price.toLocaleString('pt-BR', {
                                style:'currency',
                                currency:'BRL'
                            })}</p>
                            <Link to={'/cart'}>
                            <button className="bg-zinc-900 p-1 rounded" onClick={() => handleAddCartItem(products)}>
                              <BsCartPlus size={19} color="#FFF"/>
                          </button>
                            </Link>
                        </div>
                    </section>
                </div>
           ) : ( 
            <p>carregando....</p>
           )}
        </div>
    )
}