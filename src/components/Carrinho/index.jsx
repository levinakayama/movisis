import "./styles.css"
import Button from 'react-bootstrap/Button';
import Header from "../Menu/index.jsx"
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState, useEffect} from "react" 
import parse from "html-react-parser";
import CardCompra from "../Card"

function Carrinho(){
    const [productsAddedToCard, setProductsAddedToCard] = useState([])
    
    useEffect(() => {
        
    } , [])
    return(
        <>
        <Header/>
            <h3>Checkout</h3>
        <main>
            
            <div className="wrapper__produto">
               {/* <div>{parse(itemParciado)}</div> */}
            </div>
            <div className="finish__buy">
                <div className="wrapper__resumo">
                    <h4>Resumo</h4>
                    <div className="wrapper__content">
                        <div className="wrapper">
                            <p>Produtos</p>
                            <p>Preço</p>
                        </div>
                        <div className="wrapper">
                            <p>Descontos</p>
                            <p>Preço</p>
                        </div>
                        <div className="wrapper">
                            <p>Frete</p>
                            <p>Preço</p>
                        </div>
                    </div>
                    
                    <span></span>
                    <div className="wrapper">
                        <h5>Total</h5>
                        <p>Preço</p>
                    </div>
                    <Button >Finalizar Compra</Button>
                </div>
            </div>
        </main>
        </>
    )
}

export default Carrinho;


{/* {productsAddedToCard?.map((product) => (
                  <CardCompra
                  key={product.nomeProduto}
                  imgProduto={product.imgProduto}
                  nomeProduto={product.nomeProduto}
                  precoProduto={product.precoProduto}
                  dataInclusao={product.dataInclusao}
                  categoria={product.categoria}
                  />
                ))} */}