import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../pages/home";


interface CartContextData{
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (newItem: ProductProps) => void;
    removeItemCart: (product: CartProps) => void;
    total: string;
}

interface CartProps{
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

interface CartProviderProps{
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData)


function CartProvider({children} : CartProviderProps){
    const [cart , setCart] = useState<CartProps[]>([]);
    const [total, setTotal] = useState("");

    function addItemCart(newItem : ProductProps ){
        const indexItem = cart.findIndex( item => item.id === newItem.id) // Procurando se já tem um item igual na nossa lista, se tiver ele retorna o index do item se não ele retorna -1

        if(indexItem !== -1){ //Se o retorno da constante for diferente de -1 
            let cartList = cart; // criando uma variavel para a nossa lista cart

            cartList[indexItem].amount = cartList[indexItem].amount + 1; //Adicionando +1 ao amount
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price; //Multiplicando o amount pelo total que contem o valor do item

            setCart(cartList)
            totalResultCart(cartList)
            return; // Para parar a execução e não continuar abaixo
        }

        let data = { //Criando uma variavel objeto, que adicionará o item novo a nossa lista caso ele não esteja nela, e adicionando propriedades a esse objeto além das que já vem da nossa api
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products,data])
        totalResultCart([...cart, data])
    }

    function removeItemCart(product: CartProps){
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amount > 1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount -1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;
            
            setCart(cartList);
            totalResultCart(cartList)
            return;
            }
        

        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem);
        totalResultCart(removeItem)
    }

    function totalResultCart(items: CartProps[]){
        let myCart = items;
        let result = myCart.reduce((acumulador, objeto) => { return acumulador + objeto.total}, 0) //Acumulador começará em 0, passara em cada objeto nosso pegando a propriedade total e somando
        // essa propriedade de todo nosso array de objetos

        const resultFormated = result.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        setTotal(resultFormated);
    }

    return(
        <CartContext.Provider 
        value={{ 
            cart,
            cartAmount: cart.length,
            addItemCart,
            removeItemCart,
            total
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;